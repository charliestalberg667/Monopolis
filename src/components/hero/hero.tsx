
'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { FiArrowRight, FiPlay, FiMapPin, FiStar } from 'react-icons/fi';

// Modern typewriter effect with cursor
const TypewriterText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={className}>
      {displayText}
      <span className={`inline-block w-0.5 h-8 bg-green-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
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
        duration: 1,
        staggerChildren: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-50/40 to-blue-50/30 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-gray-200/[0.05] bg-[size:50px_50px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left Content */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-10"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 bg-green-100 border-2 border-green-200 rounded-full px-6 py-3">
                <FiStar className="w-5 h-5 text-green-600" />
                <span className="text-green-700 text-lg font-semibold">Premium Real Estate</span>
              </div>
            </motion.div>

            {/* Main Heading - Larger and more readable */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight">
                Find Your
                <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Dream Home
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Text - Larger and darker */}
            <motion.div variants={itemVariants}>
              <TypewriterText 
                text="Discover exceptional properties in the most sought-after locations worldwide"
                className="text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed"
              />
            </motion.div>

            {/* Stats - Larger and more prominent */}
            <motion.div variants={itemVariants} className="flex items-center space-x-12 pt-6">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">500+</div>
                <div className="text-lg text-gray-600 font-medium">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">98%</div>
                <div className="text-lg text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">15+</div>
                <div className="text-lg text-gray-600 font-medium">Years Experience</div>
              </div>
            </motion.div>

            {/* CTA Buttons - Larger and more accessible */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-8">
              <button className="group bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-200 flex items-center justify-center space-x-3 min-h-[60px]">
                <span>Explore Properties</span>
                <FiArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group bg-white hover:bg-gray-50 text-gray-900 border-3 border-gray-300 hover:border-gray-400 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 min-h-[60px] shadow-lg">
                <FiPlay className="w-6 h-6" />
                <span>Watch Video</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Property Showcase */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Main Image */}
            <motion.div 
              variants={itemVariants}
              className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="/header/bgg.jpg"
                alt="Luxury property showcase"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Property Info Card - More prominent */}
              <motion.div 
                variants={floatingVariants}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg border-2 border-white/50 rounded-3xl p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-gray-900">
                    <FiMapPin className="w-5 h-5" />
                    <span className="text-lg font-semibold">Beverly Hills, CA</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600">$2.8M</div>
                </div>
                <div className="grid grid-cols-3 gap-6 text-gray-700 text-lg font-medium">
                  <div>4 Beds</div>
                  <div>3 Baths</div>
                  <div>3,200 sqft</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Elements - More visible */}
            <motion.div 
              variants={floatingVariants}
              className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-lg border-2 border-green-200 rounded-3xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                  <FiStar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">Premium</div>
                  <div className="text-gray-600 text-base">Verified</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={floatingVariants}
              className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-lg border-2 border-blue-200 rounded-3xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 text-base font-medium">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - More visible */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-3 text-gray-600">
          <span className="text-lg font-medium">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-12 border-3 border-gray-400 rounded-full flex justify-center bg-white/80"
          >
            <div className="w-2 h-4 bg-gray-600 rounded-full mt-3" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
