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
      <p>{excerpt}</p>
        {thumb && thumb.childImageSharp && (
          <Link to={path} className='miniature-link'>
              <GatsbyImage
                style={{
                  width: '80%',
                  height: '100%',
                  'object-position': 'center'
                }}
                className='project-thumb'
                sizes={thumb.childImageSharp.sizes}
              />
          </Link>
        )}
      <p>
        <Link to={path} className="project-card__read-more-link">
          Read More
        </Link>
      </p>
    </div>
  )
}
