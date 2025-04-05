'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoaderProps {
  minimumLoaderTime?: number;
}

const Loader: React.FC<LoaderProps> = ({ minimumLoaderTime = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Handle the minimum time the loader should be shown
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoaderTime);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, [minimumLoaderTime]);

  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-center justify-center">
      {/* You can replace this with your own logo or custom loading animation */}
      <div className="mb-4 relative w-24 h-24">
        <Image 
          src="/Logo.svg" 
          alt="Rashini Kaveesha" 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>
      
      {/* Loading indicator */}
      {/* <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-black dark:bg-white animate-[loader_2s_ease-in-out_infinite]"></div>
      </div>
      
      <p className="mt-4 text-sm font-lufga text-black dark:text-white">Loading...</p> */}
    </div>
  );
};

export default Loader;