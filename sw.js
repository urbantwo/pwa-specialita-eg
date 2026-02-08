const CACHE_VERSION = 'v2.2'; // Incrementa questo ad ogni deploy
const CACHE_NAME = `specialita-eg-${CACHE_VERSION}`;
const BASE_PATH = '/pwa-specialita-eg';

const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/styles.css`,
  `${BASE_PATH}/database.js`,
  `${BASE_PATH}/ui.js`,
  `${BASE_PATH}/app.js`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/icon-256x256.png`,
  `${BASE_PATH}/icon-512x512.png`
];

// Install event
self.addEventListener('install', (event) => {
  console.log('[SW] Installing version:', CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache opened');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => console.error('[SW] Cache installation failed:', err))
  );
  self.skipWaiting(); // Forza l'attivazione immediata
});

// Fetch event - Strategia Network First per HTML, Cache First per il resto
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Solo per richieste dello stesso origin
  if (url.origin !== location.origin) {
    return;
  }

  // Network First per pagine HTML (per avere sempre l'ultima versione)
  if (event.request.mode === 'navigate' || 
      event.request.destination === 'document' ||
      url.pathname.endsWith('.html') || 
      url.pathname.endsWith('/')) {
    
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Salva in cache la nuova versione
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // Fallback alla cache se offline
          return caches.match(event.request);
        })
    );
    return;
  }

  // Cache First per CSS, JS, immagini (più veloce)
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          // Aggiorna in background
          fetch(event.request).then((fetchResponse) => {
            if (fetchResponse && fetchResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, fetchResponse);
              });
            }
          }).catch(() => {});
          
          return response;
        }

        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
  );
});

// Activate event - Elimina le vecchie cache
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating version:', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Prendi controllo immediato di tutte le pagine
});

// Ascolta messaggi dall'app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING ricevuto');
    self.skipWaiting();
  }
});