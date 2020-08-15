import React from "react"
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { ContactData } from "components/contactData"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

export const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className={styles.footer}>
      <ContactData />
      <div>
        <FaLinkedinIn />
        <a href="mailto:info@jklawyers.pl">
          <FaEnvelope />
        </a>
      </div>
      <div>
        <p>
          © JKLawyers.pl {t("all-rights-reserved")}.
          <ul>
            <li>
              <Link to={`/${i18n.language}/information-clause`}>
                {t("information-clause")}
              </Link>
            </li>
            <li>
              <Link to={`/${i18n.language}/disclaimer`}>
                {t("disclaimer")}
              </Link>
            </li>
            <li>
              <Link to={`/${i18n.language}/cookies-policy`}>
                {t("cookies-policy")}
              </Link>
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}
