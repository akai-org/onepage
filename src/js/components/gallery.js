const $ = require("jquery");

const Gallery = (() => {

  const api = {};

  api.compile = (data) => {
    const {title, photos} = data;
    const compiledPhotos = photos.map(photo => `<a href="${photo}" data-lightbox="image"><img src="${photo}" /></a>`).join('');
    return `
      <section class="gallery" id="gallery">
        <div class="container">
          <h1 class="gallery-heading">${title}</h1>
          <div class="gallery-slider image-set">
            ${compiledPhotos}
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

    function startSlider() {
        interval = setInterval( () => {
          //insert first image after last
          let $img = $('a', $slider);
          $img.fadeOut(fadingSpeed, () => {
            $img.first().insertAfter($img.last());
          });
          $img.fadeIn(fadingSpeed);
        }, pause);
    };

    function pauseSlider() {
        clearInterval(interval);
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
