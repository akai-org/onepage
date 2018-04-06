import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './scripts'

import Footer from '../components/Footer'
import './index.css'
import './style.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="AKAI - Akademickie Koło Aplikacji Internetowych - Politechnika Poznańska"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
