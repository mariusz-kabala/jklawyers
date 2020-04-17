import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import styles from "./styles.module.scss"
import ReactMarkdown from "react-markdown"

const ArticlePage = ({pageContext}) => {
  
  const { title, text, slug } = pageContext

  return (
    <Layout>
      <SEO title={title} />
      {slug === 'about' && (<div className={styles.bg}>
        <div className={styles.main}></div>
      </div>)}
      <div className={styles.content}>
        <ReactMarkdown source={text} />
      </div>
    </Layout>
  )
}

export default ArticlePage
