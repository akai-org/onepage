export default Contact = (data) => {
  data;
  return `
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-box">
          <h2 class="contact-heading">Zainteresowany współpracą?</h2>
          <p class="contact-info">Jeśli chcesz promować swoją firmę, przedstawić trudne lub ciekawe zagadnienie, zostaw swoją propozycję, na pewno odpiszemy!</p>
          <form class="contact-form">
            <input type="email" class="email" placeholder="Adres e-mail" required>
            <textarea class="message" placeholder="Twoja wiadomość..." rows="4"></textarea>
            <button class="send-btn">Zostaw wiadomość</button>
          </form>
        </div>
      </div>
    </section>
  `;
};
