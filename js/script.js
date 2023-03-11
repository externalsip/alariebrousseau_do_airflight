
  console.log("hi");
const swiper_screenshots = new Swiper('.swiper-screenshots', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView:3,
    spaceBetween: 50,
    loop: true,
    centeredSlides: true,  
  });