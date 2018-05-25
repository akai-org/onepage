import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

const Header = () => (
  <div className="home-topbar">
    <img
      src="https://github.com/akai-org/akai-assets/blob/master/public/png/logo.png?raw=true"
      alt="Logo"
      className="home-logo"
    />
    <div className="home-topbar-right">
      <Link to="/About/" className="button button-alt">
        O nas
      </Link>
      <Link to="/contact" className="button button-alt">
        Kontakt
      </Link>
    </div>
  </div>
)

export default Header
