import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Founders } from 'components/founders'
import { Expertise } from 'components/expertise'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title={data.allStrapiSeo.nodes[0].title} description={data.allStrapiSeo.nodes[0].description}/>
    <Founders />
    <Expertise />
  </Layout>
)

export const query = graphql`
  query SeoQuery {
    allStrapiSeo {
      nodes {
        title
        description
      }
    }
  }
`

export default IndexPage
