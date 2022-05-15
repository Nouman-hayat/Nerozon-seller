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
  // select product page
  // $("#select-new-product-category-main-wrapper ul li").click(function () {
  //   $(this).addClass("active");
  //   $("#select-new-product-category-main-wrapper ul .active #select-new-product-category-sub-wrapper"
  //   ).css("display", "block");
  //      $("#select-new-product-category-main-wrapper ul .active  ul li").click(
  //        function () {
  //          $("#select-new-product-category-main-wrapper ul .active  ul li").removeClass("active");
  //          $(this).addClass("active");
           
  //          $("#select-new-product-category-main-wrapper ul  .active #select-new-product-category-sub-wrapper ul .active #category-sub-inner-wrapper"
  //          ).toggle();

          
            
           
  //        }

  //   );
      
   
  // });

  
 
  // select product page
});
// user sidebarscript
// user dashboard
