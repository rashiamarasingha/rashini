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
    <div
      className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center"
      style={{
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        background: 'transparent',
        padding: 0,
        margin: 0,
      }}
    >
      <div
        className="w-[300px] h-[300px] bg-transparent"
        style={{
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          background: 'transparent',
          overflow: 'hidden',
          padding: 0,
          margin: 0,
        }}
      >
        <video
          src="/Loader.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain pointer-events-none select-none border-none outline-none shadow-none"
          style={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            background: 'transparent',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            transform: 'translateZ(0)', // Force hardware acceleration to avoid artifacts
            WebkitTransform: 'translateZ(0)',
            clipPath: 'inset(0)', // Ensure no overflow bleed
            backgroundClip: 'content-box',
          }}
        >
          <source src="/Loader.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </div>
    </div>
  );
};

export default Loader;