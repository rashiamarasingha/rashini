"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <main className="bg-white py-16 px-4 md:px-8" id="about-me">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 items-center">
          <motion.div
            className="order-2 md:order-1 overflow-hidden relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0], // This creates the bounce effect by moving up and down
            }}
            viewport={{ once: false }} // Animation triggers every time element enters viewport
            transition={{
              duration: 0.6,
              y: {
                duration: 2,
                repeat: 2,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/rashniDet.png"
              alt="Designer working on UI/UX sketches"
              width={600}
              height={450}
              className="rounded-lg relative top-12 md:top-10 lg:top-16" // Using relative positioning to move down
            />
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0], // Same bounce effect as the image
            }}
            viewport={{ once: false }} // Animation triggers every time element enters viewport
            transition={{
              duration: 0.6,
              y: {
                duration: 2,
                repeat: 2,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <div className="space-y-8">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Button
                  variant="outline"
                  className="rounded-full font-urbanist py-6 px-12 border-[#171717] font-semibold text-[#171717] text-[22px] hover:bg-transparent hover:border-[#171717] hover:text-[#171717] hover:shadow-none"
                >
                  About Me
                </Button>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-[34px] lg:text-[40px] font-inter font-medium text-[#1C1C57]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Discover My Journey
              </motion.h1>

              <div className="space-y-4 font-inter font-normal text-justify md:text-start text-slate-700">
                {[
                  "I am a UI/UX and Graphic Designer with 2 years of experience in creating user-centric digital experiences. Holding a BICT (Hons) degree from Rajarata University of Sri Lanka, I specialize in web and mobile UI/UX, dashboard design, chatbot interfaces, and branding. My expertise lies in blending creativity with usability to deliver intuitive and visually appealing solutions.",
                  "I focus on developing seamless, functional designs that provide meaningful interactions while ensuring a balance between aesthetics and user needs. Let's collaborate and create something impactful!",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="flex space-x-4 pt-2 font-inter font-medium text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                {[
                  {
                    href: "https://www.linkedin.com/in/rashini-kaweesha",
                    name: "LinkedIn",
                    icon: (
                      <Image
                        src="/LinkedinMini.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className="text-[#007BFF] font-inter font-medium text-[18px]"
                      />
                    ),
                  },
                  {
                    href: "https://www.behance.net/rashiamarasingha",
                    name: "Behance",
                    icon: (
                      <Image
                        src="/BehanceMini.svg"
                        alt="Behance"
                        width={20}
                        height={20}
                        className="text-[#007BFF] font-inter font-medium text-[18px]"
                      />
                    ),
                  },
                  {
                    href: "https://dribbble.com/Rashini_Kaweesha",
                    name: "Dribbble",
                    icon: (
                      <Image
                        src="/DribbbleMini.svg"
                        alt="Dribbble"
                        width={20}
                        height={20}
                        className="text-[#007BFF] "
                      />
                    ),
                  },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="text-[#007BFF] hover:text-[#0056b3]"
                    >
                      <div className="flex items-center space-x-1">
                        {link.icon}
                        <span>{link.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}