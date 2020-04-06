import React, { useState, useEffect } from "react"
import styles from './styles.module.scss'
import { FounderInfo } from 'components/founderInfo'
import { Divider } from 'components/Divider'

let founderInterval

export const Founders = () => {
    const [isLeftActive, setIsLeftActive] = useState(false)
    const [isIntervalActive, setIsIntervalActive] = useState(true)
    

    useEffect(() => {
        founderInterval = setInterval(() => {
            if (!isIntervalActive) {
                return
            }
            setIsLeftActive(!isLeftActive)
        }, 5500)
        
        return () => clearInterval(founderInterval)
    }, [isLeftActive])

    return (
        <>
            <section className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.jamrozy} onClick={() => {
                        setIsLeftActive(true)
                        setIsIntervalActive(false)
                    }}></div>
                </div>
                
                <div className={styles.box}>
                    <div className={styles.logo}></div>
                </div>
                
                <div className={styles.box} onClick={() => {
                        setIsLeftActive(false)
                        setIsIntervalActive(false)
                    }}>
                    <div className={styles.kabala}></div>
                </div>
            </section>
            <section className={styles.info}>
                <FounderInfo person="jamrozy" isLeft={true} isActive={isLeftActive === true} />
                <Divider />
                <FounderInfo person="kabala" isActive={isLeftActive === false} />
            </section>
        </>
    )
}