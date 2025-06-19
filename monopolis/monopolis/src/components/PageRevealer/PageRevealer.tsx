"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageRevealer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start exit animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={() => {
      // Remove the entire component from the DOM after exit animation
      const revealer = document.querySelector('.page-revealer');
      if (revealer) revealer.remove();
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