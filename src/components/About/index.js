import React, { Children } from 'react'
import Link from 'gatsby-link'

const About = ({ image, children, title, subtitle }) => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-header">
        <h3>{subtitle}</h3>

        <h2>{title}</h2>
        <div className="divider" />
      </div>

      <div className="about-columns">
        <div className="about-left">{children}</div>
        <div className="about-right">
          <img src={image} alt="Photo" />
        </div>
      </div>
    </div>
  </section>
)

export default About
