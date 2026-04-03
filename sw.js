self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('enigma-cache').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/icone.png'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});