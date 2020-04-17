import React from "react"
import { navigate } from 'gatsby' 
import styles from "./styles.module.scss"
import PropTypes from "prop-types"
import cn from 'classnames'

export const ExpertiseArea = ({ Icon, header, url }) => {
  return (
    <div onClick={() => {
      if (url) {
        navigate(url)
      }
    }} className={cn(styles.box, {
      [styles.hasUrl]: !!url 
    })}>
      <div className={styles.content}>
        <Icon className={styles.icon} />
        <h2>{header}</h2>
      </div>
    </div>
  )
}

ExpertiseArea.propTypes = {
  Icon: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  url: PropTypes.string
}
