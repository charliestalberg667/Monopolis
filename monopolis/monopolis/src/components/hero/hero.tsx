'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  { id: 'properties', label: 'Properties', href: '/properties' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'services', label: 'Our Services', href: '/services' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = (
    <div className="flex items-center space-x-1">
      {menuItems.map((item) => (
        <Link 
          key={item.id}
          href={item.href}
          className="px-3 py-2 text-sm font-medium hover:underline transition-all duration-200"
          style={{ color: 'black' }}
        >
          {item.label}
        </Link>
      ))}
      <Link 
        href="/login"
        className="ml-2 py-2 px-3 flex items-center justify-center bg-black text-sm font-medium hover:bg-gray-800 transition-colors duration-200 no-underline"
        style={{ color: 'white' }}
      >
        Log in
      </Link>
    </div>
  );
  
  // Mobile menu button
  const mobileMenuButton = (
    <button 
      onClick={toggleMenu}
      className="md:hidden group relative z-50 flex items-center justify-center p-2"
      aria-expanded={isMenuOpen}
      aria-label="Toggle menu"
    >
      <div className={`flex flex-col items-center justify-center space-y-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`}></span>
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:w-5'}`}></span>
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`}></span>
      </div>
    </button>
  );
  return (
    <div className="relative w-full bg-[#f5f5f5] px-6 py-4  md:min-h-screen">
      {/* Header with Logo */}
      <header className="relative z-10">
        <div className="">
          <div className="flex justify-between items-end h-16">
            <div className="flex items-end">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-black.svg"
                  alt="Monopolis Logo"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-auto"
                />
              </div>
              <div className='flex flex-col gap-1 ml-2'>
                <div className="text-2xl font-bold leading-none">Monopolis</div>
                <div className="text-xs text-gray-600 leading-none">sales, rentals, domiciliation</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks}
            </nav>
            
            {/* Mobile menu button */}
            {mobileMenuButton}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      >
        <div 
          className={`absolute top-0 right-0 h-full bg-white shadow-2xl w-72 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo-black.svg"
                    alt="Monopolis Logo"
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <span className="ml-2 text-xl font-bold">Monopolis</span>
              </div>
              <button 
                onClick={closeMenu}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium hover:bg-black/5 rounded-lg transition-colors duration-200"
                      style={{ color: 'black' }}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/login"
                    className="block px-4 py-3 text-base font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-200 text-center no-underline"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="pt-6 mt-auto border-t border-gray-100">
              <p className="px-4 text-sm text-gray-500">Monopolis © {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full h-[50vh] md:h-[calc(100vh-120px)] mt-8 mb-16 md:mb-24 pl-4">
        <Image
          src="/header/bgg.jpg"
          alt="Luxury house with pool"
          layout="fill"
          quality={100}
          objectFit="cover"
          priority
        />
        {/* Top left title */}
        <div className="absolute top-8 left-8 max-w-md md:max-w-xl">
          <h2 className="text-lg md:text-lg font-black text-white leading-tight">
            EXCEPTIONAL PROPERTIES IN THE MOST SOUGHT-AFTER LOCATIONS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;