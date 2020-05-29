import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import ReactMarkdown from "react-markdown"
import { getIcon } from "helpers/icon"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next'

const WorkingAreaPage = ({ pageContext }) => {
  const { title, description, icon, articles } = pageContext
  const IconComponent = getIcon(icon)
  const { t, i18n } = useTranslation()
  console.log(pageContext)
  return (
    <Layout>
      <SEO title={title} />

      <div className={styles.content}>
        <h1><i><IconComponent /></i> {title}</h1>
        <ReactMarkdown source={description} />

        {Array.isArray(articles) && articles.length > 0 && <section className={styles.articles}>
            <h3>{t('read-more')}:</h3>
            <ul>
              {articles.map(article => (
                <li>
                  <Link to={`/${i18n.language}/${article.slug}`}>
                    <h4>{article.title}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </section>}
      </div>
    </Layout>
  )
}

export default WorkingAreaPage
