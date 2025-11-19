document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.offers-carousel'); // Находим карусель
    const prevBtn = document.querySelector('.nav-btn.prev'); // Находим кнопку "назад"
    const nextBtn = document.querySelector('.nav-btn.next'); // Находим кнопку "вперёд"

    // Шаг прокрутки (ширина одного слайда + отступ)
    const slideWidth = 210; // 200px ширина карточки + 10px gap

    // Обработчик для кнопки "вперёд"
    nextBtn.addEventListener('click', function() {
        carousel.scrollBy({
            left: slideWidth,
            behavior: 'smooth'
        });
    });

    // Обработчик для кнопки "назад"
    prevBtn.addEventListener('click', function() {
        carousel.scrollBy({
            left: -slideWidth,
            behavior: 'smooth'
        });
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