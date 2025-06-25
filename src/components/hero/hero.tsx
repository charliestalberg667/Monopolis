'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/header/bgg.jpg"
          alt="Luxury property background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Elegant overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-[-0.02em] drop-shadow-lg">
                Find Your
                <br />
                <span className="text-white">Perfect Home</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Exceptional properties in Belgium's most desirable locations
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-8">
              <button className="group inline-flex items-center bg-white/95 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ease-out shadow-xl hover:shadow-2xl hover:-translate-y-0.5 backdrop-blur-sm">
                <span>Explore Properties</span>
                <FiArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Simple Stats */}
            <motion.div variants={itemVariants} className="pt-16">
              <div className="flex items-center justify-center space-x-16 text-center">
                <div>
                  <div className="text-2xl font-light text-white drop-shadow-md">500+</div>
                  <div className="text-sm text-white/80 font-medium uppercase tracking-widest mt-1">Properties</div>
                </div>
                <div className="w-px h-8 bg-white/30" />
                <div>
                  <div className="text-2xl font-light text-white drop-shadow-md">15</div>
                  <div className="text-sm text-white/80 font-medium uppercase tracking-widest mt-1">Years</div>
                </div>
                <div className="w-px h-8 bg-white/30" />
                <div>
                  <div className="text-2xl font-light text-white drop-shadow-md">98%</div>
                  <div className="text-sm text-white/80 font-medium uppercase tracking-widest mt-1">Satisfied</div>
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
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;