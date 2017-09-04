const $ = require("jquery");

const Contact = (() => {

  const api = {};

  api.compile = (data) => {
    var {title, text, buttonText} = data;
    return `
      <section id="contact" class="contact">
        <div class="container">
          <h2 class="contact-heading">${title}</h2>
          <div class="divider"></div>
          <p class="contact-info">${text}</p>
          <form class="contact-form">
            <input type="email" class="email" placeholder="Adres e-mail" required>
            <textarea class="message" placeholder="Twoja wiadomość..." rows="4"></textarea>
            <button class="send-btn">${buttonText}</button>
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
