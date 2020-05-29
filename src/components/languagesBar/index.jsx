import React from "react"
import flagDE from "./assets/de.png"
import flagFR from "./assets/fr.png"
import flagUK from "./assets/uk.png"
import flagPL from "./assets/pl.png"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import cn from "classnames"
import { globalHistory as history } from "@reach/router"
import { navigate } from "gatsby"

export const LanguagesBar = ({showIcon = false}) => {
  const { i18n } = useTranslation()
  const { location } = history
  const getOnClickCallback = lang => () => {
    i18n.changeLanguage(lang)
    const locationArr = location.pathname.split("/")
    const [_, currentLang] = locationArr

    if (["pl", "de", "en", "fr"].includes(currentLang)) {
      locationArr[1] = lang

      navigate(locationArr.join("/"))
    }
  }

  return (
    <ul className={styles.container}>
      <li
        className={cn({
          [styles.active]: i18n.language === "pl",
          [styles.text]: !showIcon,
        })}
      >
        <a onClick={getOnClickCallback("pl")}>
          {showIcon ? <img src={flagPL} alt="pl" /> : 'PL'}
        </a>
      </li>
      <li
        className={cn({
          [styles.active]: i18n.language === "en",
          [styles.text]: !showIcon,
        })}
      >
        <a onClick={getOnClickCallback("en")}>
          {showIcon ? <img src={flagUK} alt="en" /> : 'EN'}
        </a>
      </li>
      <li
        className={cn({
          [styles.active]: i18n.language === "de",
          [styles.text]: !showIcon,
        })}
      >
        <a onClick={getOnClickCallback("de")}>
          {showIcon ? <img src={flagDE} alt="de" /> : 'DE'}
        </a>
      </li>
      <li
        className={cn({
          [styles.active]: i18n.language === "fr",
          [styles.text]: !showIcon,
        })}
      >
        <a onClick={getOnClickCallback("fr")}>
          {showIcon ? <img src={flagFR} alt="fr" /> : 'FR'}
        </a>
      </li>
    </ul>
  )
}
