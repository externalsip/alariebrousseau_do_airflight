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

var swiper_filters = new Swiper(".swiper-filter", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});