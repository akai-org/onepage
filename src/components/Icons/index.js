import React from 'react'
import Link from 'gatsby-link'

const Icons = ({icons}) => (
  <section className="date" id="date">
    <div className="container">
      <div className="row">
        { icons.map( ({icon, big, title, caption}) => (
          <div className="column">
            <img src={icon} alt="" />
            <span className="date-value">{big}</span>
            <span className="time-value">{caption}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Icons