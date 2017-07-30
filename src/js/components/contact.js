const Contact = (() => {

  const api = {};

  api.compile = (data) => {
    var {title, text, buttonText} = data;
    return `
      <section id="contact" class="contact">
        <div class="container">
          <div class="contact-box">
            <h2 class="contact-heading">${title}</h2>
            <p class="contact-info">${text}</p>
            <form class="contact-form">
              <input type="email" class="email" placeholder="Adres e-mail" required>
              <textarea class="message" placeholder="Twoja wiadomość..." rows="4"></textarea>
              <button class="send-btn">${buttonText}</button>
            </form>
          </div>
        </div>
      </section>
    `;
  };

  api.componentReady = () => {
    // console.log("Contact ready");
  };

  return {
    name: "Contact",
    api: api,
    selector: "#contact"
  };
})();

module.exports = Contact;
