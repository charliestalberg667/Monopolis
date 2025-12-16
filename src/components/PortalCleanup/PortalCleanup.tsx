'use client';

import { useEffect } from 'react';

export default function PortalCleanup() {
  useEffect(() => {
    const cleanupPortals = () => {
      // Find all nextjs-portal elements
      const portals = document.querySelectorAll('nextjs-portal');
      
      portals.forEach((portal) => {
        const element = portal as HTMLElement;
        // Check if portal is empty or has zero dimensions
        const hasNoChildren = element.children.length === 0;
        const hasZeroWidth = element.offsetWidth === 0;
        const hasZeroHeight = element.offsetHeight === 0;
        const isHidden = window.getComputedStyle(element).display === 'none';
        
        // Remove if empty and has zero dimensions
        if (hasNoChildren && hasZeroWidth && hasZeroHeight) {
          element.remove();
        } else if (hasNoChildren && isHidden) {
          element.remove();
        }
      });
    };

    // Run cleanup on mount
    cleanupPortals();

    // Set up observer to watch for new portals
    const observer = new MutationObserver(cleanupPortals);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup interval as backup
    const interval = setInterval(cleanupPortals, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}
