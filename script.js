// ==========================================
// BOTÓN "DESCUBRIR"
// ==========================================

const botonAbrir = document.getElementById("abrir-regalo");
const portada = document.getElementById("portada");
const contenido = document.getElementById("contenido");
const video = document.getElementById("video-regalo");

botonAbrir.addEventListener("click", () => {

    // Ocultar la portada
    portada.style.display = "none";

    // Mostrar el contenido
    contenido.classList.remove("oculto");

    // Llevar al inicio del contenido
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Intentar reproducir el video
    video.play().catch(() => {
        console.log("El navegador requiere interacción para reproducir el video.");
    });

});


// ==========================================
// ACTIVAR SONIDO DEL VIDEO
// ==========================================

const botonSonido = document.getElementById("activar-sonido");

botonSonido.addEventListener("click", () => {

    video.muted = false;

    video.volume = 1;

    video.play();

    botonSonido.textContent = "🔊 Sonido activado";

});


// ==========================================
// MENSAJE ESPECIAL DE H
// ==========================================

const botonMensaje = document.getElementById("abrir-mensaje");
const mensajeEspecial = document.getElementById("mensaje-especial");

botonMensaje.addEventListener("click", () => {

    mensajeEspecial.style.display = "block";

    botonMensaje.textContent = "🕊️ Mensaje descubierto";

});


// ==========================================
// SORPRESA FINAL
// ==========================================

const botonSorpresa = document.getElementById("sorpresa");
const sorpresaContenido = document.getElementById("sorpresa-contenido");

botonSorpresa.addEventListener("click", () => {

    sorpresaContenido.style.display = "block";

    botonSorpresa.textContent = "❤️";

});