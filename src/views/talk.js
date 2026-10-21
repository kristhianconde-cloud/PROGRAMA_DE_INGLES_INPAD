import { getSettings, wordsToPractice, addSession } from '../lib/storage.js';
import { getTopic } from '../data/topics.js';
import { LANGUAGES, buildTeacherPrompt, CORRECTION_TOOL, helpMessage } from '../prompts/teacher.js';
import { LiveClient } from '../live/liveClient.js';
import { MicRecorder, PcmPlayer } from '../live/audio.js';
import { el, esc, formatDuration, toast, highlight } from '../lib/ui.js';
import { session } from '../state.js';
import { getInstitutionalGeminiKey, getCurrentUser } from '../lib/firebase.js';

/**
 * Sala de conversación por voz con el profesor virtual.
 */
export function renderTalk(root) {
  const pending = session.pending;
  if (!pending) {
    location.hash = '#/home';
    return null;
  }

  const s = getSettings();
  const lang = LANGUAGES[pending.language];
  const topic = pending.topicId ? getTopic(pending.topicId) : null;
  const topicTitle = pending.customTopic ? pending.customTopic : (topic ? topic.title : 'Conversación libre');

  let client = null;
  let recorder = null;
  let player = null;
  let timerId = null;
  let animId = null;

  let seconds = 0;
  let micActive = true;
  let isConnecting = true;

  // Estado de la sesión actual
  const transcriptHistory = []; // { role: 'user' | 'teacher', text: '', partial: boolean }
  const corrections = []; // { id, type, said, correct, explanation, phonetic, timestamp }
  const vocabLearned = new Set();

  const view = el(`
    <main class="page talk">
      <header class="talk-header">
        <div class="talk-info">
          <div class="status-indicator connecting" id="statusDot"></div>
          <div>
            <h1 class="talk-title">${esc(topicTitle)}</h1>
            <p class="muted small">${lang.flag} ${lang.nameEs} · Profe ${lang.teacherName} · <span id="timerText">00:00</span></p>
          </div>
        </div>
        <button class="btn danger small" id="btnEnd">Finalizar</button>
      </header>

      <!-- Avatar animado del profesor e indicador de voz -->
      <section class="teacher-stage">
        <div class="teacher-avatar" id="avatarBox">
          <div class="avatar-ring ring-2"></div>
          <div class="avatar-ring ring-1"></div>
          <div class="avatar-face">
            <span class="avatar-emoji">👩‍🏫</span>
          </div>
        </div>
        <p class="teacher-status muted small" id="lblTeacherStatus">Conectando con tu profesora...</p>
      </section>

      <!-- Tarjetas de corrección en vivo -->
      <section class="corrections-container" id="correctionsBox">
        <div class="corrections-label small muted" id="correctionsLabel" hidden>Correcciones en vivo:</div>
        <div class="corrections-list" id="correctionsList"></div>
      </section>

      <!-- Alerta intuitiva si el alumno no entiende o se queda callado -->
      <div class="silence-nudge" id="silenceNudge" hidden>
        <div class="nudge-left">
          <span class="nudge-icon">💡</span>
          <div>
            <b>¿No entendiste lo que dijo tu profesora?</b>
            <p class="small muted">Toca aquí para que te lo traduzca en español y te enseñe qué responder.</p>
          </div>
        </div>
        <button class="btn primary small" id="btnNudgeExplain">Traducir en español</button>
      </div>

      <!-- Transcripción en vivo (subtítulos) -->
      <section class="transcripts-box" id="transcriptsBox">
        <div class="chat-flow" id="chatFlow">
          <div class="msg teacher intro">
            <div class="bubble">Conectando... Cuando termine, saluda a tu profesora para empezar.</div>
          </div>
        </div>
      </section>

      <!-- Barra de ayuda y controles de audio -->
      <footer class="talk-footer">
        <form class="text-input-row" id="textInputForm">
          <input type="text" id="txtUserMessage" placeholder="💬 Escribe aquí si no puedes usar el micrófono..." autocomplete="off" />
          <button type="submit" class="btn primary small" id="btnSendText">Enviar</button>
        </form>

        <div class="help-buttons">
          <button class="btn ghost small" data-help="suggestions" title="Dame 2 o 3 opciones de qué puedo decir">💡 ¿Qué digo?</button>
          <button class="btn ghost small" data-help="slower" title="Pide que hable más despacio">🐢 Más lento</button>
          <button class="btn ghost small" data-help="explain" title="Pide que te explique lo último en español">🇪🇸 En español</button>
        </div>

        <div class="audio-controls">
          <button class="mic-button active" id="btnMic" aria-label="Silenciar micrófono">
            <span class="mic-icon">🎙️</span>
            <span class="mic-wave" id="micWave"></span>
          </button>
          <span class="muted small" id="micStatusText">Micrófono encendido</span>
        </div>
      </footer>

      <!-- Modal de fin de sesión / reporte -->
      <dialog class="modal" id="endModal">
        <div class="modal-card">
          <h2>🎉 ¡Gran práctica!</h2>
          <p class="muted" id="modalSummaryText">Resumen de tu conversación</p>
          
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-val" id="statDuration">00:00</span>
              <span class="stat-lbl">Duración</span>
            </div>
            <div class="stat-item">
              <span class="stat-val" id="statCorrections">0</span>
              <span class="stat-lbl">Correcciones</span>
            </div>
            <div class="stat-item">
              <span class="stat-val" id="statTurns">0</span>
              <span class="stat-lbl">Intercambios</span>
            </div>
          </div>

          <div class="summary-corrections" id="modalCorrectionsList"></div>

          <div class="modal-actions">
            <button class="btn primary" id="btnExitTalk">Volver al inicio</button>
          </div>
        </div>
      </dialog>
    </main>
  `);

  const statusDot = view.querySelector('#statusDot');
  const timerText = view.querySelector('#timerText');
  const avatarBox = view.querySelector('#avatarBox');
  const lblTeacherStatus = view.querySelector('#lblTeacherStatus');
  const correctionsBox = view.querySelector('#correctionsBox');
  const correctionsLabel = view.querySelector('#correctionsLabel');
  const correctionsList = view.querySelector('#correctionsList');
  const chatFlow = view.querySelector('#chatFlow');
  const btnMic = view.querySelector('#btnMic');
  const micStatusText = view.querySelector('#micStatusText');
  const btnEnd = view.querySelector('#btnEnd');
  const endModal = view.querySelector('#endModal');
  const silenceNudge = view.querySelector('#silenceNudge');
  const btnNudgeExplain = view.querySelector('#btnNudgeExplain');

  let silenceTimerBanner = null;
  let silenceTimerAutoAsk = null;

  function clearSilenceTimers() {
    if (silenceTimerBanner) clearTimeout(silenceTimerBanner);
    if (silenceTimerAutoAsk) clearTimeout(silenceTimerAutoAsk);
    silenceTimerBanner = null;
    silenceTimerAutoAsk = null;
    if (silenceNudge) silenceNudge.hidden = true;
  }

  function startSilenceWatchdog() {
    clearSilenceTimers();
    // A los 7 segundos sin respuesta muestra la ayuda visual
    silenceTimerBanner = setTimeout(() => {
      if (silenceNudge) silenceNudge.hidden = false;
    }, 7000);

    // A los 14 segundos sin respuesta, la profesora interviene amablemente por voz
    silenceTimerAutoAsk = setTimeout(() => {
      if (client && client.ready) {
        client.sendText(helpMessage('silence'));
        if (silenceNudge) silenceNudge.hidden = true;
      }
    }, 14000);
  }

  // Elementos temporales de transcripción parcial
  let curUserBubble = null;
  let curTeacherBubble = null;

  function updateStatus(state, msg) {
    statusDot.className = `status-indicator ${state}`;
    lblTeacherStatus.textContent = msg;
  }

  function appendCorrectionCard(c) {
    correctionsLabel.hidden = false;
    corrections.push({ ...c, id: Date.now(), timestamp: seconds });

    const badgeIcons = {
      pronunciation: '🗣️ Pronunciación',
      grammar: '✍️ Gramática',
      vocabulary: '📚 Vocabulario'
    };

    const card = el(`
      <div class="correction-card card-${c.type || 'grammar'}">
        <div class="corr-header">
          <span class="corr-badge badge-${c.type}">${badgeIcons[c.type] || '💡 Corrección'}</span>
          ${c.phonetic ? `<span class="corr-phonetic">/${esc(c.phonetic)}/</span>` : ''}
        </div>
        <div class="corr-body">
          <div class="corr-diff">
            <span class="corr-said"><s>${esc(c.said)}</s></span>
            <span class="corr-arrow">➔</span>
            <span class="corr-correct"><b>${esc(c.correct)}</b></span>
          </div>
          <div class="corr-exp small">${esc(c.explanation)}</div>
        </div>
      </div>
    `);

    correctionsList.prepend(card);

    // Si había un mensaje de usuario reciente, resaltamos visualmente lo que dijo
    if (curUserBubble && c.said) {
      curUserBubble.innerHTML = highlight(curUserBubble.textContent, c.said, 'user-err-highlight');
    }
  }

  function updateTranscript(role, text) {
    if (!text || !text.trim()) return;
    
    if (role === 'user') {
      if (!curUserBubble) {
        const wrap = el(`<div class="msg user"><div class="bubble"></div></div>`);
        chatFlow.appendChild(wrap);
        curUserBubble = wrap.querySelector('.bubble');
        curUserBubble.textContent = text.trim();
      } else {
        const prev = curUserBubble.textContent.trim();
        if (!prev.includes(text.trim())) {
          curUserBubble.textContent = prev + ' ' + text.trim();
        }
      }
      chatFlow.scrollTop = chatFlow.scrollHeight;
    } else if (role === 'teacher') {
      if (!curTeacherBubble) {
        const wrap = el(`<div class="msg teacher"><div class="bubble"></div></div>`);
        chatFlow.appendChild(wrap);
        curTeacherBubble = wrap.querySelector('.bubble');
        curTeacherBubble.textContent = text.trim();
      } else {
        const prev = curTeacherBubble.textContent.trim();
        if (!prev.includes(text.trim())) {
          curTeacherBubble.textContent = prev + ' ' + text.trim();
        }
      }
      chatFlow.scrollTop = chatFlow.scrollHeight;
    }
  }

  function finalizeTurn(role) {
    if (role === 'user' && curUserBubble) {
      const txt = curUserBubble.textContent.trim();
      if (txt) transcriptHistory.push({ role: 'user', text: txt });
      curUserBubble = null;
    } else if (role === 'teacher' && curTeacherBubble) {
      const txt = curTeacherBubble.textContent.trim();
      if (txt) transcriptHistory.push({ role: 'teacher', text: txt });
      curTeacherBubble = null;
    }
  }

  async function startSession() {
    try {
      player = new PcmPlayer(24000);
      await player.init();

      const effectiveKey = s.apiKey || getInstitutionalGeminiKey();
      if (!effectiveKey) {
        throw new Error('No hay clave de Gemini configurada. Por favor configúrala en Ajustes o contacta a tu profesor.');
      }

      client = new LiveClient({
        apiKey: effectiveKey,
        model: s.model || 'gemini-3.8-live'
      });

      const user = getCurrentUser();
      const studentName = user?.displayName || s.studentName || (user?.email ? user.email.split('@')[0] : '');

      // Configuración del profesor
      const prompt = buildTeacherPrompt({
        language: pending.language,
        level: pending.level,
        topic,
        customTopic: pending.customTopic,
        correctionMode: s.correctionMode,
        explainIn: s.explainIn,
        studentName,
        wordsToPractice: wordsToPractice(pending.language)
      });

      // Eventos del cliente Live
      client.addEventListener('ready', () => {
        isConnecting = false;
        updateStatus('connected', 'Tu profesora está escuchando. ¡Habla!');
        chatFlow.innerHTML = '';
        toast('Conectado con tu profesora virtual', 'success');

        // Iniciar cronómetro
        timerId = setInterval(() => {
          seconds++;
          timerText.textContent = formatDuration(seconds);
        }, 1000);

        // Envía un saludo silencioso o señal inicial para que el profesor rompa el hielo
        client.sendText('[SESSION_START: Say hello briefly in character and ask the first open question]');
      });

      client.addEventListener('audio', (e) => {
        if (e.detail?.data) {
          player.play(e.detail.data);
          avatarBox.classList.add('speaking');
          lblTeacherStatus.textContent = 'Tu profesora está hablando...';
        }
      });

      client.addEventListener('input-transcript', (e) => {
        clearSilenceTimers();
        updateTranscript('user', e.detail.text);
      });

      client.addEventListener('output-transcript', (e) => {
        updateTranscript('teacher', e.detail.text);
      });

      client.addEventListener('interrupted', () => {
        clearSilenceTimers();
        player.stop();
        finalizeTurn('teacher');
        avatarBox.classList.remove('speaking');
        lblTeacherStatus.textContent = 'Te escucho...';
      });

      client.addEventListener('turn-complete', () => {
        finalizeTurn('teacher');
        finalizeTurn('user');
        avatarBox.classList.remove('speaking');
        lblTeacherStatus.textContent = 'Tu turno, continúa la conversación';
        startSilenceWatchdog();
      });

      client.addEventListener('correction', (e) => {
        appendCorrectionCard(e.detail);
      });

      client.addEventListener('reconnecting', () => {
        updateStatus('connecting', 'Reconectando sesión...');
      });

      client.addEventListener('reconnected', () => {
        updateStatus('connected', 'Conexión restablecida');
      });

      client.addEventListener('error', (e) => {
        toast(e.detail.message || 'Error en la conexión con Gemini', 'danger');
        updateStatus('error', 'Error en la conexión');
      });

      client.addEventListener('close', (e) => {
        if (!e.detail.expected) {
          toast(e.detail.reason || 'Conexión finalizada por el servidor', 'warning');
          updateStatus('disconnected', 'Desconectado');
        }
      });

      // Conexión WebSocket
      await client.connect({
        systemInstruction: prompt,
        voiceName: s.voice || 'Kore',
        tools: CORRECTION_TOOL
      });

      // Micrófono
      recorder = new MicRecorder((base64Chunk, level) => {
        if (base64Chunk && client.ready) {
          client.sendAudio(base64Chunk);
        }
        // Indicador de nivel en el botón de micrófono
        if (btnMic) {
          const sc = Math.min(1.5, 1 + level * 2.5);
          view.querySelector('#micWave').style.transform = `scale(${sc})`;
        }
      });

      await recorder.start();

      // Bucle de animación para la boca/anillos del profesor según volumen
      function animLoop() {
        if (player && player.isPlaying) {
          const lvl = player.level();
          avatarBox.style.setProperty('--voice-level', String(Math.min(1.8, 1 + lvl * 3)));
        } else {
          avatarBox.style.setProperty('--voice-level', '1');
        }
        animId = requestAnimationFrame(animLoop);
      }
      animLoop();

    } catch (err) {
      console.error(err);
      toast(`No se pudo iniciar: ${err.message}`, 'danger');
      updateStatus('error', 'Fallo al iniciar el audio o la conexión');
    }
  }

  // Controles de usuario
  btnMic.addEventListener('click', () => {
    micActive = !micActive;
    if (recorder) recorder.setMuted(!micActive);
    btnMic.classList.toggle('active', micActive);
    btnMic.classList.toggle('muted-mic', !micActive);
    micStatusText.textContent = micActive ? 'Micrófono encendido' : 'Micrófono silenciado';
    if (!micActive && client) client.audioStreamEnd();
  });

  view.querySelectorAll('[data-help]').forEach((b) => {
    b.addEventListener('click', () => {
      const kind = b.dataset.help;
      if (!client || !client.ready) return;
      client.sendText(helpMessage(kind));
      toast('Ayuda enviada a la profesora', 'info');
    });
  });

  const textInputForm = view.querySelector('#textInputForm');
  const txtUserMessage = view.querySelector('#txtUserMessage');

  textInputForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = txtUserMessage.value.trim();
    if (!val) return;
    if (!client || !client.ready) {
      toast('Aún conectando con la profesora...', 'warning');
      return;
    }

    clearSilenceTimers();
    if (player && player.isPlaying) {
      player.stop();
      finalizeTurn('teacher');
    }

    finalizeTurn('user');
    updateTranscript('user', val);
    finalizeTurn('user');

    client.sendText(val);
    txtUserMessage.value = '';
    lblTeacherStatus.textContent = 'Tu profesora está procesando tu respuesta...';
    startSilenceWatchdog();
  });

  btnNudgeExplain?.addEventListener('click', (e) => {
    e.stopPropagation();
    clearSilenceTimers();
    if (client && client.ready) {
      client.sendText(helpMessage('explain'));
      toast('La profesora te explicará en español', 'info');
    }
  });

  silenceNudge?.addEventListener('click', () => {
    clearSilenceTimers();
    if (client && client.ready) {
      client.sendText(helpMessage('explain'));
      toast('La profesora te explicará en español', 'info');
    }
  });

  btnEnd.addEventListener('click', () => {
    endSession();
  });

  function endSession() {
    clearSilenceTimers();
    if (timerId) clearInterval(timerId);
    if (animId) cancelAnimationFrame(animId);
    if (recorder) recorder.stop();
    if (player) player.close();
    if (client) client.close();

    // Guardar en historial local
    const sessionRecord = {
      id: 'sess_' + Date.now(),
      date: new Date().toISOString(),
      language: pending.language,
      level: pending.level,
      topicTitle,
      durationSec: seconds,
      corrections,
      turnsCount: transcriptHistory.length
    };
    addSession(sessionRecord);

    // Mostrar modal de reporte
    view.querySelector('#statDuration').textContent = formatDuration(seconds);
    view.querySelector('#statCorrections').textContent = String(corrections.length);
    view.querySelector('#statTurns').textContent = String(transcriptHistory.length);

    const corrBox = view.querySelector('#modalCorrectionsList');
    if (corrections.length === 0) {
      corrBox.innerHTML = '<p class="success-callout">👏 ¡Excelente! No se detectaron errores notables en esta conversación.</p>';
    } else {
      corrBox.innerHTML = `
        <h3>Palabras y expresiones para repasar:</h3>
        <ul class="modal-corr-items">
          ${corrections.map((c) => `
            <li>
              <b>${esc(c.correct)}</b> ${c.phonetic ? `<i>/${esc(c.phonetic)}/</i>` : ''} 
              <span class="muted small">— dijiste: "${esc(c.said)}"</span>
              <p class="small text-secondary">${esc(c.explanation)}</p>
            </li>
          `).join('')}
        </ul>
      `;
    }

    endModal.showModal();
  }

  view.querySelector('#btnExitTalk').addEventListener('click', () => {
    endModal.close();
    session.pending = null;
    location.hash = '#/home';
  });

  // Iniciar la llamada
  startSession();

  root.appendChild(view);

  return {
    async destroy() {
      clearSilenceTimers();
      if (timerId) clearInterval(timerId);
      if (animId) cancelAnimationFrame(animId);
      if (recorder) await recorder.stop();
      if (player) await player.close();
      if (client) client.close();
    }
  };
}
