import React from 'react'
import Link from 'gatsby-link'
import Header from '../Header'

const Home = ({image, subtitle, title, description}) => (
  <section className="home" id="home" style={{backgroundImage: `url('${image}')`}}>
    <div className="container">
      <Header />
      <div className="home-title">
        <h2 className="page-subtitle">{subtitle}</h2>
        <h1 className="page-title">{title}</h1>
        <div className="divider"></div>
        <p className="page-description">{description}</p>
        <a href="#" className="button">Zarezerwuj miejsce</a>
      </div>
      <a className="home-scroll" href="#">
        <div className="home-icon-container">
          <div className="home-scroll-description">Dowiedz się więcej</div>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </a>
    </div>
  </section>
)

export default Home
