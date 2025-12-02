'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'fr' | 'nl';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'nl', label: 'NL' },
  ];

  return (
    <div className="flex items-center gap-2 border-l border-gray-200 pl-4 ml-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
            i18n.language === lang.code
              ? 'bg-black text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          title={`Switch to ${lang.code.toUpperCase()}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
