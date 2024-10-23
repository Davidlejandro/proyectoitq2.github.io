//Hacemos una bienvenida con la alerta
//cuando la ventana del navegador (la página web) haya terminado de cargar completamente 
//todos sus elementos (HTML, CSS, imágenes, etc.),  se ejecutará la función que se encuentra dentro de las llaves {}.
window.onload = function() {
    //mensaje
    alert("¡Bienvenido a La Casita Salinera! Esperamos que disfrutes de nuestros productos.");
};

// sirve para buscar lo que esté dentro de "a" en este y generar un evento cuando se haga click
document.querySelector('.Ubication a').addEventListener('click', (event) => {

    // Muestra un cuadro de confirmación al usuario.
    //confirm sale para poder hacer un "permitir" o "Cancelar" mediante boolean de true o false
    if (!confirm('¿Quieres abrir Google Maps en una nueva pestaña?')) {

        // Si el usuario elige 'Cancelar', se evita el comportamiento predeterminado del enlace.
        //evita que se abra Google Maps en una nueva pestaña.
        event.preventDefault();
    }
});