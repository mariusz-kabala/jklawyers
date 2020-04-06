import React from "react"
import { FaLinkedinIn, FaEnvelope }  from 'react-icons/fa'
import styles from "./styles.module.scss"

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <FaLinkedinIn />
                <a href="mailto:info@jklawyers.pl">
                    <FaEnvelope />
                </a>
            </div>
            <div>
                <p>© JKLawyers.pl</p>
            </div>
        </div>
    )
}