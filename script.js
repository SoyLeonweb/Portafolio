window.addEventListener('DOMContentLoaded', () => {
  // Botón menú
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}


  // Botón "Volver arriba"
    const btnArriba = document.getElementById("btn-arriba");

    if (btnArriba) {
    window.onscroll = function () {
        btnArriba.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
    };

    btnArriba.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    btnArriba.style.display = "none";
}

  // ScrollReveal (solo si está cargado)
    if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal('.inicio-container', {
        delay: 260,
        duration: 940,
        reset: true
    });
    ScrollReveal().reveal('.servicios-section', {
        delay: 260,
        duration: 840,
        reset: true
    });
    ScrollReveal().reveal('.texto', {
        delay: 260,
        duration: 840,
        reset: true
    });
    ScrollReveal().reveal('.logotipo', {
        delay: 260,
        duration: 840,
        reset: true
    });
} else {
    console.warn("ScrollReveal no está definido. ¿Cargaste el script antes de script.js?");
}
});
