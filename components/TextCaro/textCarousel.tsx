import React from 'react';
import { motion } from 'framer-motion';

const MarqueeCarousel = () => {
  const items = [
    "UX Design", 
    "App Design", 
    "Dashboard", 
    "Wireframe", 
    "User Research"
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1500] // Adjust this value based on the total width of your content
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
      >
        {/* Duplicate the items to create a seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-3xl md:text-4xl font-bold">{item}</span>
            <span className="text-blue-500 mx-3 text-3xl">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeCarousel;