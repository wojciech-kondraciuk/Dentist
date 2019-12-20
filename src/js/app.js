("use strict");
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "../scss/main.scss";
import "@babel/polyfill";
let _ = require("lodash");

$(document).ready(function() {
  //carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true
  });
});

//fixed menu
$(window).scroll(function() {
  $(window).scrollTop() >= 200
    ? $(".header").addClass("fixed-header")
    : $(".header").removeClass("fixed-header");
});

//lazy loading
let lazyImages = [...document.querySelectorAll("img")];
let inAdvance = 100;

const lazyLoad = () => {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src;
    }
  });
};

lazyLoad();

window.addEventListener("scroll", _.throttle(lazyLoad, 15));
window.addEventListener("resize", _.throttle(lazyLoad, 15));
