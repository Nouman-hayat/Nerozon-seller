// review slider controls
$(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
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

$(document).ready(function() {
    // jQuery methods go here...

    // popup display
    $("#nav-btn").click(function() {
        $("#overlay-form").css("display", "block");
        $("#overlay-form-inner").css("display", "block");
        $("#login-content").css("display", "block");
        $("#reset-password-content").css("display", "none");
        $("#change-password-content").css("display", "none");
    });

    // forget password popup
    $("#forget-password").click(function() {
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
    // popup display
});

// multistep form

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
var signupguide = document.getElementById("signup-guide");
var locationguide = document.getElementById("location-guide");
var gstguide = document.getElementById("gst-guide");
var bankguide = document.getElementById("bank-guide");
// form field
var emailmultiform = document.getElementById("email-multiform");
var numbermultiform = document.getElementById("number-multiform");
var fullnamemultiform = document.getElementById("fullname-multiform");
var passwordmultiform = document.getElementById("password-multiform");
var termmultiform = document.getElementById("term-multiform");
var zipcodemultiform = document.getElementById("zipcode-multiform");
var addressmultiform = document.getElementById("address-multiform");
var citymultiform = document.getElementById("city-multiform");
var statemultiform = document.getElementById("state-multiform");
// form field
nextBtnFirst.addEventListener("click", function(event) {
    if (
        emailmultiform.value != "" &&
        numbermultiform.value != "" &&
        fullnamemultiform.value != "" &&
        passwordmultiform.value != ""
    )
    {
        event.preventDefault();
        slidePage.style.marginLeft = "-25%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        signupguide.style.display = "none";
        locationguide.style.display = "block";
    }
    else {
        alert("enter field data");

    }
});



nextBtnSec.addEventListener("click", function(event) {

    if (
        zipcodemultiform.value != "" &&
        addressmultiform.value != "" &&
        statemultiform.value != "" &&
        citymultiform.value != ""
    ) {
        event.preventDefault();
        slidePage.style.marginLeft = "-50%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        locationguide.style.display = "none";
        gstguide.style.display = "block";
    } else {
        alert("enter field data");

    }

});
nextBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    gstguide.style.display = "none";
    bankguide.style.display = "block";


});
submitBtn.addEventListener("click", function() {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function() {
        alert("Your Form Successfully Signed up");
        location.reload();
    }, 800);
});

// tab key handle
nextBtnFirst.addEventListener("keydown", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Tab") {
    slidePage.style.marginLeft = "-4%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    signupguide.style.display = "none";
    locationguide.style.display = "block";
  }
});

nextBtnSec.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
           slidePage.style.marginLeft = "-15%";
           bullet[current - 1].classList.add("active");
           progressCheck[current - 1].classList.add("active");
           progressText[current - 1].classList.add("active");
           current += 1;
           locationguide.style.display = "none";
           gstguide.style.display = "block";
    }
});
nextBtnThird.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      slidePage.style.marginLeft = "-26%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
      gstguide.style.display = "none";
      bankguide.style.display = "block";
  }
});


// multistep form

// file upload butoon
// var certifcatefile = document.getElementById("certifcate-file");
// var custombtncertifcate = document.getElementById("custom-btn-certifcate");
// custombtncertifcate.addEventListener("click", function () {
//   certifcatefile.click();
//  console.log(certifcatefile.getAttribute("value"));
// })
// file upload button

// form setting
var Radiosbtn1 = document.getElementById("Radiosbtn1");
var Radiosbtn2 = document.getElementById("Radiosbtn2");
var Radiosbtn3 = document.getElementById("Radiosbtn3");
var sellingst = document.getElementById("sell-in-gst");
var verifygst = document.getElementById("verify-gst");
var bankaccountexist = document.getElementById("bank-account-exist");
var registerwrapper = document.getElementsByClassName("register-wrapper")[0];
var bankradio1 = document.getElementById("bankradio1");
var bankradio2 = document.getElementById("bankradio2");

console.log(window.innerWidth)

Radiosbtn1.addEventListener("click", function() {

    verifygst.style.display = "block";
    sellingst.style.display = "none";
})
Radiosbtn2.addEventListener("click", function() {
    verifygst.style.display = "none";
    sellingst.style.display = "block";
    if (window.innerWidth > 992) {
        registerwrapper.style.marginBottom = "540px"
    }
});
Radiosbtn3.addEventListener("click", function() {
    verifygst.style.display = "none";
    sellingst.style.display = "none";
});

bankradio1.addEventListener("click", function() {
    bankaccountexist.style.display = "block";
    if (window.innerWidth > 992) {
        registerwrapper.style.marginBottom = "440px";
    }

});
bankradio2.addEventListener("click", function() {
    bankaccountexist.style.display = "none";

});
// form setting


