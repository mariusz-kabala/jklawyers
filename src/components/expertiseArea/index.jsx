import React from "react"
import styles from "./styles.module.scss"
import PropTypes from "prop-types"

export const ExpertiseArea = ({ Icon, header, description }) => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <Icon className={styles.icon} />
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

ExpertiseArea.propTypes = {
  Icon: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
}
