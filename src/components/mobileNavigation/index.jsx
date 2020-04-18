import React, { useState } from "react"
import styles from "./styles.module.scss"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import logo from "./assets/logo.png"
import { useTranslation } from "react-i18next"

import "./hamburger.scss"

export const MobileNavigation = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link to={`/${i18n.language}`}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <Menu
          isOpen={isOpen}
          onStateChange={state => setIsOpen(state.isOpen)}
          noOverlay
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <ul className={styles.menu}>
            <li>
              <Link to={`/${i18n.language}/about`}>{t("menu-about")}</Link>
            </li>
            <li className={styles.disabled}>
              <Link to={`/${i18n.language}`}>{t("menu-news")}</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to={`/${i18n.language}/#areas`}>{t("menu-areas")}</Link>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href={`/${i18n.language}/#contact`}>{t("menu-contact")}</a>
            </li>
          </ul>
        </Menu>
      </nav>
      <div className={styles.spacer}></div>
    </>
  )
}
