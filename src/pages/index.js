import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Founders } from 'components/founders'
import { Expertise } from 'components/expertise'
import { globalHistory as history } from "@reach/router"
import { navigate } from "gatsby"
import { useTranslation } from "react-i18next"

const IndexPage = ({data}) => {
  const { i18n } = useTranslation()
  const { location } = history

  useEffect(() => {
    const [_, lang] = location.pathname.split("/")
    if (lang === '') {
      navigate(`/${i18n.language}`)
    }
  }, [i18n])
  return (
  <Layout>
    <SEO title={data.allStrapiSeo.nodes[0].title} description={data.allStrapiSeo.nodes[0].description}/>
    <Founders />
    <Expertise />
  </Layout>
)
}

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
