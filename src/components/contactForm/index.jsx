import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next'
import { Link } from "gatsby"
import Recaptcha from 'react-recaptcha'
import cn from 'classnames'

export const ContactForm = () => {
    const { t, i18n } = useTranslation()
    const [isDisabled, setIsDisabled ] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { setIsSuccess(true) }

    return (
        <div className={styles.content}>
            { isSuccess && (<div className={styles.success}>
            <p>{t('email-sent-success-msg')} <br /><a onClick={() => setIsSuccess(false)}>{t('email-close')}</a></p>
            </div>) }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.element}>
                    <label className={cn({
                        [styles.fieldError]: !!errors.name
                    })}>
                        <input type="text" name="name" placeholder={t('contact-name')} ref={register({ required: true })} />
                        {errors.name && <p className={styles.error}><span>{t('field-is-required')}</span></p>}
                    </label>
                </div>
                <div className={styles.element}>
                    <label className={cn({
                        [styles.fieldError]: !!errors.name
                    })}>
                        <input type="email" name="email" placeholder={t('contact-email')} ref={register({ required: true })} />
                        {errors.email && <p className={styles.error}><span>{t('field-is-required')}</span></p>}
                    </label>
                </div>
                <div className={styles.element}>
                    <label className={cn({
                        [styles.fieldError]: !!errors.name
                    })}>
                        <textarea name="message" placeholder={t('contact-message')} ref={register({ required: true })} />
                        {errors.message && <p className={styles.error}><span>{t('field-is-required')}</span></p>}
                    </label>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.consent}>
                        <input type="checkbox" onClick={() => setIsDisabled(!isDisabled)}/>
                        <Link to={`/${i18n.language}/information-clause`}>{t('consent')}</Link>
                    </div>
                    <div className={cn(styles.recaptcha, {
                        [styles.isVisible]: !isDisabled
                    })}>
                    <Recaptcha
                        sitekey="6LeQz-oUAAAAAB4EwPgfS6AUCGhbgtHmaoPEy9l7"
                        render="explicit"
                        verifyCallback={() => setIsVerified(true)}
                    />
                    </div>
                </div>
                <div className={styles.element}>
                    <button disabled={isDisabled || !isVerified} type="submit">{t('contact-button')}</button>
                </div>
            </form>
        </div>
    )
}
