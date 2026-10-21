import { getSettings, saveSettings, getHistory, getLastExamResult, getHighestUnlockedLevel, isLevelUnlocked } from '../lib/storage.js';
import { LANGUAGES, LEVELS, LEVEL_ORDER, STUDY_PLAN, LEVEL_LESSONS, getNextLevel, getLevelTitle, getRandomExamScenario } from '../prompts/teacher.js';
import { CATEGORIES, TOPICS } from '../data/topics.js';
import { el, esc } from '../lib/ui.js';
import { session } from '../state.js';
import { getCurrentUser, logoutUser } from '../lib/firebase.js';

/** Inicio: elegir idioma, nivel y tema. */
export function renderHome(root) {
  const s = getSettings();
  const user = getCurrentUser();
  const studentDisplayName = user?.displayName || s.studentName || (user?.email ? user.email.split('@')[0] : '');
  let language = s.language;
  let level = s.level || 'auto';

  // Si el nivel guardado estuviera bloqueado, asegurar que inicie en el nivel más alto desbloqueado
  if (!isLevelUnlocked(level)) {
    level = getHighestUnlockedLevel();
  }

  let category = 'trabajo';
  let topicId = null;

  const history = getHistory();
  const totalMin = Math.round(history.reduce((a, h) => a + (h.durationSec || 0), 0) / 60);
  const lastExam = getLastExamResult();

  const view = el(`
    <main class="page home">
      <header class="topbar">
        <div class="brand"><img src="./icon.svg" alt="" /><span>Profesor Virtual</span></div>
        <div class="topbar-actions" style="display: flex; align-items: center; gap: 8px;">
          ${user ? `
            <div class="user-badge" title="${esc(user.email || '')}">
              <span class="user-avatar">${esc((studentDisplayName || 'A')[0].toUpperCase())}</span>
              <span>${esc(studentDisplayName)}</span>
            </div>
            <button type="button" class="btn ghost small" id="btnLogout" title="Cerrar sesión">🚪</button>
          ` : ''}
          <a href="#/settings" class="btn ghost small" aria-label="Ajustes">⚙️ Ajustes</a>
        </div>
      </header>

      <section class="greeting">
        <h1>${studentDisplayName ? `¡Hola, ${esc(studentDisplayName)}! 👋` : '¡Hola! 👋'}</h1>
        <p class="muted">¿Sobre qué quieres conversar hoy?</p>
        ${history.length ? `<p class="stats-mini">🗣️ ${history.length} conversaciones · ⏱️ ${totalMin} min practicados</p>` : ''}
      </section>

      <section class="block">
        <h2 class="block-title">1. Idioma</h2>
        <div class="lang-cards">
          ${Object.values(LANGUAGES).map((l) => `
            <button class="lang-card" data-lang="${l.id}">
              <span class="flag">${l.flag}</span>
              <span class="lang-name">${l.nameEs}</span>
              <span class="muted small">Profesora ${l.teacherName}</span>
            </button>`).join('')}
        </div>
      </section>

      <section class="block" id="secLevel">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <h2 class="block-title" style="margin: 0;">2. Tu nivel</h2>
          <button type="button" class="btn ghost small" id="btnOpenStudyPlan" style="font-size: 0.82rem; padding: 4px 10px;">📚 Plan de Estudio</button>
        </div>
        ${s.diagnosedLevel ? `
          <div class="diagnosed-badge-banner">
            <span class="badge-icon">🏅</span>
            <div style="flex: 1;">
              <b>Tu nivel actual: ${esc(s.diagnosedFeedback?.levelTitle || getLevelTitle(s.diagnosedLevel))}</b>
              <p class="muted small">Tus clases se adaptan automáticamente a este ritmo.</p>
            </div>
            <button type="button" class="btn ghost small" id="btnRetakePlacement">Reevaluar nivel ↺</button>
          </div>
        ` : `
          <p class="muted small" style="margin-bottom: 8px;">
            ¿No conoces tu nivel? Elige <b>🎯 Detectar mi nivel</b> y la profesora te hará un test oral amigable de diagnóstico para ubicarte exactamente.
          </p>
        `}
        <div class="chips levels" id="boxLevelChips"></div>

        <!-- Clases del Nivel según el Plan de Estudio -->
        <div class="level-lessons-container" id="boxLevelLessons"></div>

        <!-- Tarjeta de Examen de Ascenso -->
        <div id="boxLevelExamContainer"></div>
      </section>

      <section class="block" id="secTopics">
        <h2 class="block-title">3. Tema o situación</h2>
        <div class="chips cats">
          ${CATEGORIES.map((c) => `<button class="chip" data-cat="${c.id}">${c.emoji} ${c.label}</button>`).join('')}
        </div>
        <div class="topics"></div>
        <div class="custom-topic">
          <label for="custom">✍️ ¿Otro tema? Escríbelo libremente</label>
          <textarea id="custom" rows="2" maxlength="300" placeholder="Ej.: Soy arquitecto y quiero explicar un proyecto de vivienda a un cliente italiano"></textarea>
        </div>
      </section>

      <div class="start-bar">
        <div class="selection muted small"></div>
        <button class="btn primary big start" disabled>🎙️ Empezar conversación</button>
      </div>

      <!-- Modal: Nivel Bloqueado -->
      <dialog class="modal" id="modalLevelLocked">
        <div class="modal-card" style="text-align: center; max-width: 420px;">
          <span style="font-size: 2.8rem;">🔒</span>
          <h2 style="margin-top: 6px;" id="txtLockedLevelTitle">Nivel Bloqueado</h2>
          <p class="muted small" id="txtLockedLevelDesc" style="margin: 10px 0 16px; line-height: 1.5;"></p>
          <div class="modal-actions" style="display: flex; flex-direction: column; gap: 8px;">
            <button class="btn primary big w-full" id="btnLockedGoExam">🎓 Rendir Examen de Ascenso</button>
            <button class="btn ghost w-full" id="btnCloseLockedModal">Entendido</button>
          </div>
        </div>
      </dialog>

      <!-- Modal: Plan de Estudio Completo -->
      <dialog class="modal" id="modalStudyPlan">
        <div class="modal-card study-plan-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div>
              <h2 style="margin: 0; font-size: 1.25rem;">📚 Plan de Estudio Oficial (CEFR)</h2>
              <p class="muted small" style="margin: 2px 0 0;">Progresión académica desde cero hasta el nivel avanzado</p>
            </div>
            <button type="button" class="btn ghost small" id="btnCloseStudyPlan" style="font-size: 1.2rem; line-height: 1;">✕</button>
          </div>
          <div class="study-plan-list" id="studyPlanContainer"></div>
          <div class="modal-actions" style="margin-top: 14px;">
            <button class="btn primary w-full" id="btnOkStudyPlan">Entendido</button>
          </div>
        </div>
      </dialog>

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `);

  const topicsBox = view.querySelector('.topics');
  const custom = view.querySelector('#custom');
  const startBtn = view.querySelector('.start');
  const selection = view.querySelector('.selection');
  const secTopics = view.querySelector('#secTopics');
  const examContainer = view.querySelector('#boxLevelExamContainer');
  const boxLevelChips = view.querySelector('#boxLevelChips');

  const modalLevelLocked = view.querySelector('#modalLevelLocked');
  const txtLockedLevelTitle = view.querySelector('#txtLockedLevelTitle');
  const txtLockedLevelDesc = view.querySelector('#txtLockedLevelDesc');
  const btnLockedGoExam = view.querySelector('#btnLockedGoExam');
  const btnCloseLockedModal = view.querySelector('#btnCloseLockedModal');

  const modalStudyPlan = view.querySelector('#modalStudyPlan');
  const studyPlanContainer = view.querySelector('#studyPlanContainer');
  const btnOpenStudyPlan = view.querySelector('#btnOpenStudyPlan');
  const btnCloseStudyPlan = view.querySelector('#btnCloseStudyPlan');
  const btnOkStudyPlan = view.querySelector('#btnOkStudyPlan');

  function renderTopics() {
    topicsBox.innerHTML = TOPICS.filter((t) => t.cat === category).map((t) => `
      <button class="topic ${t.id === topicId ? 'active' : ''}" data-topic="${t.id}">
        <span class="topic-emoji">${t.emoji}</span>
        <span class="topic-text"><b>${esc(t.title)}</b><span class="muted small">${esc(t.desc)}</span></span>
      </button>`).join('');
  }

  function renderLevelChips() {
    boxLevelChips.innerHTML = LEVELS.map((lv) => {
      const unlocked = isLevelUnlocked(lv.id);
      const isCurrent = lv.id === level;
      if (unlocked) {
        return `<button class="chip ${isCurrent ? 'active' : ''}" data-level="${lv.id}">${esc(lv.label)}</button>`;
      } else {
        return `<button class="chip locked" data-level="${lv.id}" data-locked="true" title="Bloqueado: supera el examen de ascenso para desbloquearlo">🔒 ${esc(lv.label)}</button>`;
      }
    }).join('');
  }

  function renderLevelLessons() {
    const box = view.querySelector('#boxLevelLessons');
    if (!box) return;

    if (level === 'auto') {
      box.innerHTML = '';
      return;
    }

    const lessons = LEVEL_LESSONS[level] || [];
    if (!lessons.length) {
      box.innerHTML = '';
      return;
    }

    const currTitle = getLevelTitle(level);
    const lang = LANGUAGES[language];

    box.innerHTML = `
      <div class="level-lessons-header">
        <h3 style="margin: 0; font-size: 1.05rem;">📖 Clases de ${esc(currTitle)}</h3>
        <p class="muted small" style="margin: 2px 0 0;">Desarrolla tus clases guiadas con tu profesora ${esc(lang.teacherName)} según el plan de estudio.</p>
      </div>
      <div class="level-lessons-grid">
        ${lessons.map((ls) => `
          <div class="lesson-card">
            <div class="lesson-card-top">
              <span class="lesson-num-pill">Clase ${ls.num}</span>
              <h4 class="lesson-card-title">${esc(ls.title)}</h4>
            </div>
            <p class="muted small lesson-card-desc">${esc(ls.desc)}</p>
            <div class="lesson-phrases-box">
              <span class="small muted" style="font-weight: 600; font-size: 0.78rem;">Frases clave:</span>
              <div class="lesson-phrases-tags">
                ${ls.phrases.slice(0, 3).map(p => `<span class="phrase-tag">${esc(p)}</span>`).join('')}
              </div>
            </div>
            <button type="button" class="btn primary small w-full btn-take-lesson" data-lesson-id="${esc(ls.id)}" style="margin-top: 10px;">
              🎙️ Tomar Clase ${ls.num}
            </button>
          </div>
        `).join('')}
      </div>
    `;

    box.querySelectorAll('.btn-take-lesson').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lessonId = btn.dataset.lessonId;
        const lesson = lessons.find((l) => l.id === lessonId);
        if (!lesson) return;
        saveSettings({ language, level });
        session.pending = {
          language,
          level,
          mode: 'lesson',
          lesson,
        };
        location.hash = '#/talk';
      });
    });
  }

  function startExam(fromLevel, targetLevel) {
    saveSettings({ language, level: fromLevel });
    const scenario = getRandomExamScenario(fromLevel, targetLevel, lastExam?.scenario?.id);
    session.pending = {
      language,
      mode: 'exam',
      currentLevel: fromLevel,
      targetLevel: targetLevel,
      scenario,
    };
    location.hash = '#/talk';
  }

  function renderExamBox() {
    const highest = getHighestUnlockedLevel();
    const nextLevel = getNextLevel(highest);
    if (!nextLevel) {
      examContainer.innerHTML = '';
      return;
    }

    const nextTitle = getLevelTitle(nextLevel);
    const currTitle = getLevelTitle(highest);
    const hasFailedAttempt = lastExam && !lastExam.passed && lastExam.targetLevel === nextLevel;

    examContainer.innerHTML = `
      <div class="level-exam-box">
        <div>
          <h3>🎓 Examen de Ascenso a ${esc(nextTitle)}</h3>
          <p class="muted small">
            ${hasFailedAttempt ? `
              Último intento: <b style="color: #f59e0b;">${lastExam.score}/20</b>. Necesitas mínimo 15 para ascender. ¡Rinde un nuevo examen con una situación diferente!
            ` : `
              Cuando sientas que dominas las clases de este nivel, rinde tu examen para subir oficialmente a <b>${esc(nextTitle)}</b> (nota mínima: <b>15 sobre 20</b>).
            `}
          </p>
        </div>
        <button type="button" class="btn primary small" id="btnTakeExam">Rendir Examen 🎓</button>
      </div>
    `;

    examContainer.querySelector('#btnTakeExam')?.addEventListener('click', () => {
      startExam(highest, nextLevel);
    });
  }

  function openLockedModal(targetLevel) {
    const highest = getHighestUnlockedLevel();
    const nextLevel = getNextLevel(highest);
    txtLockedLevelTitle.textContent = `Nivel ${getLevelTitle(targetLevel)} Bloqueado`;
    txtLockedLevelDesc.innerHTML = `Para desbloquear este nivel debes superar el <b>Examen de Ascenso</b> desde tu nivel actual (<b>${esc(getLevelTitle(highest))}</b>) con una nota mínima de <b>15 sobre 20</b>.`;
    modalLevelLocked.showModal();

    btnLockedGoExam.onclick = () => {
      modalLevelLocked.close();
      if (nextLevel) {
        startExam(highest, nextLevel);
      }
    };
  }

  function renderStudyPlan() {
    const highest = getHighestUnlockedLevel();
    const highestIdx = LEVEL_ORDER.indexOf(highest);

    studyPlanContainer.innerHTML = STUDY_PLAN.map((item) => {
      const itemIdx = LEVEL_ORDER.indexOf(item.id);
      let statusBadge = '';
      let cardClass = '';

      if (itemIdx < highestIdx) {
        statusBadge = '<span class="status-pill passed">✅ Superado</span>';
        cardClass = 'passed';
      } else if (itemIdx === highestIdx) {
        statusBadge = '<span class="status-pill current">🎯 Nivel Actual</span>';
        cardClass = 'current';
      } else {
        statusBadge = '<span class="status-pill locked">🔒 Bloqueado</span>';
        cardClass = 'locked';
      }

      return `
        <div class="plan-level-item ${cardClass}">
          <div class="plan-level-header">
            <div>
              <span class="plan-code">${esc(item.code)}</span>
              <b>${esc(item.title)}</b>
            </div>
            ${statusBadge}
          </div>
          <p class="plan-sub muted small" style="margin: 4px 0 6px;"><b>${esc(item.subtitle)}:</b> ${esc(item.description)}</p>
          <div class="plan-objectives">
            <span class="plan-label small" style="font-weight: 600;">🎯 Objetivos de aprendizaje:</span>
            <ul>
              ${item.objectives.map(o => `<li>${esc(o)}</li>`).join('')}
            </ul>
          </div>
          <div class="plan-footer-info">
            <p class="small" style="margin: 2px 0;"><b>📖 Gramática clave:</b> ${esc(item.grammar)}</p>
            <p class="small muted" style="margin: 2px 0;"><b>🎓 Requisito de ascenso:</b> ${esc(item.examRequirement)}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  function refresh() {
    view.querySelectorAll('.lang-card').forEach((b) => b.classList.toggle('active', b.dataset.lang === language));
    view.querySelectorAll('[data-cat]').forEach((b) => b.classList.toggle('active', b.dataset.cat === category));
    renderLevelChips();
    renderLevelLessons();
    renderTopics();
    renderExamBox();

    const lang = LANGUAGES[language];
    const isPlacement = level === 'auto';

    if (isPlacement) {
      startBtn.disabled = false;
      startBtn.innerHTML = '🎯 Empezar Test de Diagnóstico';
      selection.innerHTML = `🎯 <b>Test de Diagnóstico Oral:</b> Conversación guiada con Profe ${lang.teacherName} para fijar tu nivel.`;
      secTopics.style.opacity = '0.5';
    } else {
      secTopics.style.opacity = '1';
      startBtn.innerHTML = '🎙️ Empezar conversación';
      const customText = custom.value.trim();
      const topic = TOPICS.find((t) => t.id === topicId);
      const ready = Boolean(customText || topic);
      startBtn.disabled = !ready;
      selection.textContent = ready
        ? `${lang.flag} ${lang.nameEs} · ${getLevelTitle(level)} · ${customText ? 'Tema libre' : topic.title}`
        : 'Elige un tema o escribe uno propio';
    }
  }

  view.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.lang) language = b.dataset.lang;
    else if (b.dataset.level) {
      const targetLevel = b.dataset.level;
      if (!isLevelUnlocked(targetLevel)) {
        openLockedModal(targetLevel);
        return;
      }
      level = targetLevel;
    }
    else if (b.dataset.cat) category = b.dataset.cat;
    else if (b.dataset.topic) {
      topicId = b.dataset.topic;
      custom.value = '';
    } else return;
    refresh();
  });

  // Modal de Nivel Bloqueado
  btnCloseLockedModal?.addEventListener('click', () => {
    modalLevelLocked.close();
  });

  // Modal de Plan de Estudio
  btnOpenStudyPlan?.addEventListener('click', () => {
    renderStudyPlan();
    modalStudyPlan.showModal();
  });
  btnCloseStudyPlan?.addEventListener('click', () => {
    modalStudyPlan.close();
  });
  btnOkStudyPlan?.addEventListener('click', () => {
    modalStudyPlan.close();
  });

  view.querySelector('#btnRetakePlacement')?.addEventListener('click', () => {
    level = 'auto';
    refresh();
    startBtn.click();
  });

  custom.addEventListener('input', () => {
    if (custom.value.trim()) topicId = null;
    refresh();
  });

  startBtn.addEventListener('click', () => {
    saveSettings({ language, level });
    session.pending = {
      language,
      level,
      mode: level === 'auto' ? 'placement' : 'conversation',
      topicId: level === 'auto' ? null : (custom.value.trim() ? null : topicId),
      customTopic: level === 'auto' ? null : custom.value.trim(),
    };
    location.hash = '#/talk';
  });

  view.querySelector('#btnLogout')?.addEventListener('click', async () => {
    await logoutUser();
    location.hash = '#/auth';
  });

  refresh();
  root.appendChild(view);
}

