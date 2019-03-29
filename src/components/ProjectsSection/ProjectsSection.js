import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby';

import ProjectCard from '../ProjectCard';
import './ProjectsSection.scss';

export default function ProjectsSection() {
  return (
    <React.Fragment>
      <h2>Projects</h2>
      <p>Checkout my latest projects</p>
      <StaticQuery 
        query={latestProjects}
        render={({ allMarkdownRemark: { edges } }) => (
          <div className="project-section__card">
            {edges.map(({ node: { id, frontmatter }}) => (
              <ProjectCard id={id} {...frontmatter} />
            ))}
          </div>
        )}
      />
      <Link to='/projects' className="all-projects-link">View all my projects</Link>
    </React.Fragment>
  );
}

const latestProjects = graphql`
  {
    allMarkdownRemark (limit: 3) {
      edges {
        node {
          id
          frontmatter {
            title
            excerpt
            path
            thumb {
              childImageSharp {
                sizes(maxWidth: 400) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;