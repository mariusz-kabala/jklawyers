import React from "react"
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneSquare } from 'react-icons/fa'
import { FaMap } from 'react-icons/fa'
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next'

export const ContactData = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <h3><FaEnvelope /> {t('contact-info-email')}</h3>
                <p>
                    <a href="mailto:info@jklawyers.pl">info@jklawyers.pl</a>
                </p>
            </div>
            <div className={styles.element}>
                <h3><FaPhoneSquare /> {t('contact-info-phone')}</h3>
                <p>+48 32 724 14 54</p>
            </div>
            <div className={styles.element}>
                <h3><FaMap /> {t('contact-info-address')}</h3>
                <p>ul. Porcelanowa 23s<br />
                40-246 Katowice</p>
            </div>
        </div>
    )
}