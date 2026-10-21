// Service Worker mínimo: red primero, caché como respaldo (las pantallas abren sin conexión).
const CACHE = 'pvi-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  // Nunca cachear llamadas a la API de Gemini ni peticiones que no sean GET.
  if (req.method !== 'GET' || url.hostname.includes('googleapis.com') && !url.hostname.startsWith('fonts')) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match('/')))
  );
});
