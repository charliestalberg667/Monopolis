'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

// Simple typewriter effect
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

  return (
    <div className={className}>
      {displayText}
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
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-light text-black leading-[0.9] tracking-tight">
                Find Your
                <span className="block font-medium text-[#01863b]">
                  Dream Home
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <TypewriterText 
                text="Premium properties in exceptional locations"
                className="text-xl text-gray-600 font-light"
              />
            </motion.div>

            {/* Simple Stats */}
            <motion.div variants={itemVariants} className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-2xl font-medium text-black">500+</div>
                <div className="text-sm text-gray-500">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-medium text-black">15+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-6">
              <button className="bg-[#01863b] hover:bg-[#016030] text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <span>Explore</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-black px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 flex items-center space-x-2">
                <FiPlay className="w-5 h-5" />
                <span>Watch</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Main Image */}
            <motion.div 
              variants={itemVariants}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/header/bgg.jpg"
                alt="Property showcase"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Simple overlay info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Beverly Hills, CA</div>
                    <div className="text-sm text-gray-800">4 bed · 3 bath · 3,200 sqft</div>
                  </div>
                  <div className="text-xl font-medium text-[#01863b]">$2.8M</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-gray-300 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;