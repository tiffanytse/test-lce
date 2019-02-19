const path = require("path")

const query = `{
  allMarkdownRemark(
    limit: 1000
  ) {
    edges {
      node {
        excerpt(pruneLength: 250)
        html
        id
        frontmatter {
          path
          title
        }
      }
    }
  }
}`

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/components/post-layout.js')

  const createPageFromNode = ({ node }) =>
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })

  return graphql(query).then(({errors, data}) => {
    if (errors) {
      return Promise.reject(errors)
    }
    data.allMarkdownRemark.edges.forEach(createPageFromNode)
  })
}

