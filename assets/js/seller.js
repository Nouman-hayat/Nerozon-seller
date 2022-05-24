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
});

// user dashboard
