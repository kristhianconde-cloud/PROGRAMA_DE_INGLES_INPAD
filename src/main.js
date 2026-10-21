import './styles.css';
import { getSettings } from './lib/storage.js';
import { renderSetup } from './views/setup.js';
import { renderHome } from './views/home.js';
import { renderTalk } from './views/talk.js';
import { renderSettings } from './views/settings.js';

const app = document.getElementById('app');
let current = null; // vista activa (puede tener destroy())

const routes = {
  '#/setup': renderSetup,
  '#/home': renderHome,
  '#/talk': renderTalk,
  '#/settings': renderSettings,
};

async function router() {
  const settings = getSettings();
  let hash = location.hash || '#/home';
  if (!settings.apiKey && hash !== '#/setup') hash = '#/setup';
  if (hash !== location.hash) {
    history.replaceState(null, '', hash);
  }
  if (current?.destroy) await current.destroy();
  app.innerHTML = '';
  const render = routes[hash] || renderHome;
  current = render(app) || null;
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
router();

// Service worker solo en producción (en desarrollo interfiere con la recarga en caliente).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
