import React, { useState } from "react"
import styles from "./styles.module.scss"
import { push as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import logo from "./assets/logo.png"
import { useTranslation } from "react-i18next"

import "./hamburger.scss"

export const MobileNavigation = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
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
              <Link to="/about">{t("menu-about")}</Link>
            </li>
            <li className={styles.disabled}>
              <Link to="/">{t("menu-news")}</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/#areas">{t("menu-areas")}</Link>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href="/#contact">{t("menu-contact")}</a>
            </li>
          </ul>
        </Menu>
      </nav>
      <div className={styles.spacer}></div>
    </>
  )
}
