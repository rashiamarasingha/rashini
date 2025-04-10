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

  // Add a global style to ensure video elements have no border
  useEffect(() => {
    // Create a style element to add global styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      video::-webkit-media-controls {
        display: none !important;
      }
      video {
        border: 0 !important;
        outline: 0 !important;
        box-shadow: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
      }
    `;
    // Add style to head
    document.head.appendChild(styleElement);

    // Clean up style when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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
        <div className="video-wrapper" style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          border: 'none',
          outline: 'none',
        }}>
          <video
            src="/Loader.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none select-none"
            style={{
              border: '0',
              outline: 'none',
              boxShadow: 'none',
              background: 'transparent',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              appearance: 'none',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              clipPath: 'inset(0)',
              backgroundClip: 'content-box',
              display: 'block', /* Important for removing bottom spacing */
              WebkitMaskImage: '-webkit-radial-gradient(white, black)', /* Fix for Safari */
            }}
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/Loader.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Loader;