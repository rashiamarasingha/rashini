import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MarqueeCarousel = () => {
  const items = [
    "UX Design", 
    "App Design", 
    "Dashboard", 
    "Wireframe", 
    "User Research"
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1500] // Adjust this value based on the total width of your content
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      >
        {/* Duplicate the items to create a seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center ml-4 font-normal ">
            <span className="text-3xl md:text-[48px] font-semibold font-lufga ">{item}</span>
            <span className="text-blue-500 mx-3 text-3xl w-[34px] h-[34px] ml-6 ">
              <Image src="/Star.svg" alt="Star" width={34} height={34} className='w-[34px] h-[34px]' />
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeCarousel;