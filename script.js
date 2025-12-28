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
        btn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navLinks.classList.add('active');
        btn.innerHTML = '<i class="fas fa-times"></i>';
    }
});

/* ===== Close menu when clicking a link (mobile) ===== */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        btn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

/* ===== Close menu when clicking outside ===== */
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-bars"></i>';
    }
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
        let autoplayInterval;

        function showSlide(index) {
            // Remover active de todos los slides e indicadores
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Agregar active al slide e indicador actual
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            showSlide(currentSlide);
        }

        function resetAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
            startAutoplay();
        }

        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        // Botón anterior
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
            resetAutoplay();
        });

        // Botón siguiente
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
            resetAutoplay();
        });

        // Click en indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.stopPropagation();
                currentSlide = index;
                showSlide(currentSlide);
                resetAutoplay();
            });
        });

        // Pausar autoplay cuando el mouse está sobre el carrusel
        carousel.addEventListener('mouseenter', () => {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        });

        // Reanudar autoplay cuando el mouse sale del carrusel
        carousel.addEventListener('mouseleave', () => {
            startAutoplay();
        });

        // Soporte para gestos táctiles (swipe) en móviles
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe izquierda - siguiente
                    nextSlide();
                } else {
                    // Swipe derecha - anterior
                    prevSlide();
                }
                resetAutoplay();
            }
        }

        // Iniciar autoplay
        startAutoplay();
    });
});

/* ===== FORM SUBMISSION ===== */
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

/* ===== ANIMACIONES AL HACER SCROLL ===== */
// Observador para animaciones cuando los elementos entran en viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas de proyectos y habilidades
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .cards--habilidades');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/* ===== PREVENIR ZOOM EN INPUTS EN iOS ===== */
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            );
        }
    });
    
    input.addEventListener('blur', () => {
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 
                'width=device-width, initial-scale=1.0'
            );
        }
    });
});