import React from "react"
import { Link } from "gatsby"
import styles from './styles.module.scss'
import logo from './logo.png'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
    const { t, i18n } = useTranslation()
    
    return (
        <>
            <div className={styles.bg}>
                <nav className={styles.container}>
                    <ul>
                        <li>
                            <Link to={`/${i18n.language}/about`}>{t('menu-about')}</Link>
                        </li>
                        <li className={styles.disabled}>
                        <Link to="/">{t('menu-news')}</Link>
                        </li>
                        <li className={styles.logo}>
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/#areas">{t('menu-areas')}</Link>
                        </li>
                        <li>
                            <a href="#contact">{t('menu-contact')}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.spacer}></div>
        </>
    )
}
