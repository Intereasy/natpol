
window.onload=function(){
  

//loader
$(function () {
  $(document).ready(function () {
    slider();
  })
});
/*
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




*/
function slider() {
  $(".owl-carousel").owlCarousel({
    sliderSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    autoplay: true,
    loop: true
  });
}

AOS.init();
initMap();
}

function initMap() {
  let position ={lat:50.3231869,lng:18.79367179999997};
  
  let options = {
    zoom: 13,
    center: position,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#da2128'}]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#3d597f'}]
      }]
  }
  let pinColor = "da2128";
  let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
  new google.maps.Size(40, 50),
  new google.maps.Point(0,0),
  new google.maps.Point(10, 34));
  let map = new google.maps.Map(document.getElementById('map'),options);
  var marker = new google.maps.Marker({
    position: position, 
    map: map,
    icon: pinImage
  });
}

