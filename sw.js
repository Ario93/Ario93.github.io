self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        'https://ario93.github.io/manifest.json',
        'https://ario93.github.io/Alive-Black (1).png',
        'https://ario93.github.io/Alive-Black (1).png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('https://alive2024.blogspot.com')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
