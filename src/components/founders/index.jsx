import React, { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import { FounderInfo } from "components/founderInfo"
import { Divider } from "components/divider"
import { useStaticQuery, graphql } from "gatsby"

let founderInterval

export const Founders = () => {
  const [isLeftActive, setIsLeftActive] = useState(false)
  const [isIntervalActive, setIsIntervalActive] = useState(true)
  const {
    allStrapiUser: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allStrapiUser {
          edges {
            node {
              bio_de
              bio_en
              bio_fr
              bio_pl
              username
            }
          }
        }
      }
    `
  )
  const persons = edges.reduce((all, { node }) => {
    all[node.username] = {
      de: node.bio_de,
      pl: node.bio_pl,
      en: node.bio_en,
      fr: node.bio_fr,
    }

    return all
  }, {})

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
          <div
            className={styles.jamrozy}
            onClick={() => {
              setIsLeftActive(true)
              setIsIntervalActive(false)
            }}
          ></div>
        </div>

        <div className={styles.box}>
          <div className={styles.logo}></div>
        </div>

        <div
          className={styles.box}
          onClick={() => {
            setIsLeftActive(false)
            setIsIntervalActive(false)
          }}
        >
          <div className={styles.kabala}></div>
        </div>
      </section>
      <section className={styles.info}>
        <FounderInfo
          person="jamrozy"
          info={persons.jamrozy}
          isLeft={true}
          isActive={isLeftActive === true}
        />
        <Divider />
        <FounderInfo
          person="kabala"
          info={persons.kabala}
          isActive={isLeftActive === false}
        />
      </section>
    </>
  )
}
