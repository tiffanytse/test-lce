import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'
import HeroSection from './hero-section';
import OgImage from '../images/liquid-code-examples-og.png'

const Layout = ({ children, isFrontPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            slogan
          }
        }
      }
    `}

    render={data => {

      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              { property: 'og:title', content: 'Liquid Code Examples'},
              { property: 'og:type', content: 'website'},
              { property: 'og:image', content: OgImage },
              { property: 'og:description', content: 'Sample'},
            ]}
          />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div id="PageContainer">
            <main role="main" id="Main">
              <HeroSection
                isFrontPage={isFrontPage}
                siteTitle={data.site.siteMetadata.title}
                siteSlogan={data.site.siteMetadata.slogan}
              />
              {children}
            </main>
            <Footer />
          </div>
        </>
      )
    }
  }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
