$(document).ready(function(){

    // SlickSlider

    $('.intro__slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        speed: 400,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
    });

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

    // Fixed Header

    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };

    // Sidebar

    $('.header__nav-open').on('click', () => {
        $('.header__nav').addClass('header__nav-active');
        $('body').css('overflow', 'hidden');
    });

    $('.header__nav-close').on('click', () => {
        $('.header__nav').removeClass('header__nav-active');
        $('body').css('overflow', 'visible');
    });
    
    $('.header__link').on('click', function(){
        $('.header__nav').removeClass('header__nav-active');
        $('body').css('overflow', 'visible');
    });

});