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

export const LanguagesBar = () => {
  const { i18n } = useTranslation()
  const { location } = history
  const getOnClickCallback = lang => () => {
    i18n.changeLanguage(lang)
    try {
      localStorage.setItem("language", lang)
    } catch (err) {
      // ignore
    }
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
        })}
      >
        <a onClick={getOnClickCallback("pl")}>
          <img src={flagPL} alt="pl" />
        </a>
      </li>
      <li
        className={cn({
          [styles.active]: i18n.language === "en",
        })}
      >
        <a onClick={getOnClickCallback("en")}>
          <img src={flagUK} alt="en" />
        </a>
      </li>
      <li
        className={cn({
          [styles.active]: i18n.language === "de",
        })}
      >
        <a onClick={getOnClickCallback("de")}>
          <img src={flagDE} alt="de" />
        </a>
      </li>
      <li
        className={cn({
          [styles.active]: i18n.language === "fr",
        })}
      >
        <a onClick={getOnClickCallback("fr")}>
          <img src={flagFR} alt="fr" />
        </a>
      </li>
    </ul>
  )
}
