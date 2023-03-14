console.log("hi");
const swiper_screenshots = new Swiper(".swiper-screenshots", {
  // Optional parameters
  direction: "horizontal",

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper_filters = new Swiper(".swiper-filters", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 10,
  centeredSlides: true,
  initialSlide: 2,
});

var swiper_filters = new Swiper(".swiper-featured-artworks", {
  direction: "horizontal",
  slidesPerView: 3,
  freeMode: true,
  spaceBetween: 180,
});