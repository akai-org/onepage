//settings for slider
var fadingSpeed = 1000;
var pause = 4000;

var interval;

// to do: get filenames from directory
var imgArray = ['backend1.jpg', 'backend2.jpg', 'backend3.jpg'];
var len = imgArray.length;

function createSlides(){
  var $slider = $('.gallery #gallery-slider');
  for (index = 0; index < imgArray.length; ++index){
    $slider.append(`<a href="img/photos/${imgArray[index]}" data-lightbox="image"><img src="img/photos/${imgArray[index]}" /></a>`)
  }
}

function startSlider() {
    interval = setInterval(function() {
      //insert first image after last
      var $img = $('.gallery #gallery-slider a');
      $img.fadeOut(fadingSpeed, function(){
      $img.first().insertAfter($img.last());
      });

      $('.gallery #gallery-slider a').fadeIn(fadingSpeed);
    }, pause);
};

function pauseSlider() {
    clearInterval(interval);
};

$('#gallery-slider')
    .mouseenter(pauseSlider)
    .mouseleave(startSlider);

createSlides();
startSlider();
