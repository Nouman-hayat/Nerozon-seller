// user dashboard
// user sidebarscript
$(document).ready(function () {
  $("#open-sidebar-menu").click(function () {
    console.log("heloo");
    $("#user-sidebar-menu-wrapper").toggle(4000);
  });
  $("#close-icon-sidebar").click(function () {
    $("#user-sidebar-menu-wrapper").toggle(4000);
  });

  // product description

  // add color
  $("#add-color-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#add-color").append(html);
  });

  // add color
  // fiber care
  $("#fabr-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#fabr").append(html);
    console.log("created");
  });
  // fiber-care
  //fit
  $("#fit-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#fit").append(html);
    console.log("created");
  });
  // fit
  // product description

  // product additional info page
  //ornamentation
  $("#ornamentation-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#ornamentation").append(html);
    console.log("created");
  });
  // ornamentation
  //ean-upc
  $("#ean-upc-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#ean-upc").append(html);
    console.log("created");
  });
  //ean-upc
  //season
  $("#season-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#season").append(html);
    console.log("created");
  });
  //season
  //search-keyword
  $("#search-keyword-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#search-keyword").append(html);
    console.log("created");
  });
  //search-keyword
  //trend
  $("#trend-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#trend").append(html);
    console.log("created");
  });
  //trend
  //pattern
  $("#pattern-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#pattern").append(html);
    console.log("created");
  });
  //pattern
  //secondary-color
  $("#secondary-color-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#secondary-color").append(html);
    console.log("created");
  });
  //secondary-color
  //aw16
  $("#aw16-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#aw16").append(html);
    console.log("created");
  });
  //aw16
  //closure
  $("#closure-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#closure").append(html);
    console.log("created");
  });
  //closure
  //other-dimension
  $("#other-dimension-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#other-dimension").append(html);
    console.log("created");
  });
  //other-dimension
  //other-detail
  $("#other-detail-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#other-detail").append(html);
    console.log("created");
  });
  //other-detail
  //sale-package
  $("#sale-package-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#sale-package").append(html);
    console.log("created");
  });
  //sale-package
  //domestic-warranty
  $("#domestic-warranty-btn").click(function () {
    var html =
      '<div class="col-9 mt-2"><select class="form-select"><option selected>Select one</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div>';
    $("#domestic-warranty").append(html);
    console.log("created");
  });
  //domestic-warranty
  // product additional info page
  // list-managment checbox
  selectprod();
  function selectprod() {
    $("#listing-select-all-product").click(selectallproduct);
  }
  function selectallproduct() {
    $(".listing-select-product").attr("checked", "checked");
    $("#listing-select-all-product").click(function () {
      $(".listing-select-product").removeAttr("checked");
      selectprod();
    });
  }
  // list-managment checbox
  // order-list-managment checbox
  orderselectprod();
  function orderselectprod() {
    $("#order-listing-select-all-product").click(orderselectallproduct);
  }
  function orderselectallproduct() {
    $(".order-listing-select-product").attr("checked", "checked");
    $("#order-listing-select-all-product").click(function () {
      $(".order-listing-select-product").removeAttr("checked");
      orderselectprod();
    });
  }
  //order- list-managment checbox

