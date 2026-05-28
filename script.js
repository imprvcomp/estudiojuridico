/* =========================================================
   Estudio Jurídico Galeazzo — interacciones de la web
   ========================================================= */

(() => {
    'use strict';

    /* ---------- Header sticky con sombra al hacer scroll ---------- */
    const header = document.getElementById('header');
    const onScroll = () => {
        if (window.scrollY > 24) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Menú hamburguesa (mobile) ---------- */
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const closeMenu = () => {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };
    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    document.querySelectorAll('.nav__link').forEach(link =>
        link.addEventListener('click', closeMenu)
    );
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('open') &&
            !nav.contains(e.target) &&
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    /* ---------- Resaltar link activo según scroll ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const setActiveLink = () => {
        const scrollPos = window.scrollY + 120;
        let current = '';
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };
    window.addEventListener('scroll', setActiveLink, { passive: true });

    /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 40);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    /* ---------- Formulario de contacto ---------- */
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            setTimeout(() => {
                success.hidden = false;
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                setTimeout(() => { success.hidden = true; }, 6000);
            }, 700);
        });
    }

    /* ---------- Año del footer ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Cerrar menú con ESC ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
    });
})();
