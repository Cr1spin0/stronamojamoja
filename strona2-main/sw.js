self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("mObywatel-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/assets/id.css",
        "/assets/id.js",
        "/assets/bar.css",
        "https://i.imgur.com/gC8DDHD.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
