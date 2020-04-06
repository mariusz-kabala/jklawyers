import React from "react"
import styles from "./styles.module.scss"
import cn from 'classnames'
import PropTypes from "prop-types"
import { useTranslation } from 'react-i18next'

export const FounderInfo = ({
    isLeft,
    isActive,
    person
}) => {
  const { t } = useTranslation()

  return (
    <div className={cn(styles.container, {
        [styles.left]: isLeft,
        [styles.active]: isActive
    })}>
      <h3>
        <span className={styles.position}>{t('Legal Counsel')}</span>
        {t(`${person}-name`)} <span className={styles.surname}>{t(`${person}-surname`)}</span>
      </h3>
      <p>
        {t(`${person}-p1`)}
      </p>
      <p>
        {t(`${person}-p2`)}
      </p>
      <p>
        {t(`${person}-p3`)}
      </p>
      <p>
        {t(`${person}-p4`)}
      </p>
      <p>
        {t(`${person}-p5`)}
      </p>
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
    person: PropTypes.string.isRequired
}
  