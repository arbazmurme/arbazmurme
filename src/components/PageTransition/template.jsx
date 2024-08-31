'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { animatePageIn, animatePageOut } from './animations';

export default function Template({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // Use the pathname hook
  const [previousPathname, setPreviousPathname] = useState(pathname);

  useEffect(() => {
    // Trigger the page in animation on mount
    animatePageIn();

    // Check if pathname has changed and trigger the page out animation
    if (pathname !== previousPathname) {
      animatePageOut(pathname, router);
      setPreviousPathname(pathname);
    }
  }, [pathname, previousPathname, router]);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-[#f59e0b] fixed top-0 left-0 w-1/4 z-50"
      />
      <div
        id="banner-2"
        className="min-h-screen  bg-[#f59e0b] fixed top-0 left-1/4 w-1/4 z-50"
      />
      <div
        id="banner-3"
        className="min-h-screen  bg-[#f59e0b] fixed top-0 left-2/4 w-1/4 z-50" 
      />
      <div
        id="banner-4"
        className="min-h-screen  bg-[#f59e0b] fixed top-0 left-3/4 w-1/4 z-50"
      />
      <div className="relative z-10"> {/* Ensure content is below banners */}
        {children}
      </div>
    </div>
  );
}
