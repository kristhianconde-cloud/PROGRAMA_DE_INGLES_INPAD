/** Utilidades de interfaz. */

export function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

export function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function toast(message, type = 'info') {
  let box = document.querySelector('.toasts');
  if (!box) {
    box = el('<div class="toasts"></div>');
    document.body.appendChild(box);
  }
  const t = el(`<div class="toast toast-${type}">${esc(message)}</div>`);
  box.appendChild(t);
  setTimeout(() => t.classList.add('out'), 4200);
  setTimeout(() => t.remove(), 4700);
}

/** Resalta (una vez) un fragmento dentro de un texto, sin distinguir mayúsculas. Devuelve HTML seguro. */
export function highlight(text, fragment, cls) {
  const safe = esc(text);
  if (!fragment) return safe;
  const f = esc(fragment.trim());
  if (!f) return safe;
  const idx = safe.toLowerCase().indexOf(f.toLowerCase());
  if (idx < 0) return safe;
  return `${safe.slice(0, idx)}<mark class="${cls}">${safe.slice(idx, idx + f.length)}</mark>${safe.slice(idx + f.length)}`;
}
