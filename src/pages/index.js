import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Founders } from 'components/founders'
import { Expertise } from 'components/expertise'

const IndexPage = () => (
  <Layout>
    <Founders />
    <Expertise />
  </Layout>
)

export default IndexPage
