'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView, Variants, AnimatePresence } from 'framer-motion';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

// ✅ 1) Add your menuItems here as before:
const menuItems = [
  { id: 'properties', label: 'Properties', href: '/properties' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'services', label: 'Our Services', href: '/services' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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
        ease: "easeOut",
        delay: 0.2 + (i * 0.1),
      },
    }),
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mobile menu toggle handled by isMenuOpen state

  return (
    <div className="relative w-full bg-[#f5f5f5] px-6 pt-2 pb-10 md:h-[100vh] overflow-visible z-10" style={{ position: 'relative', zIndex: 50 }}>

      {/* Header */}
      <motion.header 
        className="relative z-50"
        variants={logoContainerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 50 }}
      >
        <div>
          <div className="flex justify-between items-end h-16">
            {/* Logo */}
            <div className="flex items-end">
              <motion.div 
                className="relative w-12 h-12"
                variants={logoItemVariants}
                custom={0}
              >
                <Image
                  src="/logo-black.svg"
                  alt="Monopolis Logo"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-auto"
                />
              </motion.div>
              <motion.div 
                className='flex flex-col gap-1 ml-2'
                variants={logoItemVariants}
                custom={1}
              >
                <div className="text-2xl font-bold leading-none">Monopolis</div>
                <motion.div 
                  className="text-xs text-gray-600 leading-none"
                  variants={logoItemVariants}
                  custom={2}
                >
                  sales, rentals, domiciliation
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link 
                  key={item.id}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium hover:underline transition-colors duration-200"
                  style={{ color: 'black' }}
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
      </motion.header>

      {/* Background Image */}
      <div className="relative w-full h-[50vh] md:h-[75vh] mb-8 md:mb-12 py-6 px-6">
        <Image
          src="/header/bgg.jpg"
          alt="Luxury house with pool"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="rounded-sm"
          priority
        />
        <div className="relative max-w-md md:max-w-xl">
          <TypewriterText 
            text="EXCEPTIONAL PROPERTIES IN THE MOST SOUGHT-AFTER LOCATIONS"
            className="pt-6 text-lg md:text-lg font-black text-white leading-tight"
          />
        </div>
      </div>

      {/* Filters Section — LEFT ALIGNED */}
      <div className="w-full">
        <Filters />
      </div>
    </div>
  );
};

// Types
type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
};

// Custom Dropdown Component
const Dropdown: React.FC<DropdownProps> = ({ label, value, options, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt: Option) => opt.value === value) || { label };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-sm min-w-32 hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{selectedOption.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute z-[99999] w-full mt-1 bg-white border border-gray-200 rounded-sm shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="py-1">
              {options.map((option: Option, index) => (
                <motion.button
                  key={option.value}
                  className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                    value === option.value ? 'bg-gray-100 font-medium' : ''
                  }`}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Custom styled Material-UI Slider
const CustomSlider = styled(Slider)({
  color: '#01863b',
  height: 4,
  padding: '15px 0',
  '& .MuiSlider-rail': {
    opacity: 0.3,
    backgroundColor: '#01863b',
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#01863b',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid #01863b',
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: '0 0 0 8px rgba(0, 159, 50, 0.1)',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -24,
    backgroundColor: 'transparent',
    color: '#01863b',
    '&:before': {
      display: 'none',
    },
  },
});

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  step?: number;
  formatValue?: (value: number) => string;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  value: [minVal, maxVal],
  onChange,
  step = 2000000,
  formatValue = (val) => val.toLocaleString()
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    const [newMin, newMax] = newValue as [number, number];
    onChange([newMin, newMax]);
  };

  return (
    <div className="w-full flex items-center gap-4">
      <div className="text-sm font-medium whitespace-nowrap w-24 text-right">
        {formatValue(minVal)}
      </div>
      <div className="flex-1">
        <CustomSlider
          value={[minVal, maxVal]}
          onChange={handleChange}
          valueLabelDisplay="off"
          aria-labelledby="range-slider"
          min={min}
          max={max}
          step={step}
        />
      </div>
      <div className="text-sm font-medium whitespace-nowrap w-24">
        {formatValue(maxVal)}
      </div>
    </div>
  );
};

const Filters: React.FC = () => {
  const [filters, setFilters] = useState({
    type: '',
    bedrooms: '',
    location: '',
  });
  
  const [priceRange, setPriceRange] = useState<[number, number]>([100000, 1000000]);
  const minPrice = 0;
  const maxPrice = 2000000;
  const step = 1000;

  const propertyTypes = [
    { value: '', label: 'Type' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'townhouse', label: 'Townhouse' },
  ];

  const bedroomOptions = [
    { value: '', label: 'Bedrooms' },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
  ];

  const locations = [
    { value: '', label: 'Location' },
    { value: 'Brussels', label: 'Brussels' },
    { value: 'Flanders', label: 'Flanders' },
    { value: 'Wallonia', label: 'Wallonia' },
  ];

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  return (
    <div className="w-full space-y-4">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Property Filters Bubble */}
        <div className="w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center border border-[#01863b] rounded-2xl md:rounded-full p-2 md:px-4 bg-white min-h-20">
            <div className="flex-1 flex flex-col md:flex-row items-stretch md:items-center">
              <Dropdown
                label="Type"
                value={filters.type}
                options={propertyTypes}
                onChange={(value) => handleFilterChange('type', value)}
                className="w-full md:w-40"
              />
              <div className="hidden md:flex items-center">
                <div className="h-6 w-px bg-gray-300 mx-2"></div>
              </div>
              <div className="md:hidden w-full h-px bg-gray-200 my-2"></div>
              <Dropdown
                label="Bedrooms"
                value={filters.bedrooms}
                options={bedroomOptions}
                onChange={(value) => handleFilterChange('bedrooms', value)}
                className="w-full md:w-32"
              />
              <div className="hidden md:flex items-center">
                <div className="h-6 w-px bg-gray-300 mx-2"></div>
              </div>
              <div className="md:hidden w-full h-px bg-gray-200 my-2"></div>
              <Dropdown
                label="Location"
                value={filters.location}
                options={locations}
                onChange={(value) => handleFilterChange('location', value)}
                className="w-full md:w-40"
              />
            </div>
          </div>
        </div>

        {/* Price Range Bubble */}
        <div className="w-full md:w-auto">
          <div className="flex items-center border border-[#01863b] rounded-2xl md:rounded-full p-2 md:px-6 bg-white min-h-20">
            <div className="w-full min-w-[300px] md:min-w-[350px]">
              <PriceRangeSlider
                min={minPrice}
                max={maxPrice}
                step={step}
                value={priceRange}
                onChange={setPriceRange}
                formatValue={(val) => `${val.toLocaleString()} €`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Typewriter effect stays the same:
const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + Math.random() * 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <h2 className={className}>{displayText}</h2>;
};

export default Hero;