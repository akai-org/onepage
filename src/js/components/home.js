const Home = (() => {

  const api = {};

  api.compile = (data) => {
    var {title, subtitle, description, primaryButton, seconadryButton, scrollButton} = data;

    return `
      <section class="home" id="home">
        <div class="container">
          <div class="home-topbar">
            <img src="img/logo.svg" alt="Logo" class="home-logo">
            <a href="${seconadryButton.link}" class="button button-alt">${seconadryButton.text}</a>
          </div>
          <div class="home-title">
            <h2 class="page-subtitle">${subtitle}</h2>
            <h1 class="page-title">${title}</h1>
            <div class="divider"></div>
            <p class="page-description">${description}</p>
            <a href="${primaryButton.link}" class="button">${primaryButton.text}</a>
          </div>
          <a class="home-scroll" href="${scrollButton.link}">
            <div class="home-icon-container">
              <div class="home-scroll-description">${scrollButton.text}</div>
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </a>
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
