document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.gallery-carousel');
    const slides = Array.from(document.querySelectorAll('.gallery-slide'));
    const nextBtn = document.querySelector('.nav-btn.next');
    const prevBtn = document.querySelector('.nav-btn.prev');

    const gap = 20;
    const slideWidth = slides[0].offsetWidth + gap;

    // Клонируем слайды для бесконечной прокрутки
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        carousel.appendChild(clone);
    });

    let index = 0;
    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s';
        carousel.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        index++;
        updateCarousel();

        // Если дошли до клонированных слайдов
        if (index >= slides.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                index = 0;
                carousel.style.transform = `translateX(${-index * slideWidth}px)`;
            }, 500);
        }
    });

    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) {
            carousel.style.transition = 'none';
            index = slides.length - 1;
            carousel.style.transform = `translateX(${-index * slideWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s';
            }, 20);
        } else {
            updateCarousel();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});