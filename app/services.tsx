"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  UiUxIcon,
  CreativeDesignIcon,
  CorporateBrandingIcon,
  SocialMediaIcon,
} from "./icons";

export default function ServicesSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const serviceCards = [
    {
      icon: <UiUxIcon className="text-blue-500" />,
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
      icon: <CreativeDesignIcon className="text-blue-500" />,
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
      icon: <CorporateBrandingIcon className="text-blue-500" />,
      title: "Corporate Branding",
      description: "Creating memorable brand identities that stand out.",
      items: [
        "Logo & Identity Design",
        "Brand Guidelines & Strategy",
        "Visual Storytelling & Art Direction",
      ],
    },
    {
      icon: <SocialMediaIcon className="text-blue-500" />,
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
    <section className="bg-slate-50 py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" className="rounded-full py-6 px-12 border-[#171717] text-[#171717] text-lg">
              Services
            </Button>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Take a look at the variety of services I offer.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-6"
        >
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {card.icon}
              </motion.div>

              <motion.h3
                className="font-bold text-lg text-slate-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {card.title}
              </motion.h3>

              <motion.p
                className="text-sm text-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {card.description}
              </motion.p>

              <ul className="mt-2 space-y-1">
                {card.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.05 + itemIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="text-[#007BFF] font-bold">•</span>
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