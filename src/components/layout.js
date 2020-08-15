/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Contact } from "components/contact"
import { Footer } from "components/footer"
import { CookiePolicyBanner } from 'components/cookiePolicyBanner'
import i18n from "../i18n"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="outer-container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <CookiePolicyBanner />
      <div id="page-wrap">
        <main>{children}</main>
        <footer>
          {/* <Contact /> */}
          <Footer />
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
