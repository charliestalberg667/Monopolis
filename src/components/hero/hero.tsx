
'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

// Refined typewriter effect with Apple-like pacing
const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50/50 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left Content */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-10"
          >
            {/* Main Heading - Apple-style typography */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl lg:text-8xl font-extralight text-black leading-[0.85] tracking-[-0.02em]">
                Find Your
                <span className="block font-light text-[#01863b] mt-2">
                  Perfect Home
                </span>
              </h1>
            </motion.div>

            {/* Subtitle - Refined and elegant */}
            <motion.div variants={itemVariants}>
              <TypewriterText 
                text="Exceptional properties. Extraordinary experiences."
                className="text-2xl text-gray-600 font-light leading-relaxed tracking-wide"
              />
            </motion.div>

            {/* Elegant stats with dividers */}
            <motion.div variants={itemVariants} className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-black tracking-tight">500+</div>
                <div className="text-sm text-gray-500 font-medium tracking-widest uppercase mt-1">Properties</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-light text-black tracking-tight">15</div>
                <div className="text-sm text-gray-500 font-medium tracking-widest uppercase mt-1">Years</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-light text-black tracking-tight">98%</div>
                <div className="text-sm text-gray-500 font-medium tracking-widest uppercase mt-1">Satisfied</div>
              </div>
            </motion.div>

            {/* Apple-style CTA buttons */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-12">
              <button className="group bg-[#01863b] hover:bg-[#016030] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 ease-out flex items-center space-x-3 shadow-lg hover:shadow-xl hover:shadow-[#01863b]/20 hover:-translate-y-0.5">
                <span>Explore Properties</span>
                <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group border border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 ease-out flex items-center space-x-3 backdrop-blur-sm">
                <FiPlay className="w-5 h-5" />
                <span>Watch Story</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Refined image presentation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Main Image with Apple-like border radius */}
            <motion.div 
              variants={itemVariants}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10"
            >
              <Image
                src="/header/bgg.jpg"
                alt="Luxury property showcase"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Elegant overlay card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-1">Beverly Hills, California</div>
                    <div className="text-base text-gray-800 font-light">4 bed • 3 bath • 3,200 sqft</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-[#01863b] tracking-tight">$2.8M</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Est. Value</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating accent element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#01863b] to-[#016030] rounded-full shadow-lg flex items-center justify-center"
            >
              <div className="text-white text-sm font-medium">New</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Apple-style scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-gray-300 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </motion.div>
        <div className="text-xs text-gray-400 text-center mt-3 tracking-widest uppercase">Scroll</div>
      </motion.div>
    </div>
  );
};

export default Hero;
