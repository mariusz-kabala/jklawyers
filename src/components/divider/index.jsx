import React from "react"
import styles from "./styles.module.scss"
import logo from './assets/logo.png'

export const Divider = () => {
  return (
    <div className={styles.divider}>
      <div className={styles.img}>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}
