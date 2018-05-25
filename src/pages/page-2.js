import React from 'react'
import Link from 'gatsby-link'
import Details from '../components/Details'

const SecondPage = () => (
  <div>
    <Details />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
