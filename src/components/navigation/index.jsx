import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.scss"
import logo from "./logo.png"
import { useTranslation } from "react-i18next"

export const Navigation = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className={styles.bg}>
        <nav className={styles.container}>
          <ul>
            <li className={styles.logo}>
              <Link to={`/${i18n.language}`}>
                <img src={logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to={`/${i18n.language}/about`}>{t("menu-about")}</Link>
            </li>
            <li  className={styles.disabled}>
              <Link to={`/${i18n.language}/news`}>{t("menu-news")}</Link>
            </li>
            <li>
              <Link to={`/${i18n.language}/training`}>
                {t("menu-training")}
              </Link>
            </li>
            <li>
              <Link to={`/${i18n.language}/#areas`}>{t("menu-areas")}</Link>
            </li>
            <li>
              <a href={`/${i18n.language}/#contact`}>{t("menu-contact")}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.spacer}></div>
    </>
  )
}
