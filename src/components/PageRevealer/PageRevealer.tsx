"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageRevealer() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger on initial mount
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setIsVisible(false), 1000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Retrigger on every route change
  useEffect(() => {
    if (!pathname) return;
    setIsVisible(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setIsVisible(false), 1000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="revealer"
          className="fixed inset-0 z-40 bg-white flex items-center justify-center pointer-events-none"
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
              src="/logo-green.png"
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