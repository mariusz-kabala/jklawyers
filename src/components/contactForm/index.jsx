import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next'
import { Link } from "gatsby"

export const ContactForm = () => {
    const { t, i18n } = useTranslation()
    const [isDisabled, setIsDisabled ] = useState(true)

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
                <div className={styles.bottom}>
                    <div className={styles.consent}>
                        <input type="checkbox" onClick={() => setIsDisabled(!isDisabled)}/>
                        <Link to={`/${i18n.language}/information-clause`}>{t('consent')}</Link>
                    </div>
                    <div className={styles.element}>
                        <button disabled={isDisabled} type="submit">{t('contact-button')}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
