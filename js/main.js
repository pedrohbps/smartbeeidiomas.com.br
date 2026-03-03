/**
 * main.js - Smart Bee Idiomas
 * Lógica de UI para a landing page (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. Header Scrolled Effect */
    const header = document.querySelector('.header');

    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Init

    /* 2. Mobile Menu Toggle */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animação de hambúrguer para X (simples)
        const spans = mobileToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                mobileToggle.click(); // Dispara o fechamento
            }
        });
    });

    /* 3. Scroll Reveal Animation (Intersection Observer) */
    const revealElements = document.querySelectorAll('.reveal, .reveal-image');

    const revealOptions = {
        threshold: 0.15, // 15% do elemento visível
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para de observar depois que ativa
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

});
