let myImageSlider = new Swiper('.slider__slider', {

    navigation: {
        prevEl: '.slider__button-prev',
        nextEl: '.slider__button-next',
    },

    pagination: {
        el: '.slider__pagination',
        type: 'fraction',
    },

    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // autoplay: {
    //     delay: 2000,
    // },

    speed: 1000,
    autoHeight: false,

    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
    },

});

SmoothScroll({
    stepSize: 60,
    animationTime: 500,
});