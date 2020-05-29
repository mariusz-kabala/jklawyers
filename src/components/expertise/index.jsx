import React from "react"
import { ExpertiseArea } from "components/expertiseArea"
import styles from "./styles.module.scss"
import { IconContext } from "react-icons"
import { useTranslation } from 'react-i18next'
import { useStaticQuery, graphql } from 'gatsby'
import slugify from 'slugify'
import { getIcon } from 'helpers/icon'

export const Expertise = () => {
  const { i18n } = useTranslation()
  const data = useStaticQuery(
    graphql`
    query ExpertiseAreasQuery {
      allStrapiWorkingAreas(sort: {order: ASC, fields: order}) {
        edges {
          node {
            icon
            description
            title
            language {
              code
            }
          }
        }
      }
    }`
  )

  return (
    <IconContext.Provider
      value={{ color: "#970052", size: "3em", className: "global-class-name" }}
    >
      <a name="areas" />
      <section className={styles.container}>
      {data.allStrapiWorkingAreas.edges.filter(record => record.node.language.code === i18n.language).map(({node}) => (
        <ExpertiseArea
          header={node.title}
          Icon={getIcon(node.icon)}
          url={node.description && node.description !== '' ? `/${node.language.code}/working-area/${slugify(node.title.toLowerCase())}` : undefined}
        />
      ))}
      </section>
    </IconContext.Provider>
  )
}
