const $ = require("jquery");

const Gallery = (() => {

  const api = {};
  let photosArray

  api.compile = (data) => {
    const {title, photos} = data;
    photosArray = photos
    return `
      <section class="gallery" id="gallery">
        <div class="container">
          <h1 class="gallery-heading">${title}</h1>

          </div>
        </div>
      </section>

    `;
  };

  api.componentReady = () => {
    const fadingSpeed = 1000;
    const pause = 4000;
    let interval;
    let $container = $('#gallery .container');
    let $slider = $('<div class="gallery-slider image-set">');

    photosArray.forEach(photo => {
      $slider.append(`<a href="${photo}" data-lightbox="image"><img src="${photo}" /></a>`)
    });
    $container.append($slider);

    function startSlider() {
        interval = setInterval( () => {
          //insert first image after last
          let $img = $('.gallery-slider a', $container);
          $img.fadeOut(fadingSpeed, () => {
            $img.first().insertAfter($img.last());
          });

          $img.fadeIn(fadingSpeed);
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
