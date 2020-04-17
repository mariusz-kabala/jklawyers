import React from "react"
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneSquare } from 'react-icons/fa'
import { FaMap } from 'react-icons/fa'
import styles from "./styles.module.scss"
import { useTranslation } from 'react-i18next'
import { useStaticQuery, graphql } from "gatsby"
import nl2br from 'react-nl2br'

export const ContactData = () => {
    const { t } = useTranslation()
    const { allStrapiAddress: { nodes } } = useStaticQuery(
        graphql`
            query {
            allStrapiAddress {
              nodes {
                address
                email
                linkdin
                phone
              }
            }
          }
        `
      )

    const { address, email, phone } = nodes[0]

    return (
        <div className={styles.container}>
            <div className={styles.element}>
                <h3><FaEnvelope /> {t('contact-info-email')}</h3>
                <p>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </div>
            <div className={styles.element}>
                <h3><FaPhoneSquare /> {t('contact-info-phone')}</h3>
                <p>{phone}</p>
            </div>
            <div className={styles.element}>
                <h3><FaMap /> {t('contact-info-address')}</h3>
                <p>{nl2br(address)}</p>
            </div>
        </div>
    )
}
