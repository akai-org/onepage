const $ = require("jquery");

const Gallery = (() => {

  const api = {};
  var photosArray

  api.compile = (data) => {
    const {title, photos} = data;
    photosArray = photos
    return `
      <section class="gallery" id="gallery">
        <div class="container">
          <h1 class="gallery-heading">${title}</h1>
          <div id="gallery-slider" class="image-set">

          </div>
        </div>
      </section>

    `;
  };

  api.componentReady = () => {
    //settings for slider
    var fadingSpeed = 1000;
    var pause = 4000;
    var interval;
    var $slider = $('.gallery .container .gallery-slider');

    function createSlides(){
      for (var index = 0; index < photosArray.length; ++index){
        $slider.append(`<a href="${photosArray[index]}"
          data-lightbox="image"><img src="${photosArray[index]}" /></a>`)
      }
    }
    createSlides();

    function startSlider() {
        interval = setInterval(function() {
          //insert first image after last
          var $img = $('a', $slider);
          $img.fadeOut(fadingSpeed, function(){
          $img.first().insertAfter($img.last());
          });

          $('a', $slider).fadeIn(fadingSpeed);
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $('.gallery-slider')
        .mouseenter(pauseSlider)
        .mouseleave(startSlider);


    startSlider();
  };

  return {
    name: "gallery",
    api: api,
    selector: ".gallery"
  };
})();

module.exports = Gallery;
