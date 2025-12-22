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

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-900 mb-10">

          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" aria-label="Monopolis Home" className="block">
              <div className="relative w-32 h-10">
                <Image
                  src="/logo-black.svg"
                  alt="Monopolis Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-medium text-lg mb-4">
              {t('footer.company')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="footer-link text-gray-700">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link text-gray-700">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column (future services or spacing) */}
          <div />

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-900 font-medium text-lg mb-4">
              {t('footer.contactTitle')}
            </h4>
            <ul className="space-y-3">

              <li className="flex items-start">
                <span className="mr-3">✉️</span>
                <a
                  href="mailto:contact@monopolis.be"
                  className="footer-link text-gray-700"
                >
                  contact@monopolis.be
                </a>
              </li>

              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <a
                  href="tel:+32495223376"
                  className="footer-link text-gray-700"
                >
                  +32 (0)495 22 33 76
                </a>
              </li>

              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span className="text-gray-700">
                  Pastoor Bolsstraat 5
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#048542]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Monopolis. {t('footer.rights')}.
          </p>

          <div className="flex space-x-5 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-link text-gray-700"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-link text-gray-700"
            >
              ig
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-link text-gray-700"
            >
              in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
