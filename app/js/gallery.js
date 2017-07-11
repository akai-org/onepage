//settings for slider
var fadingSpeed = 1000;
var pause = 4000;

var interval;
var $slider = $('.gallery .container #gallery-slider');

$.get("photos.json", function(data){
    var imgArray = data.photos;
    var len = imgArray.length;
    createSlides();

    function createSlides(){
      for (index = 0; index < imgArray.length; ++index){
        $slider.append(`<a href="img/photos/${imgArray[index]}"
         data-lightbox="image"><img src="img/photos/${imgArray[index]}" /></a>`)
      }
    };
});

function startSlider() {
    interval = setInterval(function() {
      //insert first image after last
      var $img = $('a', $slider);
      $img.fadeOut(fadingSpeed, function(){
      $img.first().insertAfter($img.last());
      });

      $('a', $slider).fadeIn(fadingSpeed);
    }, pause);
};

function pauseSlider() {
    clearInterval(interval);
};

$('#gallery-slider')
    .mouseenter(pauseSlider)
    .mouseleave(startSlider);


startSlider();
