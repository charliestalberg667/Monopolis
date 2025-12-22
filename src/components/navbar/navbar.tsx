'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageProvider/languageSwitcher';

const menuItemsConfig = [
  { id: 'properties', labelKey: 'navbar.properties', href: '/properties' },
  { id: 'about', labelKey: 'navbar.about', href: '/about' },
  { id: 'services', labelKey: 'navbar.services', href: '/services' },
  { id: 'contact', labelKey: 'navbar.contact', href: '/contact' },
];

const logoContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.1 },
  },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 + i * 0.1 },
  }),
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const mobileMenuItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
};

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = menuItemsConfig.map(item => ({
    ...item,
    label: t(item.labelKey)
  }));

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      className="relative z-[100000] w-full bg-white px-6 pt-2"
      variants={logoContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center logo-link" aria-label="Monopolis Home">

          <motion.div className="relative w-12 h-12" variants={logoItemVariants} custom={0}>
            <Image
              src="/logo-black.svg"
              alt="Monopolis Logo"
              width={48}
              height={48}
              priority
              className="h-full w-auto"
            />
          </motion.div>
          <motion.div className="flex flex-col gap-1 ml-2" variants={logoItemVariants} custom={1}>
            <div className="text-xl sm:text-4xl font-bold leading-none font-osp-din">Monopolis</div>
          </motion.div>
        </Link>

        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden min-[1000px]:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="nav-link px-8 text-sm font-medium"
                style={{ color: 'black' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="min-[1000px]:hidden group relative z-50 flex items-center justify-center p-2 -mr-2"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[90000] bg-white/95 backdrop-blur-sm min-[1000px]:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col items-center gap-8 pt-24 px-6 text-lg font-medium">
              {menuItems.map((item) => (
                <motion.div key={item.id} variants={mobileMenuItemVariants}>
                  <Link
                    href={item.href}
                    className="nav-link px-4 py-2 block text-center"
                    onClick={closeMenu}
                    style={{ color: 'black' }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={mobileMenuItemVariants} className="mt-4">
                <LanguageSwitcher />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../language-provider/LanguageProvider';
// import LanguageSwitcher from '../language-provider/LanguageSwitcher';
// import { CalendarClock, Menu, X } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [menu, setMenu] = useState<string | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { t } = useLanguage();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const NavLinks: React.FC = () => (
//     <>
//       <Link to="/" onClick={closeMobileMenu}>
//         <li
//           onClick={() => setMenu("Home")}
//           className={`flex flex-col items-center relative py-2 cursor-pointer ${menu === "Home" ? 'after:w-full' : ''} after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
//         >
//           {t('navbar.home')}
//         </li>
//       </Link>

//       <Link to="/luxe" onClick={closeMobileMenu}>
//         <li
//           onClick={() => setMenu("Luxe")}
//           className={`flex flex-col items-center relative py-2 cursor-pointer ${menu === "Luxe" ? 'after:w-full' : ''} after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
//         >
//           {t('navbar.luxe')}
//         </li>
//       </Link>

//       <Link to="/rent" onClick={closeMobileMenu}>
//         <li
//           onClick={() => setMenu("rent")}
//           className={`flex flex-col items-center relative py-2 cursor-pointer ${menu === "rent" ? 'after:w-full' : ''} after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
//         >
//           {t('navbar.rent')}
//         </li>
//       </Link>

//       <Link to="/buy" onClick={closeMobileMenu}>
//         <li
//           onClick={() => setMenu("buy")}
//           className={`flex flex-col items-center relative py-2 cursor-pointer ${menu === "buy" ? 'after:w-full' : ''} after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
//         >
//           {t('navbar.buy')}
//         </li>
//       </Link>
//     </>
//   );

//   return (
//     <nav className="fixed top-0 left-0 w-full h-16 z-[100] flex justify-between items-center bg-[rgba(242,242,242,0.1)] backdrop-blur-xl border border-white/20 px-8">
//       <Link to="/" className="font-helvetica text-lg">
//         Monaco.Immo
//       </Link>

//       <ul className="hidden md:flex gap-8">
//         <NavLinks />
//       </ul>

//       <div className="hidden md:flex items-center gap-4">
//         <Link to="/login" onClick={() => setMenu("Login")}>
//           <button className="bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black transition">
//             {t('navbar.login')}
//           </button>
//         </Link>
//         <Link to="/visits" className="flex items-center gap-2" onClick={() => setMenu("Visits")}>
//           <CalendarClock size={15} />
//           <p>{t('navbar.visits')}</p>
//         </Link>
//         <LanguageSwitcher />
//       </div>

//       <div className="md:hidden cursor-pointer p-2" onClick={toggleMobileMenu}>
//         <Menu size={24} />
//       </div>

//       <div className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg z-[1000] pt-16 px-4 transform transition-transform duration-200 ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
//         <div className="absolute top-4 right-8 cursor-pointer p-2" onClick={closeMobileMenu}>
//           <X size={24} />
//         </div>
//         <ul className="flex flex-col items-center gap-8">
//           <NavLinks />
//         </ul>
//         <div className="flex flex-col items-center gap-4 mt-8">
//           <Link to="/login" onClick={closeMobileMenu}>
//             <button className="bg-black text-white px-4 py-2 border border-black hover:bg-white hover:text-black transition">
//               {t('navbar.login')}
//             </button>
//           </Link>
//           <Link to="/visits" className="flex items-center gap-2" onClick={closeMobileMenu}>
//             <CalendarClock size={15} />
//             <p>{t('navbar.visits')}</p>
//           </Link>
//           <LanguageSwitcher />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
