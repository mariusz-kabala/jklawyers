import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import enTranslations from './locales/en/translations.json'
import plTranslations from './locales/pl/translations.json'
import deTranslations from './locales/de/translations.json'
import frTranslations from './locales/fr/translations.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: enTranslations
      },
      pl: {
        translation: plTranslations
      },
      de: {
        translation: deTranslations
      },
      fr: {
        translation: frTranslations
      }
    },
    react: {
      wait: true,
    },
  })

  export default i18n
