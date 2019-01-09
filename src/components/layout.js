import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './normalize.css'
import './layout.scss'

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header className='header'>
          <Link to='/' className='tonatiuh'>
            <h1>Tonatiuh González</h1>
          </Link>
        <nav className='navbar'>
          <Link to='/projects'>Projects</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
