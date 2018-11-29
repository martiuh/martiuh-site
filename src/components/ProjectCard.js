import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { default as GatsbyImage } from 'gatsby-image'
import Helmet from 'react-helmet'

import './ProjectCard.scss'

export default function ProjectCard({title, excerpt, thumb, path}) {
  return (
    <div className='project-card'>
      <Helmet title='Projects by Tonatiuh' />
      <h2>{title}</h2>
        {thumb && thumb.childImageSharp && (
        <Link to={path}>
            <GatsbyImage
              style={{
                height: '200px'
              }}
              className='project-thumb'
              sizes={thumb.childImageSharp.sizes}
            />
        </Link>
        )}
      <p>{excerpt}</p>
      <Link to={path}>
        Ver
      </Link>
    </div>
  )
}
