import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import Recaptcha from "react-recaptcha"
import cn from "classnames"
import useSSR from "use-ssr"

const { CMS_URL } = process.env

export const ContactForm = () => {
  const { t, i18n } = useTranslation()
  const [isDisabled, setIsDisabled] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const nameEl = useRef()
  const emailEl = useRef()
  const msgRef = useRef()
  const onSubmit = data => {
    fetch(`${CMS_URL}/messages`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: data.email,
            message: data.message,
            topic: data.name 
        })
    })

    setIsSuccess(true)
  }
  const { isBrowser } = useSSR()

  return (
    <div className={styles.content}>
      {isSuccess && (
        <div className={styles.success}>
          <p>
            {t("email-sent-success-msg")} <br />
            <a onClick={() => {
                setIsSuccess(false)
                setIsDisabled(true)

                nameEl.current.value = ''
                msgRef.current.value = ''
                emailEl.current.value = ''
            }}>{t("email-close")}</a>
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.element}>
          <label
            className={cn({
              [styles.fieldError]: !!errors.name,
            })}
          >
            <input
              type="text"
              name="name"
              placeholder={t("contact-name")}
              ref={e => {
                register(e, { required: true })
                nameEl.current = e
              }}
            />
            {errors.name && (
              <p className={styles.error}>
                <span>{t("field-is-required")}</span>
              </p>
            )}
          </label>
        </div>
        <div className={styles.element}>
          <label
            className={cn({
              [styles.fieldError]: !!errors.name,
            })}
          >
            <input
              type="email"
              name="email"
              placeholder={t("contact-email")}
              ref={e => {
                register(e, { required: true })
                emailEl.current = e
              }}
            />
            {errors.email && (
              <p className={styles.error}>
                <span>{t("field-is-required")}</span>
              </p>
            )}
          </label>
        </div>
        <div className={styles.element}>
          <label
            className={cn({
              [styles.fieldError]: !!errors.name,
            })}
          >
            <textarea
              name="message"
              placeholder={t("contact-message")}
              ref={e => {
                register(e, { required: true })
                msgRef.current = e
              }}
            />
            {errors.message && (
              <p className={styles.error}>
                <span>{t("field-is-required")}</span>
              </p>
            )}
          </label>
        </div>
        <div className={styles.bottom}>
          <div className={styles.consent}>
            <input type="checkbox" checked={!isDisabled} onClick={() => setIsDisabled(!isDisabled)} />
            <Link to={`/${i18n.language}/information-clause`}>
              {t("consent")}
            </Link>
          </div>
          <div
            className={cn(styles.recaptcha, {
              [styles.isVisible]: !isDisabled,
            })}
          >
            {isBrowser && (
              <Recaptcha
                sitekey="6LeQz-oUAAAAAB4EwPgfS6AUCGhbgtHmaoPEy9l7"
                render="explicit"
                verifyCallback={() => setIsVerified(true)}
              />
            )}
          </div>
        </div>
        <div className={styles.element}>
          <button disabled={isDisabled || !isVerified} type="submit">
            {t("contact-button")}
          </button>
        </div>
      </form>
    </div>
  )
}
