document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message !');
});

// Attendre que le document soit prêt
document.addEventListener('DOMContentLoaded', function () {
    // Animation du titre avec GSAP
    gsap.from("#header-title", {
        duration: 2,
        y: -100,
        opacity: 0,
        ease: "bounce"
    });

    // Animation des liens de navigation avec GSAP
    gsap.from(".nav-link", {
        duration: 1.5,
        x: -200,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out"
    });

    // Animation de la section principale avec GSAP
    gsap.from("#home", {
        duration: 2,
        scale: 0.8,
        opacity: 0,
        ease: "elastic"
    });
});
