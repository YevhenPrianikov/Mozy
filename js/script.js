// Hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


// Запускаем функцию которая добавляет fnavbar__fixed класс
// для фиксации НавБара при определённом разрешении экрана

let mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
    // я выполняюсь только если ширина экрана 768 или меньше

    // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav () {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 150
    if (window.scrollY >= breakpoint) {
        nav.classList.add('navbar__fixed')
    } else {
        nav.classList.remove('navbar__fixed')
    }
}
window.addEventListener('scroll', fixedNav)
}


// main page scripts
if (document.querySelector('.body__main'))
// Делаем выше для того, что бы небыло никаких проблем.
// Потому что у нас многостраничный сайт. Если мы будем переходить на другую страницу
// где нет свайпера а будем пытаться инициализировать свайпер то у нас будут ошибки
{
    const swiper = new Swiper('.swiper__innovation', {
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
}