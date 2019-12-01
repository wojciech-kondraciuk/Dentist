("use strict");
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "../scss/main.scss";
import "@babel/polyfill";

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true
  });
});
