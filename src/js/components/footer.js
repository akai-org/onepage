const Footer = (() => {

  const api = {};

  const socialLinks = (socials) => {
    if (socials instanceof Array) {
      return socials.map(social => {
        const {icon, link} = social;
        if (icon && link) {
          return `
            <a href="${link}" target="_blank" class="footer-socials--icon">
              <i class="fa ${icon} fa-lg" aria-hidden="true"></i>
            </a>
          `;
        } else {
          return '';
        }
      }).join("\n");
    } else {
      return '';
    }
  };

  const compileSocials = (socials) => {
    if (socials) {
      return `
        <div class="footer-socials">
          <h4 class="footer-socials--heading">Znajdź nas</h4>
          ${ socialLinks(socials) }
          <a href="https://akai.org.pl/" target="_blank" class="footer-socials--logo">
            <img src="img/logo-grey.svg" alt="akai logo">
          </a>
        </div>
      `
    } else {
      return '';
    }
  };

  const contact = (email) => {
    if (email) {
      return `
        <div class="footer-contact">
          <h4 class="footer-contact--heading">Kontakt</h4>
          <p><a class="footer-contact--mailto" href="mailto:${email}" target="_top">${email}</a></p>
        </div>
      `;
    } else {
      return '';
    }
  };

  const copyright = (title, copy) => {
    if (title && copy) {
      return `
        <div class="footer-copyright">
          <h4 class="footer-copyright--title">${title}</h4>
          <p class="footer-copyright--akai">${copy}</p>
        </div>
      `;
    } else {
      return '';
    }
  };

  api.compile = (data) => {
    var {title, copy, email, socials} = data;

    return `
      <section class="footer" id="footer">
        <div class="container">
          ${ copyright(title, copy) }
          ${ contact(email) }
          ${ compileSocials(socials) }
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    // console.log("Footer ready");
  };

  return {
    name: "footer",
    api: api,
    selector: "#footer"
  };
})();

module.exports = Footer;
