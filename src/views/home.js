import { getSettings, saveSettings, getHistory } from '../lib/storage.js';
import { LANGUAGES, LEVELS } from '../prompts/teacher.js';
import { CATEGORIES, TOPICS } from '../data/topics.js';
import { el, esc } from '../lib/ui.js';
import { session } from '../state.js';

/** Inicio: elegir idioma, nivel y tema. */
export function renderHome(root) {
  const s = getSettings();
  let language = s.language;
  let level = s.level;
  let category = 'trabajo';
  let topicId = null;

  const history = getHistory();
  const totalMin = Math.round(history.reduce((a, h) => a + (h.durationSec || 0), 0) / 60);

  const view = el(`
    <main class="page home">
      <header class="topbar">
        <div class="brand"><img src="./icon.svg" alt="" /><span>Profesor Virtual</span></div>
        <a href="#/settings" class="btn ghost small" aria-label="Ajustes">⚙️ Ajustes</a>
      </header>

      <section class="greeting">
        <h1>${s.studentName ? `¡Hola, ${esc(s.studentName)}! 👋` : '¡Hola! 👋'}</h1>
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

      <section class="block">
        <h2 class="block-title">2. Tu nivel</h2>
        <p class="muted small" style="margin-bottom: 8px;">¿No tienes base o no sabes nada? Elige <b>🌱 Desde cero (A0)</b> o déjalo en <b>Detectar mi nivel</b> y la profesora te enseñará paso a paso en español.</p>
        <div class="chips levels">
          ${LEVELS.map((lv) => `<button class="chip" data-level="${lv.id}">${lv.label}</button>`).join('')}
        </div>
      </section>

      <section class="block">
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

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `);

  const topicsBox = view.querySelector('.topics');
  const custom = view.querySelector('#custom');
  const startBtn = view.querySelector('.start');
  const selection = view.querySelector('.selection');

  function renderTopics() {
    topicsBox.innerHTML = TOPICS.filter((t) => t.cat === category).map((t) => `
      <button class="topic ${t.id === topicId ? 'active' : ''}" data-topic="${t.id}">
        <span class="topic-emoji">${t.emoji}</span>
        <span class="topic-text"><b>${esc(t.title)}</b><span class="muted small">${esc(t.desc)}</span></span>
      </button>`).join('');
  }

  function refresh() {
    view.querySelectorAll('.lang-card').forEach((b) => b.classList.toggle('active', b.dataset.lang === language));
    view.querySelectorAll('[data-level]').forEach((b) => b.classList.toggle('active', b.dataset.level === level));
    view.querySelectorAll('[data-cat]').forEach((b) => b.classList.toggle('active', b.dataset.cat === category));
    renderTopics();
    const customText = custom.value.trim();
    const topic = TOPICS.find((t) => t.id === topicId);
    const lang = LANGUAGES[language];
    const ready = Boolean(customText || topic);
    startBtn.disabled = !ready;
    selection.textContent = ready
      ? `${lang.flag} ${lang.nameEs} · ${level === 'auto' ? 'nivel automático' : level} · ${customText ? 'Tema libre' : topic.title}`
      : 'Elige un tema o escribe uno propio';
  }

  view.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.lang) language = b.dataset.lang;
    else if (b.dataset.level) level = b.dataset.level;
    else if (b.dataset.cat) category = b.dataset.cat;
    else if (b.dataset.topic) {
      topicId = b.dataset.topic;
      custom.value = '';
    } else return;
    refresh();
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
      topicId: custom.value.trim() ? null : topicId,
      customTopic: custom.value.trim(),
    };
    location.hash = '#/talk';
  });

  refresh();
  root.appendChild(view);
}
