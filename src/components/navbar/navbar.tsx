'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const menuItems = [
    { id: 'properties', label: 'Properties', href: '/properties' },
    { id: 'market-report', label: 'Market Report', href: '/market-report' },
    { id: 'listings', label: 'Listings', href: '/listings' },
    { id: 'services', label: 'Our Services', href: '/services' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'testimonials', label: 'Testimonials', href: '/testimonials' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const logoContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const logoItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier equivalent of easeOut
        delay: 0.2 + (i * 0.1),
      } as const,
    }),
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Invisible div to create space for fixed navbar */}
      <div className="h-8 w-full" aria-hidden="true" />
      
      <motion.header 
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-xl"
        variants={logoContainerVariants}
        initial="hidden"
        animate={controls}
      >
      <div className=" px-2 sm:px-2 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <motion.div 
              className="relative w-12 h-12"
              variants={logoItemVariants}
              custom={0}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/logo-black.svg"
                  alt="Monopolis Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
            <motion.div 
              className='flex flex-col gap-1 ml-2'
              variants={logoItemVariants}
              custom={1}
            >
              <div className="text-2xl font-bold leading-none text-gray-900">Monopolis</div>
              <motion.div 
                className="text-xs text-gray-700 leading-none"
                variants={logoItemVariants}
                custom={2}
              >
                sales, rentals, domiciliation
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link 
                key={item.id}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
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
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
    </>
  );
};

export default Navbar;