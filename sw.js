const cacheName = 'blog-cache-v1';
const assetsToCache = [
    '/',
    '/https://alive2024.blogspot.com',
    '/https://ario93.github.io/Alive-Black (1).png',
    '/https://ario93.github.io/Alive-Black (2).png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
