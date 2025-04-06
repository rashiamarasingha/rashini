'use client';

import React, { useEffect, useState } from 'react';

interface LoaderProps {
  minimumLoaderTime?: number;
}

const Loader: React.FC<LoaderProps> = ({ minimumLoaderTime = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoaderTime);

    return () => clearTimeout(timer);
  }, [minimumLoaderTime]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center">
      <div className="w-[300px] h-[300px] overflow-hidden bg-transparent">
        <img
          src="/Loader.gif"  // Path to your animated GIF
          alt="Loading..."
          className="w-full h-full object-contain pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default Loader;
