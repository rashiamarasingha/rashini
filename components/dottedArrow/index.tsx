// "use client"

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ProfileWithGSAPSpiralArrows = () => {
//   const containerRef = useRef(null);
//   const arrowRefs = useRef([]);
//   const textRefs = useRef([]);
  
//   // Reset reference arrays
//   arrowRefs.current = [];
//   textRefs.current = [];
  
//   // Add arrow to the refs array
//   const addToArrowRefs = (el) => {
//     if (el && !arrowRefs.current.includes(el)) {
//       arrowRefs.current.push(el);
//     }
//   };
  
//   // Add text to the refs array
//   const addToTextRefs = (el) => {
//     if (el && !textRefs.current.includes(el)) {
//       textRefs.current.push(el);
//     }
//   };

//   // Define each arrow with its spiral path and associated label text
//   const arrows = [
//     {
//       id: "ui-ux",
//       // More curved spiral path for UI/UX Designer (top left)
//       path: "M125 155 C140 155, 160 165, 175 170 S205 175, 220 180", 
//       text: "UI / UX Designer",
//       textPosition: { x: 85, y: 135 }
//     },
//     {
//       id: "graphic",
//       // More curved spiral path for Graphic Designer (top right)
//       path: "M615 235 C600 235, 580 240, 565 245 S545 250, 520 255", 
//       text: "Graphic Designer",
//       textPosition: { x: 620, y: 215 }
//     },
//     {
//       id: "illustrator",
//       // More curved spiral path for Illustrator Designer (middle left)
//       path: "M145 380 C160 380, 180 385, 195 390 S225 395, 240 400", 
//       text: "Illustrator Designer",
//       textPosition: { x: 95, y: 360 }
//     },
//     {
//       id: "explorer",
//       // More curved spiral path for Explorer (middle right)
//       path: "M590 475 C575 475, 555 480, 540 485 S520 490, 495 490", 
//       text: "Explorer",
//       textPosition: { x: 615, y: 455 }
//     },
//     {
//       id: "entertainer",
//       // More curved spiral path for Entertainer (bottom left)
//       path: "M165 585 C180 585, 200 590, 215 595 S245 600, 260 600", 
//       text: "Entertainer",
//       textPosition: { x: 95, y: 565 }
//     }
//   ];

//   useEffect(() => {
//     const arrowElements = arrowRefs.current;
//     const textElements = textRefs.current;
    
//     // Calculate the path length for each arrow
//     arrowElements.forEach(arrow => {
//       const length = arrow.getTotalLength();
//       // Set initial state - stroke dashed and hidden
//       gsap.set(arrow, { 
//         strokeDasharray: "3 3", // Dotted line
//         strokeDashoffset: length,
//         opacity: 0
//       });
//     });
    
//     // Set initial state for text - hidden
//     gsap.set(textElements, { opacity: 0 });
    
//     // Create a ScrollTrigger for each arrow and its text
//     arrowElements.forEach((arrow, index) => {
//       const length = arrow.getTotalLength();
//       const text = textElements[index];
      
//       // Create a timeline for this arrow and text
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%", // Start animation when the top of the container is 80% from the top of the viewport
//           end: "center center", // End animation when the center of the container hits the center of the viewport
//           scrub: 0.5, // Smooth scrubbing effect
//           markers: false // Set to true for debugging
//         }
//       });
      
//       // Animate the arrow drawing
//       tl.to(arrow, {
//         strokeDashoffset: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power1.inOut"
//       }, index * 0.1); // Stagger the animations
      
//       // Fade in the text slightly after the arrow starts drawing
//       tl.to(text, {
//         opacity: 1,
//         duration: 0.5,
//         ease: "power1.inOut"
//       }, index * 0.1 + 0.3);
//     });
    
//     return () => {
//       // Clean up ScrollTrigger instances when component unmounts
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full min-h-screen flex justify-center items-center py-16"
//     >
//       {/* Background circle */}
//       <div className="absolute w-full h-full max-w-4xl max-h-4xl rounded-full bg-blue-50 z-0"></div>
      
//       {/* Profile image */}
//       <div className="relative z-10">
//         <img 
//           src="/rashini.png" 
//           alt="Profile" 
//           className="w-64 md:w-96 h-auto"
//         />
//       </div>
      
//       {/* SVG container for the animated arrows */}
//       <div className="absolute inset-0 w-full h-full">
//         <svg 
//           className="w-full h-full pointer-events-none"
//           viewBox="0 0 800 800" 
//           preserveAspectRatio="xMidYMid meet"
//         >
//           {/* Define arrowhead marker */}
//           <defs>
//             <marker
//               id="arrowhead"
//               markerWidth="10"
//               markerHeight="6"
//               refX="6"
//               refY="3"
//               orient="auto"
//               markerUnits="strokeWidth"
//             >
//               <polygon points="0 0, 6 3, 0 6" fill="#000" />
//             </marker>
//           </defs>
          
//           {/* Create each spiral arrow with its text */}
//           {arrows.map((arrow, index) => (
//             <g key={arrow.id}>
//               {/* The spiral dotted arrow */}
//               <path
//                 ref={addToArrowRefs}
//                 d={arrow.path}
//                 stroke="#000"
//                 strokeWidth="1.5"
//                 fill="transparent"
//                 markerEnd="url(#arrowhead)"
//               />
              
//               {/* The text label */}
//               <foreignObject
//                 ref={addToTextRefs}
//                 x={arrow.textPosition.x}
//                 y={arrow.textPosition.y}
//                 width="150"
//                 height="50"
//               >
//                 <div className="text-xl font-bold font-['Comic_Sans_MS']">{arrow.text}</div>
//               </foreignObject>
//             </g>
//           ))}
//         </svg>
//       </div>
//     </div>
//   );
// };

// // Example usage in a page component
// const AnimatedProfilePage = () => {
//   return (
//     <main className="w-full min-h-screen bg-white">
//       {/* Adding extra content before to ensure there's scrolling room */}
//       <div className="h-96"></div>
      
//       <div className="py-24"> {/* Container with padding to enable scrolling */}
//         <h1 className="text-center text-3xl font-bold mb-8">My Skills</h1>
//         <ProfileWithGSAPSpiralArrows />
//       </div>
      
//       {/* Extra content after to make the page scrollable */}
//       <div className="h-screen bg-gray-100 p-8">
//         <h2 className="text-2xl font-bold mb-4">More About Me</h2>
//         <p className="mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
//         </p>
//         {/* More content here */}
//       </div>
//     </main>
//   );
// };

// export default AnimatedProfilePage;