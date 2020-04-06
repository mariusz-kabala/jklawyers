import React from "react"
import { ContactForm } from 'components/contactForm'
import { ContactMap } from 'components/contactMap'
import { ContactData } from 'components/contactData'
import styles from "./styles.module.scss"

export const Contact = () => {
    return (
        <div className={styles.container}>
            <a name="contact" />
            <div className={styles.content}>
                <ContactForm />
                <ContactData />
                <ContactMap />
            </div>
        </div>
    )
}