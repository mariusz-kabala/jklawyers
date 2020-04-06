import React from "react"
import styles from './styles.module.scss'
import { push as Menu } from 'react-burger-menu'
import { Link } from "gatsby"
import logo from './assets/logo.png'

import './hamburger.scss'

export const MobileNavigation = () => {
    return (
        <>
        <nav className={styles.container}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <Menu noOverlay pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/about">O JK Lawyers</Link>
                    </li>
                    <li className={styles.disabled}>
                        <Link to="/">Aktualności</Link>
                    </li>
                    <li>
                        <Link to="/#areas">Obszar działania</Link>
                    </li>
                    <li>
                        <a href="#contact">Kontakt</a>
                    </li>
                </ul>
            </Menu>
        </nav>
        <div className={styles.spacer}></div>
        </>
    )
}