//block-list-managment checbox
  blocklistprod();
  function orderselectprod() {
    $("#blocklist-select-all-product").click(blocklistallproduct);
  }
  function blocklistallproduct() {
    $(".blocklist-select-product").attr("checked", "checked");
    $("#blocklist-select-all-product").click(function () {
      $(".blocklist-select-product").removeAttr("checked");
      blocklistprod();
    });
  }
  
  //block- list-managment checbox



  // order-rta-list-managment checbox
  rtaselectprod();
  function rtaselectprod() {
    $("#order-rta-listing-select-all-product").click(rtaselectallproduct);
  }
  function rtaselectallproduct() {
    $(".order-rta-listing-select-product").attr("checked", "checked");
    $("#order-rta-listing-select-all-product").click(function () {
      $(".order-rta-listing-select-product").removeAttr("checked");
      rtaselectprod();
    });
  }
  //order-rta- list-managment checbox
  //label update page
  labelupdateselectprod();
  function labelupdateselectprod() {
    $("#label-update-select-all-product").click(labelupdateselectallproduct);
  }
  function labelupdateselectallproduct() {
    $(".label-update-select-product").attr("checked", "checked");
    $("#label-update-select-all-product").click(function () {
      $(".label-update-select-product").removeAttr("checked");
      labelupdateselectprod();
    });
  }
  //label update page

  // return ticket page
  $(".claimed-btn").click(closereturnticketpopup);
  $(".return-close-btn").click(closereturnticketpopup);
  $(".return-ticket-overlay-inner").click(closereturnticketpopup);
  function closereturnticketpopup() {
    $(
      ".return-ticket-overlay-content-wrapper , .return-ticket-overlay-inner"
    ).toggle();
    $(window).scrollTop(0);
  }
  // return ticket page

  // selectproduct info popup
  $("#newlisting-selectproductinfo-image-wrapper").click(productimagepopup);
  $("#selectproductinfo-image-close-popup").click(productimagepopup);
  function productimagepopup() {
    $(
      ".newlisting-selectproductinfo-overlay-inner,#selectproductinfo-product-image-wrappper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#selling-info-popup").click(productsellingpopup);
  $("#product-selling-close-popup").click(productsellingpopup);
  function productsellingpopup() {
    $(
      ".newlisting-selectproductinfo-overlay-inner, #selectproductinfo-product-selling-info-wrappper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#product-description-popup").click(productdescriptionpopup);
  $("#product-description-close-popup").click(productdescriptionpopup);
  function productdescriptionpopup() {
    $(
      ".newlisting-selectproductinfo-overlay-inner, #selectproductinfo-product-description-wrappper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#additional-info-popup").click(productadditionalpopup);
  $("#product-additional-close-popup").click(productadditionalpopup);
  function productadditionalpopup() {
    $(
      ".newlisting-selectproductinfo-overlay-inner, #selectproductinfo-product-additional-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }
  $("#account-info-popup").click(accountsettinginfopopup);
  $("#account-info-close-popup , .account-x-btn").click(
    accountsettinginfopopup
  );
  function accountsettinginfopopup() {
    $(
      ".account-setting-menu-overlay-inner, #account-info-popup-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }
  $("#contact-info-popup").click(contactsettinginfopopup);
  $("#contact-info-close-popup ,  .contact-x-btn").click(
    contactsettinginfopopup
  );
  function contactsettinginfopopup() {
    $(
      ".account-setting-menu-overlay-inner, #contact-info-popup-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#password-info-popup").click(passwordsettinginfopopup);
  $("#password-info-close-popup , .pass-x-btn").click(passwordsettinginfopopup);
  function passwordsettinginfopopup() {
    $(
      ".account-setting-menu-overlay-inner, #password-info-popup-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#business-info-popup").click(businesssettinginfopopup);
  $("#business-info-close-popup , .business-x-btn").click(
    businesssettinginfopopup
  );
  function businesssettinginfopopup() {
    $(
      ".account-setting-menu-overlay-inner, #business-info-popup-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#bank-info-popup").click(businesssettinginfopopup);
  $("#bank-info-close-popup , .bank-x-btn").click(businesssettinginfopopup);
  function businesssettinginfopopup() {
    $(".account-setting-menu-overlay-inner, #bank-info-popup-wrapper").toggle();
    $(window).scrollTop(0);
  }

  $("#working-info-popup").click(workingsettinginfopopup);
  $("#working-info-close-popup , .working-x-btn").click(
    workingsettinginfopopup
  );
  function workingsettinginfopopup() {
    $(
      ".account-setting-menu-overlay-inner, #working-info-popup-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }

  $("#leave-info-popup").click(leavesettinginfopopup);
  $("#leave-info-close-popup , .leave-x-btn").click(leavesettinginfopopup);
  function leavesettinginfopopup() {
    $(
      ".account-setting-menu-overlay-inner, #leave-info-popup-wrapper"
    ).toggle();
    $(window).scrollTop(0);
  }
  // account setting popup

  // image upload
  $("nav .button").click(function () {
    $("nav .button span").toggleClass("rotate");
  });
  $("nav ul li .first").click(function () {
    $("nav ul li .first span").toggleClass("rotate");
  });
  $("nav ul li .second").click(function () {
    $("nav ul li .second span").toggleClass("rotate");
  });

  // image upload

  // upload images display
  $(".carousel-image-display").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // upload images display


  // delete upload image/
  $(".delete-upload-image").click(function () {
    $(this).parent().remove();
    console.log($(this).parent());
  });
  // delete -upload - image;
});





