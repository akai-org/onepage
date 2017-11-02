const Roles = (() => {

  const api = {};

  const heading = (title) => {
    if (title) {
      return `
      <h1 class="roles-heading">${title}</h1>
      <div class="divider"></div>
      `;
    } else {
      return '';
    }
  };

  const copy = (text) => {
    if (text) {
      return `<p class="roles-info">${text}</p>`;
    } else {
      return '';
    }
  };

  const side = (number) => {
    if (number%2 == 0) {
      return `right-side`;
    } else {
      return ``;
    }
  }

  const compileSections = (sections) => {
    if (sections instanceof Array) {
      let sideIterator = 0;
      return sections.map((section) => {
        const {image, name, description} = section;
        sideIterator++;
        if (image || name || description) {
          return `
          <div class="section-detail">
            <div class="section-photo ${ side( sideIterator ) }">
              <img src="${image.src}" alt="${image.alt}">
            </div>
            <div class="section-text">
              <div class="section-text--name">
                ${name}
              </div>
              <div class="divider"></div>
              <div class="section-text--description">
                ${description}
              </div>
            </div>
          </div>
          `;
        } else {
          return '';
        }
      }).join("\n");
    } else {
      return '';
    }
  }

  api.compile = (data) => {
    const {title, text, sections, cta, contactButton} = data;
    return `
      <section class="roles" id="roles">
        <div class="container">
          ${ heading(title) }
          ${ copy(text) }
          ${ compileSections(sections) }

          <p class="cta">${cta}</p>
          <a href="${contactButton.link}" class="contact-btn">${contactButton.text}</a>
          </div>
      </section>
    `;
  }

  api.componentReady = () => {
  };

  return {
    name: "roles",
    api: api,
    selector: "#roles"
  };
})();

module.exports = Roles;
