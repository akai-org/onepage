$( document ).ready(function() {

  @@include('./smooth-scroll.js')
  @@include('./date.js')
  @@include('./eventsDetails.js')
  @@include('./formValidation.js')

  $.getJSON( "json/webstarter-2017.json", function( data ) {
    var items = [];
    
    $('.page-title')[0].innerHTML = data.title
    $('.page-subtitle')[0].innerHTML = data.subtitle
  });

});
