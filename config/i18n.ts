import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PT from "./portuguese";
import EN from "./english";


i18n.use(initReactI18next).init({
    resources: {
        pt: {
            translation: PT
        }
        ,
        en: {
            translation: EN
        }
    },
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
