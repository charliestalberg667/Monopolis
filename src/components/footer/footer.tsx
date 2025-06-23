import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#013b25] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="relative w-32 h-10">
              <Image 
                src="/logo-white.png" 
                alt="Monopolis Logo" 
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white text-sm">Your trusted partner in Belgian real estate.</p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-white hover:underline transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-white hover:underline transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white hover:underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/buy" className="text-white hover:underline transition-colors">Buy Property</Link></li>
              <li><Link href="/sell" className="text-white hover:underline transition-colors">Sell Property</Link></li>
              <li><Link href="/rent" className="text-white hover:underline transition-colors">Rent</Link></li>
              <li><Link href="/valuation" className="text-white hover:underline transition-colors">Valuation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-3">✉️</span>
                <a href="mailto:info@monopolis.be" className="text-white hover:underline transition-colors">info@monopolis.be</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">📞</span>
                <a href="tel:+3221234567" className="text-white hover:underline transition-colors">+32 2 123 45 67</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">📍</span>
                <span className="text-white">Avenue Louise 500, 1050 Brussels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            <span className="text-white">© {currentYear} Monopolis. All rights reserved.</span>
          </p>
          <div className="flex space-x-5">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors text-lg"
              aria-label="Facebook"
            >
              <span className="text-white">f</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors text-lg"
              aria-label="Instagram"
            >
              <span className="text-white">ig</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors text-lg"
              aria-label="LinkedIn"
            >
              <span className="text-white">in</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;