import React from "react"
import styles from "./styles.module.scss"
import cn from 'classnames'
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import { useTranslation } from 'react-i18next'

export const FounderInfo = ({
    isLeft,
    isActive,
    person,
    info
}) => {
  const { t, i18n } = useTranslation()

  return (
    <div className={cn(styles.container, {
        [styles.left]: isLeft,
        [styles.active]: isActive
    })}>
      <h3>
        <span className={styles.position}>{t(`${person}-legal-counsel`)}</span>
        {t(`${person}-name`)} <span className={styles.surname}>{t(`${person}-surname`)}</span>
      </h3>
      <ReactMarkdown source={info[i18n.language] || info.en} />
    </div>
  )
}

FounderInfo.defaultProps = {
    isLeft: false,
    isActive: false
}

FounderInfo.propTypes = {
    isLeft: PropTypes.bool,
    isActive: PropTypes.bool,
    person: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired
}
  