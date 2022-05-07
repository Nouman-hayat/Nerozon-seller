$(".owl-carousel").owlCarousel({
  items: 2,
  loop: true,
  margin: 30,
  nav: false,
    dots: true,
  autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});








