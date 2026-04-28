const CACHE_NAME = 'finance-app-v1';
const urlsToCache = [
  './',
  './Osama App.html',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png'
];

// تثبيت الـ Service Worker وحفظ الملفات في الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// جلب الملفات من الكاش عند انقطاع الإنترنت أو لتسريع التحميل
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

