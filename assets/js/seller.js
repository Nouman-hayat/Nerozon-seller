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
});

// user dashboard
