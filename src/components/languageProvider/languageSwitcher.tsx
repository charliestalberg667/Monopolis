'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

type Language = 'en' | 'fr' | 'nl';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '' },
    { code: 'fr', label: 'French', flag: '' },
    { code: 'nl', label: 'Dutch', flag: '' },
  ];

  const handleLanguageChange = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    // Add a small delay to prevent the click that opened the dropdown from immediately closing it
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 10);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="font-mono text-xs">
          {languages.find(lang => lang.code === i18n.language)?.code.toUpperCase() || 'EN'}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-44 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-100/50 py-1.5 z-[999999]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center justify-between px-3 py-2 text-left text-sm transition-all duration-150 ${
                i18n.language === lang.code
                  ? 'text-gray-900 font-medium bg-gray-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
              }`}
              type="button"
            >
              <span>{lang.label}</span>
              <span className={`font-mono text-xs ${
                i18n.language === lang.code ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {lang.code.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
