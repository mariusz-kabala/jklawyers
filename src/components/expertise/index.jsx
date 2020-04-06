import React from "react"
import { ExpertiseArea } from "components/expertiseArea"
import styles from "./styles.module.scss"
import { FaBookOpen } from "react-icons/fa"
import { IconContext } from "react-icons"
import { useTranslation } from 'react-i18next'

export const Expertise = () => {
  const { t } = useTranslation()

  return (
    <IconContext.Provider
      value={{ color: "#970052", size: "3em", className: "global-class-name" }}
    >
      <a name="areas" />
      <section className={styles.container}>
        <ExpertiseArea
          header={t('box1')}
          Icon={FaBookOpen}
        />
        <ExpertiseArea header={t('box2')} Icon={FaBookOpen} />
        <ExpertiseArea header={t('box3')} Icon={FaBookOpen} />
        <ExpertiseArea
          header={t('box4')}
          Icon={FaBookOpen}
        />
        <ExpertiseArea
          header={t('box5')}
          Icon={FaBookOpen}
        />
        <ExpertiseArea
          header={t('box6')}
          Icon={FaBookOpen}
        />
        <ExpertiseArea
          header={t('box7')}
          Icon={FaBookOpen}
        />
        <ExpertiseArea
          header={t('box8')}
          Icon={FaBookOpen}
        />
      </section>
    </IconContext.Provider>
  )
}
