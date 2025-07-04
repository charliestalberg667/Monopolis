"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageRevealer() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    // Set mounted state to true once component is mounted on client
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Start exit animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [isMounted]);

  // Don't render anything until component is mounted on client
  if (!isMounted || !showComponent) {
    return null;
  }

  return (
    <AnimatePresence onExitComplete={() => {
      // Hide the component completely after exit animation
      setShowComponent(false);
    }}>
      {isVisible && (
        <motion.div
          key="revealer"
          className="fixed inset-0 z-[100000] bg-white flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.div
            className="absolute center w-40 h-40"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Image
              src="/logo-black.svg"
              alt="Monopolis Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}