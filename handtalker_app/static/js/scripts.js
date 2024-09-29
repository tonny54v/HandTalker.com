document.addEventListener('DOMContentLoaded', function() {
    const scrollableContent = document.querySelector('.scrollable-content');
    if (scrollableContent) {
        scrollableContent.style.opacity = '1'; // Asegura que la animación comience cuando la página esté cargada
    }
});

AOS.init({
    duration: 1000, 
    easing: 'ease-out', 
    once: true, 
  });
