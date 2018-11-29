const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectPostTemplate = path.resolve(`src/templates/single-project.js`)

  return graphql(`
    {
      allMarkdownRemark(limit: 1000)
      {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: projectPostTemplate,
          context: {}
        })
      })
    })
}
