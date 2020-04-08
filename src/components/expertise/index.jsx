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
          Icon={IconPuzzle}
        />
        <ExpertiseArea header={t('box2')} Icon={FaFlag} />
        <ExpertiseArea header={t('box3')} Icon={IconChemist} />
        <ExpertiseArea
          header={t('box4')}
          Icon={FaRoad}
        />
        <ExpertiseArea
          header={t('box5')}
          Icon={FaHome}
        />
        <ExpertiseArea
          header={t('box6')}
          Icon={FaLightbulb}
        />
        <ExpertiseArea
          header={t('box7')}
          Icon={FaHandHoldingUsd}
        />
        <ExpertiseArea
          header={t('box8')}
          Icon={IconAgreement}
        />
      </section>
    </IconContext.Provider>
  )
}
