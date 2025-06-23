'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

// Typewriter effect component
const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <div className={className}>{displayText}</div>;
};

const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative w-full bg-[#f5f5f5] px-6 pt-10 pb-10 md:h-screen overflow-visible">
      {/* Background Image */}
      <div className="relative w-full h-[70vh] md:h-[85vh] mb-8 mt-4 md:mb-12 py-6 px-6">
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
    </div>
  );
};

export default Hero;
