"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function ServicesSection() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const sectionRef = useRef(null);
  
  // Update scroll direction when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  // Dynamic item variants based on scroll direction
  const itemVariants = {
    hidden: { 
      y: scrollDirection === "down" ? 80 : -80, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const serviceCards = [
    {
      icon: (
        <Image
          src="/Services1.png"
          width={40}
          height={40}
          alt="UI/UX Design"
        />
      ),
      title: "UI / UX Design",
      description: "Crafting seamless and intuitive user experiences.",
      items: [
        "User Research & Analysis",
        "Wire Framing & Prototyping",
        "User Interface (UI) Design",
        "User Experience (UX) Testing",
        "Design Systems & Components",
      ],
    },
    {
      icon: (
        <Image
          src="/Services2.png"
          width={40}
          height={40}
          alt="Creative Design"
        />
      ),
      title: "Creative Design",
      description:
        "Designing visually compelling and impactful creative solutions.",
      items: [
        "Visual Storytelling & Branding",
        "Illustration & Digital Art",
        "Typography & Layout Design",
        "Motion Graphics & Animation",
      ],
    },
    {
      icon: (
        <Image src="/Services3.png" width={40} height={40} alt="Corporate Branding" />
      ),
      title: "Corporate Branding",
      description: "Creating memorable brand identities that stand out.",
      items: [
        "Logo & Identity Design",
        "Brand Guidelines & Strategy",
        "Visual Storytelling & Art Direction",
      ],
    },
    {
      icon: (
        <Image
          src="/Services4.png"
          width={40}
          height={40}
          alt="Social Media"
        />
      ),
      title: "Social Media Marketing",
      description: "Transforming ideas into seamless experiences.",
      items: [
        "Social Media Post Design",
        "Banner Design",
        "Flyers & Posters Design",
        "Brand Identity Graphics",
      ],
    },
  ];

  return (
    <section 
      className="bg-white py-16 px-4 md:px-6" 
      id="services"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: scrollDirection === "down" ? -20 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              variant="outline"
              className="rounded-full font-semibold font-urbanist py-6 px-12 border-[#171717] text-[#171717] text-[22px] hover:bg-transparent hover:border-[#171717] hover:text-[#171717] hover:shadow-none"
            >
              Services
            </Button>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-[34px] lg:text-[40px] font-inter font-medium text-[#1C1C57] mb-3 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Take a look at the variety of services I offer.
          </motion.h2>
        </motion.div>

        <motion.div
          key={scrollDirection} // Force re-render when direction changes
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6"
        >
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-lg shadow-sm border border-[#007BFF] hover:bg-[#eef8ff] p-6 flex flex-col gap-4"
            >
              <div className="w-[60px] h-[60px] rounded-[8px] p-2 drop-shadow-lg">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1.4, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  {card.icon}
                </motion.div>
              </div>

              <motion.h3
                className="font-medium font-inter text-[24px] text-slate-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {card.title}
              </motion.h3>

              <motion.p
                className="text-[16px] font-inter font-normal text-[#3E3E70]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {card.description}
              </motion.p>

              <ul className="mt-2 space-y-1">
                {card.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ 
                      opacity: 0, 
                      x: scrollDirection === "down" ? -10 : 10 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: 0.5 + index * 0.05 + itemIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="flex items-start gap-2 text-sm font-inter font-medium text-[#1C1C57]"
                  >
                    <span className="text-[#1C1C57] font-bold">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}