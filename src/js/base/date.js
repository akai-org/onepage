import $ from 'jquery';

$(document).ready(function(){
  $('.date-calendar').parent().hide();
  $('.date-add').click(function(event) {
    event.preventDefault();
    $(this).parent().hide();
    $('.date-calendar').parent().show();
  });
});
