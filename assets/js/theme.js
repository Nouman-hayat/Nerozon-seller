// review slider controls
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
// review slider controls
// popup display

$(document).ready(function () {
  // jQuery methods go here...

  // popup display
  $("#nav-btn").click(function () {
    $("#overlay-form").css("display", "block");
    $("#overlay-form-inner").css("display", "block");
    $("#login-content").css("display", "block");
    $("#reset-password-content").css("display", "none");
     $("#change-password-content").css("display", "none");
  });

  // forget password popup
  $("#forget-password").click(function () {
    $("#login-content").css("display", "none");
    $("#overlay-form").css("display", "block");
    $("#overlay-form-inner").css("display", "block");
    $("#reset-password-content").css("display", "block");
     $("#change-password-content").css("display", "none");
    
  });
  // close popup
  $(
    "#overlay-form , #close-icon-wrapper , #pass-form ,#pass-form ,#btn-cancel "
  ).click(closebtn);
 
  function closebtn() {
    
    $("#overlay-form").css("display", "none");
    $("#overlay-form-inner").css("display", "none");
    $("#reset-password-content").css("display", "none");
    $("#pass-form").css("display", "none");
    $("#pass-form-inner").css("display", "none");
     $("#login-content").css("display", "none");
    $("#change-password-content").css("display", "none");
  }
});



















