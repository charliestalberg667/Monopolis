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