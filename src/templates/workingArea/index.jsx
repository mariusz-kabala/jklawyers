import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import ReactMarkdown from "react-markdown"
import { getIcon } from "helpers/icon"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import { IconContext } from "react-icons"
import slugify from 'slugify'

const WorkingAreaPage = ({ pageContext }) => {
  const { title, description, icon, articles, workingAreas } = pageContext
  const IconComponent = getIcon(icon)
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <SEO title={title} />

      <div className={styles.content}>
        <div className={styles.icon}>
          <div className={styles.bg}>
            <i>
              <IconComponent />
            </i>
            <h1>{title}</h1>
          </div>
        </div>
        <div className={styles.txt}>
          <ReactMarkdown source={description} />

          {Array.isArray(articles) && articles.length > 0 && (
            <section className={styles.articles}>
              <h3>{t("read-more")}:</h3>
              <ul>
                {articles.map(article => (
                  <li>
                    <Link to={`/${i18n.language}/${article.slug}`}>
                      <h4>{article.title}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
        <div className={styles.workingAreas}>
          <IconContext.Provider
            value={{
              color: "#970052",
              size: "3em",
              className: "global-class-name",
            }}
          >
            {workingAreas
              .filter(record => record.node.language.code === i18n.language)
              .map(({ node }) => {
                const Icon = getIcon(node.icon)

                return (
                  <div>
                    <Link to={`/${node.language.code}/working-area/${slugify(node.title.toLowerCase())}`}>
                      <Icon />
                    </Link>
                  </div>
                )
              })}
          </IconContext.Provider>
        </div>
      </div>
    </Layout>
  )
}

export default WorkingAreaPage
