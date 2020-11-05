(function() {
    
    const slides = document.querySelectorAll('.intro__slider-item');
    const activeClass = 'intro__slider-item-visible';
    let index = 0;

    setInterval(function () {
        slides[index].classList.remove(activeClass);
        index++;

        if (index + 1 > slides.length) {
            index = 0;
        }

        slides[index].classList.add(activeClass);

    }, 10000);

}())