import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';
import nlTranslations from '../locales/nl.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  nl: {
    translation: nlTranslations,
  },
};

// Initialize i18n with SSR-safe defaults
// Language detection will happen on the client side
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language, will be overridden on client
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

// Detect and set language on client side
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('i18nextLng');
  if (saved && ['en', 'fr', 'nl'].includes(saved)) {
    i18n.changeLanguage(saved);
  } else {
    // Try to detect from browser
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'fr', 'nl'].includes(browserLang)) {
      i18n.changeLanguage(browserLang);
    }
  }
}

export default i18n;
