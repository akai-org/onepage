const About = (() => {

  const api = {};

  const header = (title, subtitle) => {
    let compiledTitle = '';
    let compiledSubtitle = '';

    if (title) {
      compiledTitle = `
        <h2>${title}</h2>
        <div class="divider"></div>
      `;
    }

    if (subtitle) {
      compiledSubtitle = `<h3>${subtitle}</h3>`;
    }

    return `
      <div class="about-header">
        ${compiledSubtitle}
        ${compiledTitle}
      </div>
    `;
  };

  const copy = (text) => {
    if (text instanceof Array) {
      return text.map(p => `<p>${p}</p>`).join('\n');
    } else if (typeof text === 'string') {
      return text;
    } else {
      return '';
    }
  };

  const photo = (image) => {
    if (image === undefined) return '';
    const {src, alt} = image;

    if (src) {
      return `<img src="${src}" alt="${alt}">`;
    }
  };

  api.compile = (data) => {
    const {title, subtitle, text, image} = data;

    return `
      <section class="about" id="about">
        <div class="container">
          ${ header(title, subtitle) }
          <div class="about-columns">
            <div class="about-left">
              ${ copy(text) }
            </div>
            <div class="about-right">
              ${ photo(image) }
            </div>
          </div>
        </div>
      </section>
    `;
  }

  api.componentReady = () => {
    // console.log("About ready");
  };

  return {
    name: "about",
    api: api,
    selector: "#about"
  };
})();

module.exports = About;
