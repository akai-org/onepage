const Home = (() => {

  const api = {};

  const headingTitle = (title) => {
    if (title) {
      return `
        <h1 class="page-title">${title}</h1>
        <div class="divider"></div>
      `;
    } else {
      return '';
    }
  };

  const headingSubtitle = (subtitle) => {
    if (subtitle) {
      return `
        <h2 class="page-subtitle">${subtitle}</h2>
      `;
    } else {
      return '';
    }
  };

    const background = (backgroundUrl) => {
        if(typeof backgroundUrl === "string") {
            let ext = backgroundUrl.substring((backgroundUrl.length - 4), backgroundUrl.length);
            //^ This gets the last four characters of the string 'backgroundUrl'.
            switch (ext) {
                case ".jpg":
                case ".png":
                case ".gif":
                    return `style = "background-image: url('${backgroundUrl}');"`;
            }
        }
        return ``;
    };

  const headingDescription = (text) => {
    if (text) {
      return `
        <p class="page-description">${text}</p>
      `;
    } else {
      return '';
    }
  };

  const button = (btn, cssClass) => {
    if (btn === undefined) {
      return '';
    }

    const {link, text} = btn;
    if (link && text) {
      return `
        <a href="${link}" class="${cssClass}">${text}</a>
      `;
    } else {
      return '';
    }
  };

  const scroll = (btn) => {
    if (btn === undefined) {
      return '';
    }

    const {link, text} = btn;
    if (link && text) {
      return `
        <a class="home-scroll" href="${link}">
          <div class="home-icon-container">
            <div class="home-scroll-description">${text}</div>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </a>
      `;
    } else {
      return '';
    }
  };

  api.compile = (data) => {
    const {title, subtitle, description, backgroundImg, primaryButton, secondaryButton, scrollButton} = data;

    return `
      <section class="home" id="home" ${ background(backgroundImg) }>
        <div class="container">
          <div class="home-topbar">
            <img src="img/logo.svg" alt="Logo" class="home-logo">
            ${ button(secondaryButton, 'button button-alt') }
          </div>
          <div class="home-title">
            ${ headingSubtitle(subtitle) }
            ${ headingTitle(title) }
            ${ headingDescription(description) }
            ${ button(primaryButton, 'button') }
          </div>
          ${ scroll(scrollButton) }
        </div>
      </section>
    `;
  }

  api.componentReady = () => {
    // console.log("Header ready");
  };

  return {
    name: "home",
    api: api,
    selector: "#home"
  };
})();

module.exports = Home;
