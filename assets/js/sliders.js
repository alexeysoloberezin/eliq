export const initSliders = () => {
  if ($(".advantages__slider ").length > 0) {
    new Swiper(".advantages__slider", {
      slidesPerView: 1.3,
      centeredSlides: true,
      roundLengths: true,
      speed: 600,
      slideToClickedSlide: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        840: {
          slidesPerView: 1.3,
        },
        1300: {
          slidesPerView: 'auto',
        },
      },
    });
  }
}
