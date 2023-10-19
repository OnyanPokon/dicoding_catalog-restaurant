// const { default: CacheHelper } = require('./utils/cache-helper');
import CacheHelper from './utils/cache-helper';
import 'regenerator-runtime';

const assetToCache = [
  './',
  './icons/72.png',
  './icons/96.png',
  './icons/128.png',
  './icons/144.png',
  './icons/152.png',
  './icons/192.png',
  './icons/384.png',
  './icons/512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deteleOldCahce());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
