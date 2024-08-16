document.addEventListener('DOMContentLoaded', function() {
    const scrollableContent = document.querySelector('.scrollable-content');
    if (scrollableContent) {
        scrollableContent.style.opacity = '1'; // Asegura que la animación comience cuando la página esté cargada
    }
});

AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    easing: 'ease-out', // Curva de aceleración
    once: true, // Si quieres que la animación se ejecute solo una vez
  });
