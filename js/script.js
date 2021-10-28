var i = 0;

$(".btn").click(function() {
  if (i==0) {
    $(".tracking-dropdown").css("opacity", "1");
    $(".tracking-dropdown").css("visibility", "visible");
    $(".tracking-dropdown").css("display", "block");
    i++;
  }
  else {
    $(".tracking-dropdown").css("opacity", "0");
    $(".tracking-dropdown").css("visibility", "hidden");
    $(".tracking-dropdown").css("display", "none");
    i--;
  }
});

$(".nav-list-dropdown-services").click(function() {
  if (i==0) {
    $(".services-dropdown-box").css("opacity", "1");
    $(".services-dropdown-box").css("visibility", "visible");
    $(".services-dropdown-box").css("display", "block");
    i++;
  }
  else {
    $(".services-dropdown-box").css("opacity", "0");
    $(".services-dropdown-box").css("visibility", "hidden");
    $(".services-dropdown-box").css("display", "none");
    i--;
  }
});

$(".btn").click(function() {
   $("body").toggleClass("track-hover");
});

// =======================================================

var vh = $(window).height();

$(window).scroll(function() {
  var y_scroll_pos = window.pageYOffset;

  var vh2 = vh/1.2;

  if(y_scroll_pos > vh2) {
    $("nav").addClass("nav-unfixed", 250);
  }
  else if (y_scroll_pos == 0){
    $("nav").removeClass("nav-unfixed", 250);
  }
});

$(".tracking-dropdown-submit").click(function() {
  $(".tracking-dropdown-stats").css("display", "block");
  $(".tracking-dropdown-stats").css("visibility", "visible");
  $(".tracking-dropdown-stats").css("right", "3%");
});

// ========MENU============

var i = 0;
$(".menu-button").click(function() {
  if (i == 0) {
   $(".menu-button-span-1").addClass("menu-button-span-1-open");
    $(".menu-button-span-2").addClass("menu-button-span-2-open");
    $(".menu-button-span-3").addClass("menu-button-span-3-open");
    $(".nav-mobile").css("opacity", "1");
    $(".nav-mobile").css("display", "block");
    $(".menu-button").css("z-index", "9999999")
    i++;
    $('body').addClass('stop-scrolling');
  }
  else {
   $(".menu-button-span-1").removeClass("menu-button-span-1-open");
    $(".menu-button-span-2").removeClass("menu-button-span-2-open");
    $(".menu-button-span-3").removeClass("menu-button-span-3-open");
    $(".nav-mobile").css("opacity", "0");
    $(".nav-mobile").css("display", "none");
    $(".menu-button").css("z-index", "100")
    i--;
    $('body').removeClass('stop-scrolling');
  }
});

$(".category1").click(function() {
  $(".section-work-images-preview1").css("opacity", "1");
  $(".section-work-images-preview1").css("display", "block");

  $(".section-work-images-preview2").css("opacity", "0");
  $(".section-work-images-preview2").css("display", "none");
});

$(".category2").click(function() {
  $(".section-work-images-preview2").css("opacity", "1");
  $(".section-work-images-preview2").css("display", "block");

  $(".section-work-images-preview1").css("opacity", "0");
  $(".section-work-images-preview1").css("display", "none");
});
