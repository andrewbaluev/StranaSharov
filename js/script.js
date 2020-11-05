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
});