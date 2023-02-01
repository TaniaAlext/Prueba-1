const STATIC_CACHE="static";
//Se declara un vector con la ubicación y el nombre de los archivos que forman parte de tu pagina
const APP_SHELL=[
    "/",
    "index.html",
    "style.css",
    "js/carrusel_l.js",
    "js/main.js",
    "js/scroll.js",
    "media/akali.png",
    "media/camera_6.jpg",
    "media/carrusel_1.jpg",
    "media/carrusel_2.jpg",
    "media/carrusel_3.jpg",
    "media/carrusel_4.jpg",
    "media/carrusel_5.jpg",
    "media/carrusel_7.jpg",
    "media/carrusel_8.jpg",
    "media/carrusel_11.jpg",
    "media/carrusel_12.jpg",
    "media/carrusel_13.jpg",
    "media/carrusel_14.jpg",
    "media/LoLlogo.png",
    "media/videolol.mp4",
    "media/jinx1.png",
    "media/grieta_del_fornicador.jpg"
]
//En el evento install se agregan los archivos a la caché, se ejecuta cuando se abre la app automatica
self.addEventListener("install",(e)=>{
    const cacheStatic=caches
    .open(STATIC_CACHE)
    .then((cache)=>cache.addAll(APP_SHELL));

    e.wait.Until(cacheStatic);
});
//En el evento fetch se envian los archivos a la pagina web o paginas, se ejecutan cuando lo solicita la página
self.addEventListener("fetch", (e) =>{
    console.log("fetch1 ", e.request);
    e.respondWith(
        caches
        .match(e.request)
        .then(res=> res || fetch(e.request))
        .catch(console.log)

    );
});