export function initLogoSlider() {

    let logoSliders = document.querySelectorAll('.js-logo-slider');

    logoSliders.forEach(function (logoSlider) {
        let parent = logoSlider.parentElement;

        new Swiper(logoSlider, {
            loop: true,
            grabCursor: false,
            disableOnInteraction: false,
            allowTouchMove: false,
            spaceBetween: 75,
            slidesPerView: 2.5,
            speed: 3600,
            autoplay: {
                delay: 1,
                disableOnInteraction: false
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 85,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 100,
                },
                1300: {
                    slidesPerView: 5,
                    spaceBetween: 100,
                },
            }
            
        });

    });
}