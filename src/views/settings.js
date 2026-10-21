import { getSettings, saveSettings, VOICES } from '../lib/storage.js';
import { CORRECTION_MODES } from '../prompts/teacher.js';
import { validateApiKey } from '../live/liveClient.js';
import { el, esc, toast } from '../lib/ui.js';

/**
 * Pantalla de Ajustes: clave de API, voz, modo de corrección e idioma de explicaciones.
 */
export function renderSettings(root) {
  const s = getSettings();

  const view = el(`
    <main class="page settings">
      <header class="topbar">
        <a href="#/home" class="btn ghost small">← Volver al inicio</a>
        <h1 class="page-title">Configuración</h1>
      </header>

      <form class="settings-form card">
        <section class="settings-group">
          <h2>🔑 Clave de Gemini API</h2>
          <p class="muted small">Tu clave gratuita de Google AI Studio. Se guarda solo en este navegador.</p>
          <div class="key-row">
            <input id="setKey" type="password" value="${esc(s.apiKey)}" required />
            <button type="button" class="btn ghost small" id="btnToggleKey">👁️</button>
          </div>
          <button type="button" class="btn secondary small" id="btnTestKey">Verificar clave</button>
          <span class="status-test muted small" id="txtTestStatus"></span>
        </section>

        <section class="settings-group">
          <h2>👤 Tu Nombre</h2>
          <input id="setName" type="text" maxlength="40" placeholder="Ej.: Carlos" value="${esc(s.studentName)}" />
        </section>

        <section class="settings-group">
          <h2>🎙️ Voz del Profesor</h2>
          <p class="muted small">Selecciona el tono de voz para Gemini Live.</p>
          <select id="setVoice">
            ${VOICES.map((v) => `<option value="${v.id}" ${v.id === s.voice ? 'selected' : ''}>${esc(v.label)}</option>`).join('')}
          </select>
        </section>

        <section class="settings-group">
          <h2>🎯 Modo de Corrección</h2>
          <p class="muted small">Determina la frecuencia con la que el profesor interviene para corregir.</p>
          <div class="radio-cards">
            ${Object.entries(CORRECTION_MODES).map(([k, v]) => `
              <label class="radio-card ${s.correctionMode === k ? 'selected' : ''}">
                <input type="radio" name="corrMode" value="${k}" ${s.correctionMode === k ? 'checked' : ''} />
                <div class="radio-content">
                  <b>${esc(v.label)}</b>
                  <span class="muted small">${esc(v.desc)}</span>
                </div>
              </label>
            `).join('')}
          </div>
        </section>

        <section class="settings-group">
          <h2>🇪🇸 Idioma de las Explicaciones</h2>
          <p class="muted small">Cuando el profesor deba explicar una regla o corregir una pronunciación:</p>
          <select id="setExplain">
            <option value="auto" ${s.explainIn === 'auto' ? 'selected' : ''}>Automático (Español en niveles A1-B1, idioma meta en B2-C1)</option>
            <option value="es" ${s.explainIn === 'es' ? 'selected' : ''}>Siempre en Español</option>
            <option value="target" ${s.explainIn === 'target' ? 'selected' : ''}>Siempre en el idioma que aprendo</option>
          </select>
        </section>

        <section class="settings-group danger-zone">
          <h2>🗑️ Borrar historial de práctica</h2>
          <p class="muted small">Elimina todas las sesiones y palabras guardadas en este dispositivo.</p>
          <button type="button" class="btn danger small" id="btnClearHistory">Borrar historial</button>
        </section>

        <div class="form-actions">
          <button type="submit" class="btn primary big">Guardar cambios</button>
        </div>
      </form>
    </main>
  `);

  const keyInput = view.querySelector('#setKey');
  const btnToggle = view.querySelector('#btnToggleKey');
  const btnTest = view.querySelector('#btnTestKey');
  const txtTest = view.querySelector('#txtTestStatus');
  const form = view.querySelector('.settings-form');
  const btnClear = view.querySelector('#btnClearHistory');

  btnToggle.addEventListener('click', () => {
    keyInput.type = keyInput.type === 'password' ? 'text' : 'password';
  });

  btnTest.addEventListener('click', async () => {
    const key = keyInput.value.trim();
    if (!key) {
      txtTest.textContent = 'Ingresa una clave primero.';
      return;
    }
    btnTest.disabled = true;
    txtTest.textContent = 'Comprobando...';
    const res = await validateApiKey(key);
    btnTest.disabled = false;
    if (res.ok) {
      txtTest.textContent = '✅ Clave válida';
      txtTest.style.color = '#10b981';
    } else {
      txtTest.textContent = `❌ ${res.message}`;
      txtTest.style.color = '#ef4444';
    }
  });

  // Estilo activo al seleccionar radio button
  view.querySelectorAll('input[name="corrMode"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      view.querySelectorAll('.radio-card').forEach((c) => c.classList.remove('selected'));
      radio.closest('.radio-card').classList.add('selected');
    });
  });

  btnClear.addEventListener('click', () => {
    if (confirm('¿Seguro que deseas borrar el historial de sesiones locales?')) {
      localStorage.removeItem('pvi.history');
      toast('Historial eliminado', 'info');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mode = view.querySelector('input[name="corrMode"]:checked')?.value || 'balanced';
    saveSettings({
      apiKey: keyInput.value.trim(),
      studentName: view.querySelector('#setName').value.trim(),
      voice: view.querySelector('#setVoice').value,
      correctionMode: mode,
      explainIn: view.querySelector('#setExplain').value
    });
    toast('Ajustes guardados correctamente', 'success');
    location.hash = '#/home';
  });

  root.appendChild(view);
}
