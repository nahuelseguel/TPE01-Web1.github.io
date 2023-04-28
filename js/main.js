const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', function () {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});

