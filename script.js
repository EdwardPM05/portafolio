const btn = document.getElementById('menuToggle');
const sectionAll = document.querySelectorAll('section[id]');
const scrollTop = document.getElementById('scrollTop');
const header = document.getElementById('header');

/* ===== Header Scroll Effect ===== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('abajo');
    } else {
        header.classList.remove('abajo');
    }
});

/* ===== Mobile Menu Toggle ===== */
btn.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
});

/* ===== Close menu when clicking a link (mobile) ===== */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

/* ===== Active section in navigation ===== */
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

/* ===== Scroll to top button ===== */
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ===== Smooth scroll for all anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== CARRUSEL DE PROYECTOS ===== */
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.card-carousel');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentSlide = 0;

        function showSlide(index) {
            // Remover active de todos los slides e indicadores
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Agregar active al slide e indicador actual
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }

        // Botón anterior
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            showSlide(currentSlide);
        });

        // Botón siguiente
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            showSlide(currentSlide);
        });

        // Click en indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.stopPropagation();
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Auto-play opcional (descomenta si lo quieres)
        /*
        setInterval(() => {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            showSlide(currentSlide);
        }, 5000);
        */
    });
});

// ==================== FORM SUBMISSION ====================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    // Limpiar el formulario al cargar la página (después de una redirección)
    window.addEventListener('load', () => {
        contactForm.reset();
    });

    // Limpiar el formulario después de enviarlo
    contactForm.addEventListener('submit', (e) => {
        // Guardar que el formulario fue enviado
        localStorage.setItem('formSubmitted', 'true');
    });

    // Si detectamos que volvimos después de enviar, limpiar
    if (localStorage.getItem('formSubmitted') === 'true') {
        contactForm.reset();
        localStorage.removeItem('formSubmitted');
    }
}