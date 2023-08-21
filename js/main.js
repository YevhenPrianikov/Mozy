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
if (document.querySelector('.body__main')) {
// Делаем выше для того, что бы небыло никаких проблем.
// Потому что у нас многостраничный сайт. Если мы будем переходить на другую страницу
// где нет свайпера а будем пытаться инициализировать свайпер то у нас будут ошибки

    const swiper = new Swiper('.swiper__innovation', {
        // Navigation arrows
        navigation: {
          nextEl: '.swiper__arrow-next',
          prevEl: '.swiper__arrow-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 1.8,
            spaceBetween: 20,
            },
            // when window width is >= 640px
            768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
            },
            992: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    });
}



// КНОПКА ВВЕРХ
// Выполняем функцию только если ширина экрана 768px или больше
let pageMediaQuery = window.matchMedia('(min-width: 768px)');
if (pageMediaQuery.matches) {

function fixedPageUp () {
    const pageup = document.querySelector('.pageup');

    // тут указываем в пикселях, сколько нужно проскроллить вниз
    // что бы кнопка стала фиксированной
    const breakpoint = 200
    if (window.scrollY >= breakpoint) {
        pageup.classList.add('pageup__fixed');
    } else {
        pageup.classList.remove('pageup__fixed');
    }
}
window.addEventListener('scroll', fixedPageUp);
}