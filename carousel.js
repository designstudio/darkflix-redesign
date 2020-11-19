$(document).ready(function() {
  $("#dailymotion .owl-carousel").owlCarousel({
    stagePadding: 64,
    loop: false,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],

    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      641: {
        items: 2,
        slideBy: 2
      },
      800: {
        items: 2,
        slideBy: 2
      },
      1000: {
        items: 3,
        slideBy: 3
      },
      1300: {
        items: 5,
        slideBy: 5
      }
    }
  });
});
