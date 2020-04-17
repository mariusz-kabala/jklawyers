import React from "react"
import { ExpertiseArea } from "components/expertiseArea"
import styles from "./styles.module.scss"
import { FaRoad } from "react-icons/fa"
import { FaLightbulb } from "react-icons/fa"
import { FaHome } from "react-icons/fa"
import { FaFlag } from "react-icons/fa"
import { FaHandHoldingUsd } from "react-icons/fa"
import { IconContext } from "react-icons"
import { IconPuzzle } from 'components/expertiseArea/icons/puzzle'
import { IconAgreement } from 'components/expertiseArea/icons/agreement'
import { IconChemist } from 'components/expertiseArea/icons/chemist'
import { useTranslation } from 'react-i18next'
import { useStaticQuery, graphql } from 'gatsby'
 
const getIcon = icon => {
  switch (icon) {
    case 'road':
      return FaRoad
    case 'lightBulb':
      return FaLightbulb
    case 'home':
      return FaHome
    case 'flag':
      return FaFlag
    case 'handHoldingUsd':
      return FaHandHoldingUsd
    case 'puzzle':
      return IconPuzzle
    case 'agreement':
      return IconAgreement
    case 'chemist':
      return IconChemist
  }
}


export const Expertise = () => {
  const { i18n } = useTranslation()
  const data = useStaticQuery(
    graphql`
    query ExpertiseAreasQuery {
      allStrapiWorkingAreas(sort: {order: ASC, fields: order}) {
        edges {
          node {
            icon
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
          url={node.articles?.slug ? `/${node.language.code}/${node.articles?.slug}` : undefined}
        />
      ))}
      </section>
    </IconContext.Provider>
  )
}
