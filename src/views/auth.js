import {
  isFirebaseReady,
  getFirebaseConfig,
  saveFirebaseConfig,
  getInstitutionalGeminiKey,
  saveInstitutionalGeminiKey,
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  sendPasswordReset,
  getFriendlyAuthError,
} from '../lib/firebase.js';
import { saveSettings } from '../lib/storage.js';
import { el, esc, toast } from '../lib/ui.js';

export function renderAuth(root) {
  let activeTab = 'login'; // 'login' | 'register' | 'forgot'
  const firebaseReady = isFirebaseReady();

  const view = el(`
    <main class="page auth-page">
      <section class="hero">
        <img src="./icon.svg" alt="" class="hero-logo" />
        <h1>Profesor Virtual de Idiomas</h1>
        <p class="lead">Aprende y conversa por voz en tiempo real con corrección instantánea de pronunciación y gramática.</p>
      </section>

      <section class="card auth-card">
        ${!firebaseReady ? `
          <div class="firebase-unconfigured-alert">
            <div class="alert-icon">⚡</div>
            <div>
              <h3>Conecta tu proyecto de Firebase</h3>
              <p class="muted small">Para que tus alumnos puedan crear su cuenta y contraseña libremente, vincula tu proyecto gratuito de Firebase aquí.</p>
              <button type="button" class="btn primary small" id="btnOpenFirebaseConfig">⚙️ Configurar Firebase en 1 minuto</button>
            </div>
          </div>
        ` : ''}

        <div class="auth-tabs" ${!firebaseReady ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>
          <button type="button" class="auth-tab ${activeTab === 'login' ? 'active' : ''}" data-tab="login">Iniciar Sesión</button>
          <button type="button" class="auth-tab ${activeTab === 'register' ? 'active' : ''}" data-tab="register">Crear Cuenta</button>
        </div>

        <div class="auth-content" ${!firebaseReady ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>
          <!-- FORMULARIO DE INICIO DE SESIÓN -->
          <form class="auth-form" id="loginForm" ${activeTab !== 'login' ? 'hidden' : ''}>
            <div class="field">
              <label for="loginEmail">Correo electrónico del alumno</label>
              <input id="loginEmail" type="email" placeholder="ejemplo@gmail.com" required autocomplete="username" />
            </div>

            <div class="field">
              <div class="field-header">
                <label for="loginPass">Contraseña</label>
                <button type="button" class="link-btn small" id="btnGoForgot">¿Olvidaste tu contraseña?</button>
              </div>
              <div class="key-row">
                <input id="loginPass" type="password" placeholder="Tu contraseña" required autocomplete="current-password" />
                <button type="button" class="btn ghost small toggle-pass" aria-label="Mostrar">👁️</button>
              </div>
            </div>

            <p class="error auth-error" hidden></p>

            <button type="submit" class="btn primary big w-full">Ingresar a mi clase 🚀</button>

            <div class="auth-divider"><span>o también</span></div>

            <button type="button" class="btn secondary big w-full" id="btnGoogleLogin">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Continuar con Google
            </button>
          </form>

          <!-- FORMULARIO DE REGISTRO -->
          <form class="auth-form" id="registerForm" ${activeTab !== 'register' ? 'hidden' : ''}>
            <div class="field">
              <label for="regName">Tu nombre completo</label>
              <input id="regName" type="text" placeholder="Ej.: Juan Pérez" required autocomplete="name" />
            </div>

            <div class="field">
              <label for="regEmail">Tu correo electrónico</label>
              <input id="regEmail" type="email" placeholder="ejemplo@gmail.com" required autocomplete="email" />
            </div>

            <div class="field">
              <label for="regPass">Crea tu contraseña <span class="muted small">(mínimo 6 caracteres)</span></label>
              <div class="key-row">
                <input id="regPass" type="password" minlength="6" placeholder="Mínimo 6 letras o números" required autocomplete="new-password" />
                <button type="button" class="btn ghost small toggle-pass" aria-label="Mostrar">👁️</button>
              </div>
            </div>

            <div class="field">
              <label for="regPassConfirm">Confirma tu contraseña</label>
              <input id="regPassConfirm" type="password" minlength="6" placeholder="Repite tu contraseña" required autocomplete="new-password" />
            </div>

            <p class="error auth-error" hidden></p>

            <button type="submit" class="btn primary big w-full">Crear mi cuenta de alumno 🎓</button>
          </form>

          <!-- FORMULARIO DE RECUPERAR CONTRASEÑA -->
          <form class="auth-form" id="forgotForm" ${activeTab !== 'forgot' ? 'hidden' : ''}>
            <div class="forgot-header">
              <button type="button" class="link-btn" id="btnBackToLogin">← Volver al inicio de sesión</button>
              <h3>Restablecer contraseña</h3>
              <p class="muted small">Escribe el correo con el que te registraste y te enviaremos un enlace seguro para crear una nueva contraseña.</p>
            </div>

            <div class="field">
              <label for="forgotEmail">Tu correo electrónico</label>
              <input id="forgotEmail" type="email" placeholder="ejemplo@gmail.com" required />
            </div>

            <p class="error auth-error" hidden></p>

            <button type="submit" class="btn primary big w-full">Enviar enlace de recuperación 📩</button>
          </form>
        </div>

        <div class="card-footer-actions">
          <button type="button" class="btn ghost small muted" id="btnSetupModal">⚙️ Configuración del Profesor</button>
          <a href="#/setup" class="link-btn small muted">Ingreso con API Key de Gemini</a>
        </div>
      </section>

      <!-- MODAL DE CONFIGURACIÓN FIREBASE & CLAVE INSTITUCIONAL -->
      <div class="modal" id="firebaseModal" hidden>
        <div class="modal-card">
          <h2>⚙️ Configuración del Sistema</h2>
          <p class="muted small">Configura Firebase para habilitar el registro libre de tus alumnos y añade la clave de Gemini para que ellos no tengan que poner nada.</p>

          <form id="firebaseConfigForm">
            <div class="field">
              <label for="txtFirebaseJson"><b>1. Credenciales de Firebase (Config Web)</b></label>
              <p class="muted small" style="margin-bottom: 6px;">Pega el bloque <code>const firebaseConfig = { ... }</code> de la consola de Firebase:</p>
              <textarea id="txtFirebaseJson" rows="6" placeholder='{&#10;  "apiKey": "AIzaSy...",&#10;  "authDomain": "tu-proyecto.firebaseapp.com",&#10;  "projectId": "tu-proyecto",&#10;  "appId": "1:..."&#10;}'></textarea>
            </div>

            <div class="field">
              <label for="txtInstitutionalKey"><b>2. Clave Gemini del Profesor / Institucional (Opcional)</b></label>
              <p class="muted small" style="margin-bottom: 6px;">Si colocas tu clave aquí, <b>ningún alumno tendrá que poner clave de Gemini</b>. La aplicación usará tu autorización central.</p>
              <input id="txtInstitutionalKey" type="password" placeholder="AIzaSy..." value="${esc(getInstitutionalGeminiKey())}" />
            </div>

            <p class="error" id="modalConfigError" hidden></p>

            <div class="modal-actions">
              <button type="button" class="btn ghost" id="btnCloseFirebaseModal">Cancelar</button>
              <button type="submit" class="btn primary">Guardar Configuración</button>
            </div>
          </form>
        </div>
      </div>

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `);

  // Elementos de la vista
  const loginForm = view.querySelector('#loginForm');
  const registerForm = view.querySelector('#registerForm');
  const forgotForm = view.querySelector('#forgotForm');
  const tabs = view.querySelectorAll('.auth-tab');
  const modal = view.querySelector('#firebaseModal');
  const configForm = view.querySelector('#firebaseConfigForm');
  const txtFirebaseJson = view.querySelector('#txtFirebaseJson');
  const txtInstitutionalKey = view.querySelector('#txtInstitutionalKey');
  const modalError = view.querySelector('#modalConfigError');

  // Pre-cargar JSON de firebase si ya existe
  const currentConfig = getFirebaseConfig();
  if (currentConfig) {
    txtFirebaseJson.value = JSON.stringify(currentConfig, null, 2);
  }

  function setTab(tab) {
    activeTab = tab;
    tabs.forEach((t) => t.classList.toggle('active', t.dataset.tab === tab));
    loginForm.hidden = tab !== 'login';
    registerForm.hidden = tab !== 'register';
    forgotForm.hidden = tab !== 'forgot';
    view.querySelectorAll('.auth-error').forEach((e) => (e.hidden = true));
  }

  tabs.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => setTab(tabBtn.dataset.tab));
  });

  view.querySelector('#btnGoForgot')?.addEventListener('click', () => setTab('forgot'));
  view.querySelector('#btnBackToLogin')?.addEventListener('click', () => setTab('login'));

  // Alternar visualización de contraseñas
  view.querySelectorAll('.toggle-pass').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
      }
    });
  });

  // Envío Login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = view.querySelector('#loginEmail').value.trim();
    const pass = view.querySelector('#loginPass').value;
    const btn = loginForm.querySelector('button[type="submit"]');
    const err = loginForm.querySelector('.auth-error');

    err.hidden = true;
    btn.disabled = true;
    btn.textContent = 'Verificando ingreso…';

    try {
      const user = await loginWithEmail(email, pass);
      saveSettings({
        studentName: user.displayName || user.email.split('@')[0],
      });
      toast(`¡Bienvenido/a, ${user.displayName || 'alumno'}! 👋`);
      location.hash = '#/home';
    } catch (error) {
      err.textContent = getFriendlyAuthError(error);
      err.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Ingresar a mi clase 🚀';
    }
  });

  // Envío Registro
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = view.querySelector('#regName').value.trim();
    const email = view.querySelector('#regEmail').value.trim();
    const pass = view.querySelector('#regPass').value;
    const passConfirm = view.querySelector('#regPassConfirm').value;
    const btn = registerForm.querySelector('button[type="submit"]');
    const err = registerForm.querySelector('.auth-error');

    err.hidden = true;

    if (pass !== passConfirm) {
      err.textContent = 'Las contraseñas no coinciden. Por favor verifícalas.';
      err.hidden = false;
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Creando tu cuenta…';

    try {
      const user = await registerWithEmail(email, pass, name);
      saveSettings({
        studentName: name || user.displayName || email.split('@')[0],
      });
      toast(`¡Cuenta creada con éxito! Bienvenido/a, ${name || 'alumno'} 🎉`);
      location.hash = '#/home';
    } catch (error) {
      err.textContent = getFriendlyAuthError(error);
      err.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Crear mi cuenta de alumno 🎓';
    }
  });

  // Envío Google Login
  view.querySelector('#btnGoogleLogin')?.addEventListener('click', async () => {
    const btn = view.querySelector('#btnGoogleLogin');
    const err = loginForm.querySelector('.auth-error');
    err.hidden = true;
    btn.disabled = true;

    try {
      const user = await loginWithGoogle();
      saveSettings({
        studentName: user.displayName || user.email.split('@')[0],
      });
      toast(`¡Bienvenido/a, ${user.displayName || 'alumno'}! 👋`);
      location.hash = '#/home';
    } catch (error) {
      err.textContent = getFriendlyAuthError(error);
      err.hidden = false;
    } finally {
      btn.disabled = false;
    }
  });

  // Envío Recuperar Contraseña
  forgotForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = view.querySelector('#forgotEmail').value.trim();
    const btn = forgotForm.querySelector('button[type="submit"]');
    const err = forgotForm.querySelector('.auth-error');

    err.hidden = true;
    btn.disabled = true;
    btn.textContent = 'Enviando enlace…';

    try {
      await sendPasswordReset(email);
      toast('¡Listo! Revisa tu bandeja de correo (o spam) para restablecer tu contraseña 📩');
      setTab('login');
    } catch (error) {
      err.textContent = getFriendlyAuthError(error);
      err.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = 'Enviar enlace de recuperación 📩';
    }
  });

  // Modal de Configuración
  const openModal = () => (modal.hidden = false);
  const closeModal = () => (modal.hidden = true);

  view.querySelector('#btnOpenFirebaseConfig')?.addEventListener('click', openModal);
  view.querySelector('#btnSetupModal')?.addEventListener('click', openModal);
  view.querySelector('#btnCloseFirebaseModal')?.addEventListener('click', closeModal);

  configForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modalError.hidden = true;
    const rawText = txtFirebaseJson.value.trim();
    const instKey = txtInstitutionalKey.value.trim();

    if (!rawText) {
      saveFirebaseConfig(null);
      saveInstitutionalGeminiKey(instKey);
      toast('Configuración guardada.');
      closeModal();
      location.reload();
      return;
    }

    try {
      // Permitir copiar y pegar formato objeto JS o JSON
      let parsed = null;
      if (rawText.startsWith('{')) {
        // Puede tener comillas o claves directas
        try {
          parsed = JSON.parse(rawText);
        } catch {
          // Evaluar de forma segura
          const sanitized = rawText
            .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":')
            .replace(/'/g, '"');
          parsed = JSON.parse(sanitized);
        }
      } else if (rawText.includes('apiKey:')) {
        // Si pegaron `const firebaseConfig = { ... }`
        const match = rawText.match(/\{[\s\S]*\}/);
        if (match) {
          const sanitized = match[0]
            .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":')
            .replace(/'/g, '"');
          parsed = JSON.parse(sanitized);
        }
      }

      if (!parsed || !parsed.apiKey) {
        throw new Error('No se detectó un "apiKey" válido en la configuración de Firebase.');
      }

      saveFirebaseConfig(parsed);
      saveInstitutionalGeminiKey(instKey);
      toast('¡Firebase configurado exitosamente! 🎉');
      closeModal();
      location.reload();
    } catch (err) {
      modalError.textContent = `Error al procesar la configuración: ${err.message}`;
      modalError.hidden = false;
    }
  });

  root.appendChild(view);
}
