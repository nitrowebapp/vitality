import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";
import es from "@/locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, pt: { translation: pt }, es: { translation: es } },
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "es"],
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0,
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
export const LOCALES = ["en", "pt", "es"] as const;
export type Locale = (typeof LOCALES)[number];
