import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from './layout'
import ExamplePage from './example-page'

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data

  return (
    <>
      <Helmet
        title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Layout isFrontPage={false}>
        <ExamplePage title={frontmatter.title} html={html} desc={frontmatter.desc} tags={frontmatter.tags} category={frontmatter.category} date={frontmatter.date}/>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
        desc
        tags
        category
        date
      }
    }
  }
`
