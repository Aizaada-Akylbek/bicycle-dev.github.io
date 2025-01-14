import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "../i18n/en/en.json";
import RU from "../i18n/ru/ru.json";
import GE from "../i18n/ge/ge.json";

const resources = {
  en: {
    translation: EN,
  },

  ru: {
    translation: RU,
  },
  de: {
    translation: GE,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "en", //ru, kg
  fallbackLng: "ru",
});

export default i18next;
