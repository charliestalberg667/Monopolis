import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaBuilding, FaHome, FaHandshake, FaChartLine } from 'react-icons/fa';

type FooterLink = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks: FooterLink[] = [
    { title: 'About Us', href: '/about' },
    { title: 'Our Team', href: '/team' },
    { title: 'Careers', href: '/careers' },
    { title: 'News & Blog', href: '/blog' },
    { title: 'Testimonials', href: '/testimonials' },
  ];

  const serviceLinks: FooterLink[] = [
    { title: 'Buy Property', href: '/properties', icon: <FaHome className="w-4 h-4 mr-2" /> },
    { title: 'Sell Property', href: '/sell', icon: <FaHandshake className="w-4 h-4 mr-2" /> },
    { title: 'Rent', href: '/rent', icon: <FaBuilding className="w-4 h-4 mr-2" /> },
    { title: 'Market Analysis', href: '/market-report', icon: <FaChartLine className="w-4 h-4 mr-2" /> },
  ];

  const contactInfo = {
    email: 'info@monopolis.be',
    phone: '+32 2 123 45 67',
    address: 'Avenue Louise 500, 1050 Brussels, Belgium',
  };

  const socialLinks = [
    { icon: <FiFacebook className="w-5 h-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FiTwitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiInstagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiYoutube className="w-5 h-5" />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerAnimation}
        >
          {/* Logo and Description */}
          <motion.div className="space-y-5" variants={itemAnimation}>
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-12">
                <Image 
                  src="/logo-white.svg" 
                  alt="Monopolis Logo" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in finding the perfect property. We connect dreams with the perfect location.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                  custom={index}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 relative pb-2 inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={link.href} 
                  variants={itemVariants}
                  custom={index}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-start group"
                  >
                    <span className="w-1 h-1 mt-2.5 mr-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 relative pb-2 inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={link.href} 
                  variants={itemVariants}
                  custom={index}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 relative pb-2 inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="ml-3 text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                  className="ml-3 text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <address className="ml-3 not-italic text-gray-400">
                  {contactInfo.address}
                </address>
              </motion.li>
            </ul>
            
            {/* Newsletter Signup */}
            <motion.div 
              className="mt-8"
              variants={itemAnimation}
              className="mb-8"
            >
              <h5 className="text-white font-medium mb-3">Subscribe to our newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white placeholder-gray-400"
                />
                <button 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 rounded-r-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-label="Subscribe"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Monopolis Real Estate. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;