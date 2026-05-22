const CACHE_NAME = 'cbmmt-estudos-v1';
const urlsToCache = [
  '/APP-estudo/',
  '/APP-estudo/index.html'
  // Se você tiver arquivos de CSS (como o Tailwind) ou JS separados, adicione o caminho deles aqui embaixo também. Ex: '/APP-estudo/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
