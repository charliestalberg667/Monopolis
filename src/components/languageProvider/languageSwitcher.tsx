'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './languageSwitcher.css';

type Language = 'en' | 'fr' | 'nl';

const languages: { code: Language; nameKey: string; flag: string }[] = [
  { code: 'en', nameKey: 'language.english', flag: '🇬🇧' },
  { code: 'fr', nameKey: 'language.french', flag: '🇫🇷' },
  { code: 'nl', nameKey: 'language.dutch', flag: '🇳🇱' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleLanguageChange = async (lang: Language) => {
    await i18n.changeLanguage(lang);
    closeDropdown();
  };

  // Compute menu position under button on open
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Align to right of button, match width ~ 192px (w-48)
      const width = 192;
      setMenuPosition({ top: rect.bottom + 8, left: Math.max(8, rect.right - width) });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languages.find(lang => lang.code === i18n.language as Language) || languages[0];

  return (
    <div className="relative z-[100001]" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="hidden sm:inline">{currentLanguage?.code.toUpperCase()}</span>
      </button>

      {isOpen && menuPosition && typeof window !== 'undefined'
        ? createPortal(
            <div
              className="w-48 bg-white rounded-md shadow-lg py-1 z-[100001] border border-gray-200"
              style={{ position: 'fixed', top: menuPosition.top, left: menuPosition.left }}
              role="menu"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                    i18n.language === lang.code
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg mr-2">{lang.flag}</span>
                  <span>{t(lang.nameKey)}</span>
                </button>
              ))}
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default LanguageSwitcher;