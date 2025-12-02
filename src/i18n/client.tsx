'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './config';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Detect and set language on client side only
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
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
