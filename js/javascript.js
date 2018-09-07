let flagLayoutWhite = false;
//loader
$(function(){
    $(document).ready(function() {
     loader();
      hover();
      slider();
    })
});
document.addEventListener('scroll', function (event) {
      floatMenu(flagLayoutWhite);
});
document.getElementById('hamburger').addEventListener('click', function(){
var flagMenu = document.getElementById('hamburger').className.includes('active');
if (flagMenu==false){
  $(this).addClass('active');
  $('.active-menu-no').addClass('active-menu').removeClass('active-menu-no');
  $('body').css('overflow','hidden');
} else {
  $(this).removeClass('active');
  $('.active-menu').addClass('active-menu-no').removeClass('active-menu');
  $('body').css('overflow','auto');
}

});
document.querySelector('.layout-white').addEventListener('click', function(){
      flagLayoutWhite = true ;
      $('body').slideUp();
      changeLayout();
      $('body').slideDown(600);

});
//loader
function loader(){
  setTimeout(function(){
    $('#loader').addClass('loaded');
  }, 2500);
  setTimeout(function(){
    $('#loader').css('display','none')
  }, 3000);
}
//hover menu
function hover(){
  $("nav ul li").hover(
    function() {
      $( this ).addClass("hover");
      $("nav ul").find(".active").addClass("unactive").removeClass("active");
    }, function() {
      $( this ).removeClass("hover");
      $("nav ul").find(".unactive").addClass("active").removeClass("unactive");
    }
  );
}

//floating menu
function floatMenu(){
  var navPosition = $("nav").position();
  var scrollPosition = $(window).scrollTop();
  if (scrollPosition>navPosition.top){
    $(".top-bar").addClass("float-menu");
    if (window.innerWidth>=992){
    $("#logo a img:nth-child(1)").css("display","none");
    $(".top-bar").css("background","white");
    $(".slider").addClass("sliderDown");
    if (flagLayoutWhite==true){
      $("#logo a img:nth-child(2)").attr("src","img/top/white-logo-2-small.png");
    }else {
    $("#logo a img:nth-child(2)").attr("src","img/top/logo-2-small.png");
    console.log(scrollPosition);
  }
  }
  } else {
    $(".top-bar").removeClass("float-menu");
    if (window.innerWidth>=992){
      $("#logo a img:nth-child(1)").css("display","inline");
        $(".top-bar").css("background","transparent");
        $(".slider").removeClass("sliderDown");
      if (flagLayoutWhite==true){//if layout white
        $("#logo a img:nth-child(2)").attr("src","img/top/white-logo-2.png");
      } else {
        $("#logo a img:nth-child(2)").attr("src","img/top/logo-2.png");
        console.log(scrollPosition);
      }
    }
  }
}
//function layout White
function changeLayout(){
  setTimeout(function(){
  $("#logo a img:nth-child(1)").attr("src","img/top/white-logo-1.png");
  $("#logo a img:nth-child(2)").attr("src","img/top/white-logo-2.png");
  $('.top-bar').css('background','white');
  $('nav ul').css('background','white');
  $('li a.active').css('border-bottom','3px solid white');
  $('li a.unactive').css('border-bottom','3px solid #dd7b89');
  $('li a.hover').css('border-bottom','3px solid white');
},499);
}

function slider(){
  $(".owl-carousel").owlCarousel({
		sliderSpeed:300,
		paginationSpeed:400,
		items: 1,
		autoplay: false,
		loop: true
	});
}
