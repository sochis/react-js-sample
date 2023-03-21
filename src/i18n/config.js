import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './locales/en/translations.json'
import jaJson from './locales/ja/translations.json'

i18n.use(initReactI18next).init({
  //   debug: true,
  returnEmptyString: false,
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translations: enJson },
    ja: { translations: jaJson }
  },
  ns: ['translations'],
  defaultNS: 'translations'
})

i18n.languages = ['en', 'ja']

export default i18n
