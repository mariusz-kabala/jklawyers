import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export const CookiePolicyBanner = () => {
  const { t, i18n } = useTranslation()

  return (<div className={styles.banner}>
      <CookieConsent
        acceptOnScroll={false}
        location="bottom"
        buttonText={t('cookie-policy-banner-button')}
        cookieName="cookieAccepted"
        style={{ background: "rgba(43, 55, 59, 0.7)"}}
        expires={150}
      >
        {t('cookie-policy-banner-info')} <Link to={`/${i18n.language}/cookies-policy`}>{t('cookie-policy-banner-link')}</Link>
      </CookieConsent>
  </div>)
}
