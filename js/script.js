console.log("hi");
if(document.getElementById("artwork") != null){
  const like_button = document.getElementById("like_button");
like_button.addEventListener("click", function() {
  if(document.getElementById("heart").classList.contains("bi-heart")){
    document.getElementById("heart").classList.remove("bi-heart");
    document.getElementById("heart").classList.add("bi-heart-fill");
  }
  else{
    document.getElementById("heart").classList.remove("bi-heart-fill");
    document.getElementById("heart").classList.add("bi-heart");
  }

});
}


if(document.getElementById("landing") != null){
  var swiper_screenshots = new Swiper(".swiper-screenshots", {
  direction: "horizontal",
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
}

if(document.getElementById("app") != null){
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
}




