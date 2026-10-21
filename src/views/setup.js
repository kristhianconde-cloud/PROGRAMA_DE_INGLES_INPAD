import { saveSettings, getSettings } from '../lib/storage.js';
import { validateApiKey } from '../live/liveClient.js';
import { el, esc } from '../lib/ui.js';

/** Bienvenida: explica cómo obtener la clave gratuita de Gemini y la guarda en el dispositivo. */
export function renderSetup(root) {
  const s = getSettings();
  const view = el(`
    <main class="page setup">
      <section class="hero">
        <img src="/icon.svg" alt="" class="hero-logo" />
        <h1>Profesor Virtual de Idiomas</h1>
        <p class="lead">Conversa por voz en <b>inglés 🇬🇧</b> o <b>italiano 🇮🇹</b> sobre cualquier tema o profesión.
        Tu profesor te escucha, te responde y <b>corrige tu pronunciación al instante</b>.</p>
      </section>

      <section class="card">
        <h2>🔑 Paso único: tu clave gratuita</h2>
        <p class="muted">La app usa la inteligencia artificial de Google (Gemini). Cada alumno usa su propia clave
        <b>gratuita</b>: no necesitas tarjeta de crédito y practicas cuanto quieras dentro del límite gratuito de Google.</p>
        <ol class="steps">
          <li>Abre <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> e inicia sesión con tu cuenta de Google (Gmail).</li>
          <li>Acepta los términos si te los pide y pulsa <b>“Create API key”</b> (Crear clave de API).</li>
          <li>Copia la clave (empieza con <code>AIza…</code>) y pégala aquí abajo.</li>
        </ol>
        <form class="key-form">
          <label for="key">Tu clave de Gemini</label>
          <div class="key-row">
            <input id="key" type="password" autocomplete="off" spellcheck="false" placeholder="AIza..." value="${esc(s.apiKey)}" required />
            <button type="button" class="btn ghost small toggle" aria-label="Mostrar u ocultar">👁️</button>
          </div>
          <label for="name">¿Cómo te llamas? <span class="muted">(opcional, para que el profesor te llame por tu nombre)</span></label>
          <input id="name" type="text" maxlength="40" placeholder="Ej.: María" value="${esc(s.studentName)}" />
          <p class="error" hidden></p>
          <button class="btn primary big" type="submit">Guardar y empezar</button>
        </form>
        <p class="note">🔒 Tu clave se guarda <b>solo en este dispositivo</b>. Nadie más la ve.
        Aviso: en el plan gratuito, Google puede usar las conversaciones para mejorar sus modelos; evita compartir datos personales sensibles.</p>
      </section>
    </main>
  `);

  const form = view.querySelector('.key-form');
  const input = view.querySelector('#key');
  const err = view.querySelector('.error');
  view.querySelector('.toggle').addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = input.value.trim();
    const btn = form.querySelector('button[type=submit]');
    err.hidden = true;
    btn.disabled = true;
    btn.textContent = 'Verificando clave…';
    const res = await validateApiKey(key);
    btn.disabled = false;
    btn.textContent = 'Guardar y empezar';
    if (!res.ok) {
      err.textContent = `No pudimos verificar la clave: ${res.message}`;
      err.hidden = false;
      return;
    }
    saveSettings({ apiKey: key, studentName: view.querySelector('#name').value.trim() });
    location.hash = '#/home';
  });

  root.appendChild(view);
}
