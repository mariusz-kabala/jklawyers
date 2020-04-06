import React from "react"
import flagDE from './assets/de.png'
import flagFR from './assets/fr.png'
import flagUK from './assets/uk.png'
import flagPL from './assets/pl.png'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

export const LanguagesBar = () => {
    const { i18n } = useTranslation()

    return (
        <ul className={styles.container}>
            <li className={cn({
                [styles.active]: i18n.language === 'pl'
            })}>
                <a onClick={() => i18n.changeLanguage('pl')}>
                    <img src={flagPL} alt="pl" />
                </a>
            </li>
            <li className={cn({
                [styles.active]: i18n.language === 'en'
            })}>
            <a onClick={() => i18n.changeLanguage('en')}>
                    <img src={flagUK} alt="en" />
                </a>
            </li>
            <li className={cn({
                [styles.active]: i18n.language === 'de'
            })}>
                <a onClick={() => i18n.changeLanguage('de')}>
                    <img src={flagDE} alt="de" />
                </a>
            </li>
            <li className={cn({
                [styles.active]: i18n.language === 'fr'
            })}>
                <a onClick={() => i18n.changeLanguage('fr')}>
                    <img src={flagFR} alt="fr" />
                </a>
            </li>
        </ul>
    )
}