
"use client";

import dynamic from 'next/dynamic';

const PageRevealer = dynamic(() => import('./PageRevealer'), { 
  ssr: false 
});

export default function PageRevealerWrapper() {
  return <PageRevealer />;
}
