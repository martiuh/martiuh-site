import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from './Navbar'

import './normalize.css'
// import './layout.scss'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        ]}
      />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
