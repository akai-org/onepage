const Footer = (data) => {
  data;
  return `
    <section class="footer">
      <div class="container">
        <div class="footer-left">
          <h4 class="footer-left--title">AKAI webstarter</h4>
          <p class="footer-left--akai">&copy; 2017 Akademickie Koło Aplikacji Internetowych</p>
        </div>
        <div class="footer-contact">
          <h4 class="footer-contact--heading">Kontakt</h4>
          <p><a class="footer-contact--mailto" href="mailto:webstarter@akai.org.pl" target="_top">webstarter@akai.org.pl</a></p>
        </div>
        <div class="footer-socials">
          <h4 class="footer-socials--heading">Znajdź nas</h4>
          <a href="https://www.facebook.com/akai.pp" target="_blank" class="footer-socials--icon">
            <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/akai_pp" target="_blank" class="footer-socials--icon">
            <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://akai.org.pl/" target="_blank" class="footer-socials--logo">
            <img src="img/logo-grey.svg" alt="akai logo">
          </a>
        </div>
      </div>
    </section>
  `;
};

module.exports = Footer;
