import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <section id="contact" class="contact">
        <div class="container">
          
        <h2 class="contact-heading">Zainteresowany współpracą?</h2>
        <div class="divider"></div>
      
          <p class="contact-info">Jeśli chcesz promować swoją firmę, przedstawić trudne lub ciekawe zagadnienie, zostaw swoją propozycję, na pewno odpiszemy!</p>
          <form class="contact-form">
            <input type="email" class="email" placeholder="Adres e-mail" required="">
            <textarea class="message" placeholder="Twoja wiadomość..." rows="4"></textarea>
            <button class="send-btn">Zostaw wiadomość</button>
          </form>
        </div>
      </section>
);

export default Contact;