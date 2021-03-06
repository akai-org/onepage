const $ = require("jquery");

const Contact = (() => {

  const api = {};

  const heading = (title) => {
    if (title) {
      return `
        <h2 class="contact-heading">${title}</h2>
        <div class="divider"></div>
      `;
    } else {
      return ''
    }
  };

  const copy = (text) => {
    if (text) {
      return `<p class="contact-info">${text}</p>`;
    } else {
      return '';
    }
  };

  const button = (text) => {
    if (text) {
      return `<button class="send-btn">${text}</button>`;
    } else {
      return '';
    }
  };

  api.compile = (data) => {
    var {title, text, buttonText} = data;

    return `
      <section id="contact" class="contact">
        <div class="container">
          ${ heading(title) }
          ${ copy(text) }
          <form class="contact-form">
            <input type="email" class="email" placeholder="Adres e-mail" required>
            <textarea class="message" placeholder="Twoja wiadomość..." rows="4"></textarea>
            ${ button(buttonText) }
          </form>
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    $(':required').on('blur keydown', function() {
      $(this).addClass('disable');
    });
  };

  return {
    name: "contact",
    api: api,
    selector: "#contact"
  };
})();

module.exports = Contact;
