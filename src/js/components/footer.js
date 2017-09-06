const Footer = (() => {

  const api = {};

  api.compile = (data) => {
    var {title, copy, email, socials} = data;
    var compiledSocials = socials.map(social => {
      var {icon, link} = social;
      return `
        <a href="${link}" target="_blank" class="footer-socials--icon">
          <i class="fa ${icon} fa-lg" aria-hidden="true"></i>
        </a>
      `;
    }).join("\n");

    return `
      <section class="footer" id="footer">
        <div class="container">
          <div class="footer-copyright">
            <h4 class="footer-copyright--title">${title}</h4>
            <p class="footer-copyright--akai">${copy}</p>
          </div>
          <div class="footer-contact">
            <h4 class="footer-contact--heading">Kontakt</h4>
            <p><a class="footer-contact--mailto" href="mailto:${email}" target="_top">${email}</a></p>
          </div>
          <div class="footer-socials">
            <h4 class="footer-socials--heading">Znajdź nas</h4>
            ${compiledSocials}
            <a href="https://akai.org.pl/" target="_blank" class="footer-socials--logo">
              <img src="img/logo-grey.svg" alt="akai logo">
            </a>
          </div>
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
