import {
  getSettings,
  wordsToPractice,
  addSession,
  saveDiagnosedLevel,
  saveLevelExamResult,
} from '../lib/storage.js';
import { getTopic } from '../data/topics.js';
import {
  LANGUAGES,
  buildTeacherPrompt,
  buildPlacementPrompt,
  buildLevelExamPrompt,
  CORRECTION_TOOL,
  PLACEMENT_TOOL,
  LEVEL_EXAM_TOOL,
  getLevelTitle,
  helpMessage,
} from '../prompts/teacher.js';
import { LiveClient } from '../live/liveClient.js';
import { MicRecorder, PcmPlayer } from '../live/audio.js';
import { el, esc, formatDuration, toast, highlight } from '../lib/ui.js';
import { session } from '../state.js';
import { getInstitutionalGeminiKey, getCurrentUser } from '../lib/firebase.js';

/**
 * Sala de conversación por voz con el profesor virtual, Test de Diagnóstico o Examen de Nivel.
 */
export function renderTalk(root) {
  const pending = session.pending;
  if (!pending) {
    location.hash = '#/home';
    return null;
  }

  const s = getSettings();
  const lang = LANGUAGES[pending.language];
  const isPlacement = pending.mode === 'placement' || pending.level === 'auto';
  const isExam = pending.mode === 'exam';

  const topic = pending.topicId ? getTopic(pending.topicId) : null;
  let topicTitle = 'Conversación libre';
  if (isPlacement) {
    topicTitle = '🎯 Test de Diagnóstico Oral';
  } else if (isExam) {
    topicTitle = `🎓 Examen: ${getLevelTitle(pending.currentLevel)} ➔ ${getLevelTitle(pending.targetLevel)}`;
  } else if (pending.customTopic) {
    topicTitle = pending.customTopic;
  } else if (topic) {
    topicTitle = topic.title;
  }

  let client = null;
  let recorder = null;
  let player = null;
  let timerId = null;
  let animId = null;

  let seconds = 0;
  let micActive = true;
  let isConnecting = true;
  let placementResultData = null;
  let examResultData = null;

  // Estado de la sesión actual
  const transcriptHistory = []; // { role: 'user' | 'teacher', text: '', partial: boolean }
  const corrections = []; // { id, type, said, correct, explanation, phonetic, timestamp }
  const vocabLearned = new Set();

  let subtitleText = `${lang.flag} ${lang.nameEs} · Profe ${lang.teacherName} · <span id="timerText">00:00</span>`;
  if (isPlacement) {
    subtitleText = `${lang.flag} ${lang.nameEs} · Evaluación de Nivel · <span id="timerText">00:00</span>`;
  } else if (isExam) {
    subtitleText = `${lang.flag} ${lang.nameEs} · Examen de Ascenso (Mínimo 15/20) · <span id="timerText">00:00</span>`;
  }

  let statusInitialText = 'Conectando con tu profesora...';
  if (isPlacement) statusInitialText = 'Iniciando tu test de nivelación...';
  if (isExam) statusInitialText = 'Tu examinadora iniciará la evaluación...';

  const view = el(`
    <main class="page talk">
      <header class="talk-header">
        <div class="talk-info">
          <div class="status-indicator connecting" id="statusDot"></div>
          <div>
            <h1 class="talk-title">${esc(topicTitle)}</h1>
            <p class="muted small">${subtitleText}</p>
          </div>
        </div>
        <button class="btn danger small" id="btnEnd">${isPlacement || isExam ? 'Finalizar evaluación' : 'Finalizar'}</button>
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
        <p class="teacher-status muted small" id="lblTeacherStatus">${statusInitialText}</p>
      </section>

      <!-- Tarjetas de corrección en vivo -->
      <section class="corrections-container" id="correctionsBox">
        <div class="corrections-label small muted" id="correctionsLabel" hidden>Correcciones en vivo:</div>
        <div class="corrections-list" id="correctionsList"></div>
      </section>

      <!-- Alerta intuitiva si el alumno no entiende o se queda callado -->
      <div class="silence-nudge" id="silenceNudge" hidden>
        <span class="nudge-icon">💡</span>
        <div class="nudge-text">
          <b>¿No entendiste lo que dijo tu profesora?</b>
          <span class="muted small">Toca aquí para que te lo traduzca y explique con calma.</span>
        </div>
        <button class="btn primary small" id="btnNudgeExplain">Traducir en español</button>
      </div>

      <!-- Área de subtítulos y transcripción en tiempo real -->
      <section class="chat-flow" id="chatFlow">
        <div class="empty-state muted">
          <p>${isPlacement ? 'La profesora te agradecerá y dará la bienvenida en español.' : (isExam ? 'La examinadora presentará el escenario de evaluación.' : 'La conversación aparecerá aquí a medida que hablen.')}</p>
        </div>
      </section>

      <!-- Barra de controles y texto alternativo -->
      <footer class="talk-footer">
        <form class="text-input-form" id="textInputForm">
          <input 
            type="text" 
            id="txtUserMessage" 
            placeholder="💬 Escribe aquí si no puedes usar el micrófono..." 
            autocomplete="off" 
            maxlength="200" 
          />
          <button type="submit" class="btn primary small" id="btnSendText">Enviar</button>
        </form>

        <div class="quick-helpers">
          <button class="chip ghost" data-help="suggestions">💡 ¿Qué digo?</button>
          <button class="chip ghost" data-help="slower">🐢 Más lento</button>
          <button class="chip ghost" data-help="explain">🇪🇸 En español</button>
        </div>

        <div class="audio-controls">
          <button class="mic-button active" id="btnMic" aria-label="Silenciar micrófono">
            <span class="mic-icon">🎙️</span>
            <span class="mic-wave" id="micWave"></span>
          </button>
          <span class="muted small" id="micStatusText">Micrófono encendido</span>
        </div>
      </footer>

      <!-- Modal 1: Fin de sesión normal -->
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

      <!-- Modal 2: Certificado de Diagnóstico de Nivel -->
      <dialog class="modal" id="placementModal">
        <div class="modal-card placement-card">
          <div style="text-align: center; margin-bottom: 6px;">
            <span style="font-size: 2.4rem;">🏅</span>
            <h2 style="margin-top: 4px;">¡Diagnóstico Completado!</h2>
            <p class="muted small">Resultado oficial de tu nivel inicial de conversación</p>
          </div>

          <div class="placement-badge-box">
            <span class="placement-badge" id="txtDiagLevel">A1 · Principiante</span>
          </div>

          <div class="placement-info">
            <p id="txtDiagRationale" style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 8px;"></p>
            <div id="boxDiagStrengths"></div>
            <div id="boxDiagSuggestions"></div>
          </div>

          <div class="modal-actions" style="margin-top: 14px;">
            <button class="btn primary big w-full" id="btnApplyPlacement">Fijar este nivel y empezar mis clases 🚀</button>
          </div>
        </div>
      </dialog>

      <!-- Modal 3: Resultado de Examen de Ascenso de Nivel (Mínimo 15/20) -->
      <dialog class="modal" id="examModal">
        <div class="modal-card exam-card">
          <div style="text-align: center; margin-bottom: 6px;">
            <span style="font-size: 2.6rem;" id="txtExamEmoji">🎓</span>
            <h2 id="txtExamTitle" style="margin-top: 4px;">Resultado del Examen</h2>
            <p class="muted small" id="txtExamSubtitle">Evaluación oficial en escala vigesimal (0 a 20)</p>
          </div>

          <div class="placement-badge-box">
            <span class="placement-badge" id="txtExamScoreBadge">Nota: 16 / 20</span>
          </div>

          <div class="placement-info" id="examInfoContent"></div>

          <div class="modal-actions" style="margin-top: 14px;">
            <button class="btn primary big w-full" id="btnExitExam">Continuar</button>
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
  const placementModal = view.querySelector('#placementModal');
  const examModal = view.querySelector('#examModal');
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
    silenceTimerBanner = setTimeout(() => {
      if (silenceNudge) silenceNudge.hidden = false;
    }, 7000);

    silenceTimerAutoAsk = setTimeout(() => {
      if (client && client.ready) {
        client.sendText(helpMessage('silence'));
        if (silenceNudge) silenceNudge.hidden = true;
      }
    }, 14000);
  }

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
      transcriptHistory.push({ role: 'user', text: curUserBubble.textContent });
      curUserBubble = null;
    } else if (role === 'teacher' && curTeacherBubble) {
      transcriptHistory.push({ role: 'teacher', text: curTeacherBubble.textContent });
      curTeacherBubble = null;
    }
  }

  function showPlacementModal(res) {
    placementResultData = res;
    view.querySelector('#txtDiagLevel').textContent = res.levelTitle || res.level;
    view.querySelector('#txtDiagRationale').textContent = res.rationale || '';

    const strengthsBox = view.querySelector('#boxDiagStrengths');
    if (res.strengths && res.strengths.length) {
      strengthsBox.innerHTML = `<b>💪 Fortalezas detectadas:</b><ul>${res.strengths.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`;
    } else {
      strengthsBox.innerHTML = '';
    }

    const suggBox = view.querySelector('#boxDiagSuggestions');
    if (res.suggestions && res.suggestions.length) {
      suggBox.innerHTML = `<b>🎯 Recomendaciones para tus clases:</b><ul>${res.suggestions.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`;
    } else {
      suggBox.innerHTML = '';
    }

    if (!placementModal.open) {
      placementModal.showModal();
    }
  }

  function showExamModal(res) {
    examResultData = res;
    const passed = res.passed || res.score >= 15;
    const emoji = view.querySelector('#txtExamEmoji');
    const title = view.querySelector('#txtExamTitle');
    const subtitle = view.querySelector('#txtExamSubtitle');
    const scoreBadge = view.querySelector('#txtExamScoreBadge');
    const infoContent = view.querySelector('#examInfoContent');
    const btnExit = view.querySelector('#btnExitExam');

    if (passed) {
      emoji.textContent = '🎉';
      title.textContent = '¡Felicitaciones! Has Aprobado';
      subtitle.textContent = `Asciendes oficialmente a ${res.targetLevelTitle || res.targetLevel}`;
      scoreBadge.className = 'placement-badge score-passed';
      scoreBadge.textContent = `Nota: ${res.score} / 20 · ¡APROBADO!`;
      btnExit.textContent = `Empezar mis clases en ${res.targetLevelTitle || res.targetLevel} 🚀`;
    } else {
      emoji.textContent = '📚';
      title.textContent = 'Buen esfuerzo · Por mejorar';
      subtitle.textContent = `Para ascender necesitas una nota mínima de 15/20`;
      scoreBadge.className = 'placement-badge score-failed';
      scoreBadge.textContent = `Nota: ${res.score} / 20 · No alcanzado`;
      btnExit.textContent = `Continuar practicando en ${getLevelTitle(pending.currentLevel)}`;
    }

    const rubric = res.rubric || {};
    infoContent.innerHTML = `
      <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 8px;">${esc(res.feedback || '')}</p>
      
      <div class="rubric-grid">
        <div class="rubric-item"><span class="muted small">Fluidez</span><b>${rubric.fluency || 0}/5</b></div>
        <div class="rubric-item"><span class="muted small">Gramática</span><b>${rubric.grammar || 0}/5</b></div>
        <div class="rubric-item"><span class="muted small">Pronunciación</span><b>${rubric.pronunciation || 0}/5</b></div>
        <div class="rubric-item"><span class="muted small">Vocabulario</span><b>${rubric.vocabulary || 0}/5</b></div>
      </div>

      ${res.strengths?.length ? `<div style="margin-top: 8px;"><b>💪 Fortalezas:</b><ul>${res.strengths.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
      ${res.areasToImprove?.length ? `<div style="margin-top: 8px;"><b>🎯 Puntos a reforzar:</b><ul>${res.areasToImprove.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
    `;

    if (!examModal.open) {
      examModal.showModal();
    }
  }

  async function startSession() {
    try {
      player = new PcmPlayer(24000);
      await player.init();

      const effectiveKey = s.apiKey || getInstitutionalGeminiKey();
      if (!effectiveKey) {
        throw new Error('No hay clave de Gemini configurada. Por favor contacta a tu profesor o configúrala en Ajustes.');
      }

      client = new LiveClient({
        apiKey: effectiveKey,
        model: s.model || 'gemini-3.8-live'
      });

      const user = getCurrentUser();
      const studentName = user?.displayName || s.studentName || (user?.email ? user.email.split('@')[0] : '');

      let prompt;
      let tools;
      let startSignal;

      if (isPlacement) {
        prompt = buildPlacementPrompt({ language: pending.language, studentName });
        tools = PLACEMENT_TOOL;
        startSignal = '[DIAGNOSTIC_START: Start the diagnostic interview in Spanish with a warm welcome and explain the friendly purpose, as described in instructions]';
      } else if (isExam) {
        prompt = buildLevelExamPrompt({
          language: pending.language,
          currentLevel: pending.currentLevel,
          targetLevel: pending.targetLevel,
          studentName,
          scenario: pending.scenario,
        });
        tools = LEVEL_EXAM_TOOL;
        startSignal = '[EXAM_START: Inicia el examen formal explicando el escenario de evaluación en español e inglés]';
      } else {
        prompt = buildTeacherPrompt({
          language: pending.language,
          level: pending.level,
          topic,
          customTopic: pending.customTopic,
          correctionMode: s.correctionMode,
          explainIn: s.explainIn,
          studentName,
          wordsToPractice: wordsToPractice(pending.language)
        });
        tools = CORRECTION_TOOL;
        startSignal = '[SESSION_START: Say hello briefly in character and ask the first open question]';
      }

      // Eventos del cliente Live
      client.addEventListener('ready', () => {
        isConnecting = false;
        let readyStatus = 'Tu profesora está escuchando. ¡Habla!';
        if (isPlacement) readyStatus = 'Iniciando tu test de diagnóstico...';
        if (isExam) readyStatus = 'Iniciando tu examen de nivel...';

        updateStatus('connected', readyStatus);
        chatFlow.innerHTML = '';
        toast(isPlacement ? 'Iniciando test de diagnóstico' : (isExam ? 'Iniciando examen de nivel' : 'Conectado con tu profesora virtual'), 'success');

        // Iniciar cronómetro
        timerId = setInterval(() => {
          seconds++;
          timerText.textContent = formatDuration(seconds);
        }, 1000);

        client.sendText(startSignal);
      });

      client.addEventListener('audio', (e) => {
        if (e.detail?.data) {
          player.play(e.detail.data);
          avatarBox.classList.add('speaking');
          lblTeacherStatus.textContent = isExam ? 'Tu examinadora está hablando...' : 'Tu profesora está hablando...';
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

      // Cierre sincronizado del Diagnóstico: la profesora habla primero y luego se abre el modal
      client.addEventListener('placement-result', (e) => {
        saveDiagnosedLevel(e.detail);
        const checkDoneSpeaking = () => {
          if (!player || !player.isPlaying) {
            showPlacementModal(e.detail);
          } else {
            setTimeout(checkDoneSpeaking, 500);
          }
        };
        setTimeout(checkDoneSpeaking, 6500);
      });

      // Cierre sincronizado del Examen de Nivel: la profesora anuncia la nota por voz y luego se abre el modal
      client.addEventListener('level-exam-result', (e) => {
        saveLevelExamResult(e.detail);
        const checkDoneSpeaking = () => {
          if (!player || !player.isPlaying) {
            showExamModal(e.detail);
          } else {
            setTimeout(checkDoneSpeaking, 500);
          }
        };
        setTimeout(checkDoneSpeaking, 6500);
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
        tools
      });

      // Micrófono
      recorder = new MicRecorder((base64Chunk, level) => {
        if (base64Chunk && client.ready) {
          client.sendAudio(base64Chunk);
        }
        if (btnMic) {
          const sc = Math.min(1.5, 1 + level * 2.5);
          view.querySelector('#micWave').style.transform = `scale(${sc})`;
        }
      });

      await recorder.start();

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

    if (isPlacement) {
      const defaultDiagnostic = placementResultData || {
        level: 'A1',
        levelTitle: 'A1 · Principiante',
        rationale: 'Has completado una breve conversación inicial de diagnóstico.',
        strengths: ['Buena disposición para comunicarse'],
        suggestions: ['Practicar vocabulario cotidiano y frases de presentación']
      };
      saveDiagnosedLevel(defaultDiagnostic);
      showPlacementModal(defaultDiagnostic);
    } else if (isExam) {
      const defaultExam = examResultData || {
        score: 14,
        passed: false,
        targetLevel: pending.targetLevel,
        targetLevelTitle: getLevelTitle(pending.targetLevel),
        rubric: { fluency: 3, grammar: 4, pronunciation: 3, vocabulary: 4 },
        feedback: 'Examen completado parcialmente. Sigue practicando las conversaciones de tu nivel actual.',
        strengths: ['Participación activa en el diálogo'],
        areasToImprove: ['Mayor fluidez en la respuesta y conectores']
      };
      saveLevelExamResult(defaultExam);
      showExamModal(defaultExam);
    } else {
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
  }

  view.querySelector('#btnExitTalk').addEventListener('click', () => {
    endModal.close();
    session.pending = null;
    location.hash = '#/home';
  });

  view.querySelector('#btnApplyPlacement').addEventListener('click', () => {
    placementModal.close();
    session.pending = null;
    toast('¡Nivel fijado con éxito! Tus clases ahora se adaptarán a este nivel', 'success');
    location.hash = '#/home';
  });

  view.querySelector('#btnExitExam').addEventListener('click', () => {
    examModal.close();
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
