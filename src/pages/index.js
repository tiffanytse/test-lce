import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Library from "../components/library"

export default ({setTags}) => (
  <StaticQuery
    query={graphql`
      query getPosts {
        allMarkdownRemark(
          limit: 1000
        ) {
          categories: distinct(field: frontmatter___category)
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              frontmatter {
                path
                title
                desc
                category
                tags
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout isFrontPage={true}>
        <Library posts={data.allMarkdownRemark.edges.map(({node}) => node)} categories={data.allMarkdownRemark.categories}/>
      </Layout>
    )}
  />
)
