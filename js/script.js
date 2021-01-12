$(document).ready(function(){
    $('.cards__item-slider').slick({
       waitForAnimate:true
    });

    $('[data-slider]').slick({
        waitForAnimate:true,
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
     });

    $('#nav-icon').click(function(event){
        event.preventDefault();
        $(this).toggleClass('open');
    });

    // Fixed Header

    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };

    // Slider

    const slides = document.querySelectorAll('.intro__slider-item');
    const activeClass = 'intro__slider-item-visible';
    let index = 0;

    setInterval(function() {
        slides[index].classList.remove(activeClass);
        index++;
        if (index + 1 > slides.length) {
            index = 0;
        }
        slides[index].classList.add(activeClass);
    }, 3000);

    // Sidebar 

    const menuOpen = document.querySelector('.header__nav-open');
    const menuClose = document.querySelector('.header__nav-close');
    const sidebar = document.querySelector('.header__nav');
    const menuLinks = document.querySelectorAll('.header__link');

    menuOpen.addEventListener('click', () => {
        sidebar.classList.add('header__nav-active');
    });

    menuClose.addEventListener('click', () => {
        sidebar.classList.remove('header__nav-active');
    });

    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                sidebar.classList.remove('header__nav-active');
            });
        }
    }

});