import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ProjectCard from '../components/ProjectCard'
import Layout from '../components/layout'
import './projects.scss'

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                excerpt
                path
                thumb {
                  childImageSharp {
                    sizes(maxWidth: 300) {
                     ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <Layout>
        <main className='projects'>
          {edges.map(({ node: { id, frontmatter } }) => (
            <ProjectCard
              {...frontmatter}
              key={id}
            />
          ))}
        </main>
      </Layout>
    )}
  />
)
