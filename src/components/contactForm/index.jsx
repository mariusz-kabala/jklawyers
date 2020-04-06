import React from "react"
import { useForm } from 'react-hook-form'
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next'

export const ContactForm = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.content}>
            <form>
                <div className={styles.element}>
                    <label>
                        <input type="text" name="name" placeholder={t('contact-name')} />
                    </label>
                </div>
                <div className={styles.element}>
                    <label>
                        <input type="email" name="email" placeholder={t('contact-email')} />
                    </label>
                </div>
                <div className={styles.element}>
                    <label>
                        <textarea name="message" placeholder={t('contact-message')} />
                    </label>
                </div>
                <div className={styles.element}>
                    <button type="submit">{t('contact-button')}</button>
                </div>
            </form>
        </div>
    )
}