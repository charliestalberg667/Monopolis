'use client';

import React from 'react';
import { useLanguage } from './languageProvider';
import './languageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <button 
            onClick={toggleLanguage}
            className="language-switcher"
            data-language-switcher
        >
            {language.toUpperCase()}
        </button>
    );
};

export default LanguageSwitcher;