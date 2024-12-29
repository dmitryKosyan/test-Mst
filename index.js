function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.top__burger-menu');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.burger');

    navBtn.onclick = function () {

        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('burger--active');
        document.body.classList.toggle('no-scroll');
    };
}
mobileNav()
document.addEventListener('DOMContentLoaded', function () {

    // Получаем шапку сайта
    var header = document.querySelector('.header');

    // Функция для изменения цвета шапки при прокрутке к целевому блоку
    function changeHeaderColor() {
        const scrollTop = document.documentElement.scrollTop;
        const headerHeight = header.offsetHeight;

        if (scrollTop) {
            header.style.backgroundColor = '#222222'; // Изменяем цвет шапки при достижении целевого блока
        } else {
            header.style.backgroundColor = 'transparent'; // Возвращаем изначальный цвет шапки
        }
    }

    // Вызываем функцию при прокрутке страницы
    window.addEventListener('scroll', changeHeaderColor);
});