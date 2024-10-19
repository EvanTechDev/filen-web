import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import locales from "virtual:i18next-loader"

export const storedLang = localStorage.getItem("lang")
export const navigatorLang = window.navigator.language
	? window.navigator.language.includes("-")
		? window.navigator.language.split("-")[0]?.toLowerCase()
		: window.navigator.language.toLowerCase()
	: null

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: locales.en
			},
			de: {
				translation: locales.de
			},
			cs: {
				translation: locales.cs
			},
			es: {
				translation: locales.es
			},
			fr: {
				translation: locales.fr
			},
			it: {
				translation: locales.it
			},
			ja: {
				translation: locales.ja
			},
			jp: {
				translation: locales.ja
			},
			ko: {
				translation: locales.ko
			},
			pl: {
				translation: locales.pl
			},
			pt: {
				translation: locales.pt
			},
			ru: {
				translation: locales.ru
			},
			tr: {
				translation: locales.tr
			},
			ua: {
				translation: locales.ua
			},
			uk: {
				translation: locales.ua
			}
		},
		lng: storedLang || navigatorLang || undefined,
		debug: true,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false
		}
	})

export default i18n
