import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <section className="footer" id="footer">
    <div className="container">
      <div className="footer-copyright">
        <h4 className="footer-copyright--title">AKAI webstarter</h4>
        <p className="footer-copyright--akai">
          © 2017 Akademickie Koło Aplikacji Internetowych
        </p>
      </div>

      <div className="footer-contact">
        <h4 className="footer-contact--heading">Kontakt</h4>
        <p>
          <a
            className="footer-contact--mailto"
            href="mailto:webstarter@akai.org.pl"
            target="_top"
          >
            webstarter@akai.org.pl
          </a>
        </p>
      </div>

      <div className="footer-socials">
        <h4 className="footer-socials--heading">Znajdź nas</h4>

        <a
          href="https://www.facebook.com/akai.pp"
          target="_blank"
          className="footer-socials--icon"
        >
          <i className="fa fa-facebook fa-lg" aria-hidden="true" />
        </a>

        <a
          href="https://twitter.com/akai.pp"
          target="_blank"
          className="footer-socials--icon"
        >
          <i className="fa fa-twitter fa-lg" aria-hidden="true" />
        </a>

        <a
          href="https://akai.org.pl/"
          target="_blank"
          className="footer-socials--logo"
        >
          <img src="img/logo-grey.svg" alt="akai logo" />
        </a>
      </div>
    </div>
  </section>
)

export default Footer
