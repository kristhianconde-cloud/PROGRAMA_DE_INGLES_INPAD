import './styles.css';
import { getSettings } from './lib/storage.js';
import { renderSetup } from './views/setup.js';
import { renderHome } from './views/home.js';
import { renderTalk } from './views/talk.js';
import { renderSettings } from './views/settings.js';
import { renderAuth } from './views/auth.js';
import {
  isFirebaseReady,
  getCurrentUser,
  onAuthChange,
  getInstitutionalGeminiKey,
  initFirebase,
} from './lib/firebase.js';

const app = document.getElementById('app');
let current = null; // vista activa (puede tener destroy())
let initialAuthChecked = false;

const routes = {
  '#/auth': renderAuth,
  '#/setup': renderSetup,
  '#/home': renderHome,
  '#/talk': renderTalk,
  '#/settings': renderSettings,
};

async function router() {
  const settings = getSettings();
  const fbReady = isFirebaseReady();
  const user = getCurrentUser();
  const instKey = getInstitutionalGeminiKey();
  const hasGeminiKey = Boolean(settings.apiKey || instKey);

  let hash = location.hash || '#/home';

  // Si Firebase está activo y no hay sesión iniciada
  if (fbReady && !user && hash !== '#/auth' && hash !== '#/setup') {
    hash = '#/auth';
  } else if (fbReady && user && hash === '#/auth') {
    hash = '#/home';
  } else if (!fbReady && !hasGeminiKey && hash !== '#/setup' && hash !== '#/auth') {
    // Si no hay clave ni Firebase, enviar a auth/setup
    hash = '#/auth';
  }

  if (hash !== location.hash) {
    history.replaceState(null, '', hash);
  }

  if (current?.destroy) await current.destroy();
  app.innerHTML = '';
  const render = routes[hash] || renderHome;
  current = render(app) || null;
  window.scrollTo(0, 0);
}

// Inicializar listener de Firebase
initFirebase();
onAuthChange(() => {
  if (initialAuthChecked) {
    router();
  }
  initialAuthChecked = true;
});

window.addEventListener('hashchange', router);
router();

// Service worker solo en producción (en desarrollo interfiere con la recarga en caliente).
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
