const $ = require("jquery");

const Gallery = (() => {

  const heading = (title) => {
    if (title) {
      return `<h1 class="gallery-heading">${title}</h1>`;
    } else {
      return '';
    }
  };

  const insertPhotos = (photos) => {
    if (photos instanceof Array) {
      return photos.map(photo => {
        if (photo) {
          return `<a href="${photo}" data-lightbox="image"><img src="${photo}" /></a>`;
        } else {
          return '';
        }
      }).join('');
    } else {
      return '';
    }
  };


  const api = {};

  api.compile = (data) => {
    const {title, photos} = data;
    return `
      <section class="gallery" id="gallery">
        <div class="container">
          ${ heading(title) }
          <div class="gallery-slider image-set">
            ${ insertPhotos(photos) }
          </div>
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    const fadingSpeed = 1000;
    const pause = 4000;
    let interval;
    let $slider = $('#gallery .container .gallery-slider');

    const startSlider = () => {
        interval = setInterval( () => {
          //insert first image after last
          let $img = $('a', $slider);
          $img.fadeOut(fadingSpeed, () => {
            $img.first().insertAfter($img.last());
          });
          $img.fadeIn(fadingSpeed);
        }, pause);
    };

    const pauseSlider = () => {
        clearInterval(interval)
    };

    $slider
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
