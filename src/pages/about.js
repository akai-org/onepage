import React from 'react'
import Link from 'gatsby-link'
import Home from '../components/Home'
import Header from '../components/Header'
import About from '../components/About'
import Details from '../components/Details'

const AboutPage = () => (
  <div>
    <Header />
    <About />
    <Details />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default AboutPage
