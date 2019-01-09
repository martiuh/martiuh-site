import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import './single-project.scss'

export default function Template({ data }) {
  const { markdownRemark: project } = data
  const { frontmatter } = project
  const { title } = project.frontmatter
  return (
    <Layout>
      <Helmet title={`${title}`} />
      <main className='content'>
        <h1>{title}</h1>
        {frontmatter.thumb && frontmatter.thumb.childImageSharp && (
          <Img
            style={{
              objectFit: 'contain',
              width: '50vw'
            }}
            sizes={frontmatter.thumb.childImageSharp.sizes}
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <Link to='/projects'>
          Back to projects
        </Link>
      </main>
    </Layout>
  )
}

export const projectQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        excerpt
        created
        thumb {
          childImageSharp {
            sizes(maxWidth: 1200) {
             ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
