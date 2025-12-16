'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full bg-[#ffffff] px-6 pt-2 pb-10 md:h-screen overflow-visible z-10">

      {/* Background Image */}
      <div className="relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] mb-0 mt-0 md:mb-0 py-6 px-6">
        <Image
          src="/images/bg--.jpg"
          alt="Luxury house with pool"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="rounded-sm"
          priority
        />
        {/* Black overlay with 40% opacity */}
        <div className="absolute inset-0 bg-black opacity-25 rounded-sm z-10" />
        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end z-20 px-6 pt-[133px] pb-[133px] gap-[106px]">
          <TypewriterText 
            text={t('hero.typewriter')}
            className="dm-serif-text text-2xl md:text-4xl lg:text-5xl font-normal text-white leading-tight text-center mb-20 max-w-[900px]"
          />
          <button className="px-[30px] py-2 rounded-lg bg-gray-500/30 backdrop-blur-sm text-white text-sm font-medium hover:bg-gray-500/40 transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)' }}>
            {t('hero.discoverMore')}
          </button>
        </div>
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
  color: '#048542',
  height: 4,
  padding: '15px 0',
  '& .MuiSlider-rail': {
    opacity: 0.3,
    backgroundColor: '#048542',
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#048542',
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid #048542',
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
    color: '#048542',
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

export const Filters: React.FC = () => {
  const { t } = useTranslation();
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
    { value: '', label: t('filters.type') },
    { value: 'apartment', label: t('filters.apartment') },
    { value: 'villa', label: t('filters.villa') },
    { value: 'townhouse', label: t('filters.townhouse') },
  ];

  const bedroomOptions = [
    { value: '', label: t('filters.bedrooms') },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
  ];

  const locations = [
    { value: '', label: t('filters.location') },
    { value: 'Brussels', label: t('filters.brussels') },
    { value: 'Flanders', label: t('filters.flanders') },
    { value: 'Wallonia', label: t('filters.wallonia') },
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
          <div className="flex flex-col md:flex-row items-stretch md:items-center border border-[#048542] rounded-2xl md:rounded-full p-2 md:px-4 bg-white min-h-20">
            <div className="flex-1 flex flex-col md:flex-row items-stretch md:items-center">
              <Dropdown
                label={t('filters.type')}
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
                label={t('filters.bedrooms')}
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
                label={t('filters.location')}
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
          <div className="flex items-center border border-[#048542] rounded-2xl md:rounded-full p-2 md:px-6 bg-white min-h-20">
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

const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

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
