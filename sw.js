/* Offline cache: works with no signal after the first visit. Bump V when you edit the site. */
var V="cess-v12";
var FILES=["./","index.html","img/logo.svg","img/hero.webp","img/cust1.webp","img/cust2.webp","img/cust3.webp","img/cess.webp","img/v1.webp","img/v2.webp","img/v3.webp","img/c/1b-t.webp","img/c/27-t.webp","img/c/33-t.webp","img/c/350-t.webp","img/c/4-t.webp","img/c/ot4-30-t.webp","img/c/p27-30-613-t.webp","img/c/p27-30-t.webp"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin||r.headers.has("range"))return;
  if(r.mode==="navigate"){e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open(V).then(function(x){x.put("index.html",c)});return res}).catch(function(){return caches.match("index.html")}))}
  else if(!/\.mp4$/.test(r.url)){e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){var c=res.clone();caches.open(V).then(function(x){x.put(r,c)});return res})}))}
});
