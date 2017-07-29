const Header = (data) => {
  data;
  return `
    <section class="home">
      <div class="container">
        <div class="home-topbar">
          <img src="img/logo.svg" alt="Logo" class="home-logo">
          <a href="#eventsDetails" class="button button-alt">Kontakt</a>
        </div>
        <div class="home-title">
          <h2 class="page-subtitle">AKAI</h2>
          <h1 class="page-title">Webstarter 2017</h1>
          <div class="divider"></div>
          <p class="page-description">Zbiór prelekcji wprowadzających w świat webdevelopmentu przygotowanych przez firmy IT we współpracy z Akademickim Kołem Aplikacji Internetowych.</p>
          <a href="#contact" class="button">Zarezerwuj miejsce</a>
        </div>
        <a class="home-scroll" href="#about">
          <div class="home-icon-container">
            <div class="home-scroll-description">Dowiedz się więcej</div>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </a>
      </div>
    </section>
  `;
};

module.exports = Header;
