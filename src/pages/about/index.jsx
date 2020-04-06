import React from "react"
import Layout from "components/layout"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import { ContentEN } from 'locales/en/about'
import { ContentDE } from 'locales/de/about'
import { ContentPL } from 'locales/pl/about'
import { ContentFR } from 'locales/fr/about'

const Contant = () => {
  const { i18n } = useTranslation()

  switch (i18n.language) {
    case 'pl':
      return (<ContentPL />)
    case 'de':
      return (<ContentDE />)
    case 'fr':
      return (<ContentFR />)
    default:
      return (<ContentEN />)
  }
}

const AboutPage = () => {
  
  return (
    <Layout>
      <div className={styles.bg}>
        <div className={styles.main}></div>
      </div>
      <div className={styles.content}>
        <Contant />
      </div>
    </Layout>
  )
}

export default AboutPage
