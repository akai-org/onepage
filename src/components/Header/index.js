import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className="home-topbar">
    <img src="https://github.com/akai-org/akai-assets/blob/master/public/png/logo.png?raw=true" alt="Logo" className="home-logo" />  
    <Link to="/About/" className="button button-alt">O nas</Link>
    <Link to="/contact" className="button button-alt">Kontakt</Link>
  </div>
)

export default Header
