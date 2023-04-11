let myRoomSlider = new Swiper('.room__slider', {

    navigation: {
        prevEl: '.room__button-prev',
        nextEl: '.room__button-next',
    },

    pagination: {
        el: '.room__pagination',
        type: 'fraction',
    },
    spaceBetween: 32,
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

let myTrendsSlider = new Swiper('.trends__slider', {

    navigation: {
        prevEl: '.trends__button-prev',
        nextEl: '.trends__button-next',
    },

    pagination: {
        el: '.trends__pagination',
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

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1.7,
        },
        992: {
            slidesPerView: 2.7,
        },
    },

});