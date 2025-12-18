'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-900 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" aria-label="Monopolis Home" className="block logo-link">
              <div className="relative w-32 h-10">
                <Image 
                  src="/logo-black.svg" 
                  alt="Monopolis Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm">{t('footer.description')}</p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-gray-900 font-medium text-lg mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="footer-link text-gray-700">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="footer-link text-gray-700">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-medium text-lg mb-4">{t('footer.contactTitle')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">✉️</span>
                <a href="mailto:info@monopolis.be" className="footer-link text-gray-700">info@monopolis.be</a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">📞</span>
                <a href="tel:+3221234567" className="footer-link text-gray-700">+32 2 123 45 67</a>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3">📍</span>
                <span className="text-gray-700">Brusselsesteenweg 10, 1652 Alsemberg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#048542]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            <span className="text-gray-600">© {currentYear} Monopolis. {t('footer.rights')}.</span>
          </p>
          <div className="flex space-x-5">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link text-gray-700 text-lg"
              aria-label="Facebook"
            >
              <span>f</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link text-gray-700 text-lg"
              aria-label="Instagram"
            >
              <span>ig</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link text-gray-700 text-lg"
              aria-label="LinkedIn"
            >
              <span>in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
