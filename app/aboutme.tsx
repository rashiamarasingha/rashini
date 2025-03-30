"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <main className="bg-white" id="about-me" >
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0], // This creates the bounce effect by moving up and down
            }}
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
              className="rounded-lg"
            />
          </motion.div>

          <div className="order-1 md:order-2 flex flex-col space-y-6">
            <div className="space-y-8">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Button
                  variant="outline"
                  className="rounded-full font-urbanist py-6 px-12 border-[#171717] text-[#171717] text-[22px] font-semibold"
                >
                  About Me
                </Button>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-Inter font-medium text-[40px] text-[#1C1C57]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Discover My Journey
              </motion.h1>

              <div className="space-y-4 text-justify md:text-start text-slate-700">
                {[
                  "I am a UI/UX and Graphic Designer with 2 years of experience in creating user-centric digital experiences. Holding a BICT (Hons) degree from Rajarata University of Sri Lanka, I specialize in web and mobile UI/UX, dashboard design, chatbot interfaces, and branding. My expertise lies in blending creativity with usability to deliver intuitive and visually appealing solutions.",
                  "I focus on developing seamless, functional designs that provide meaningful interactions while ensuring a balance between aesthetics and user needs. Let's collaborate and create something impactful!",
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="flex space-x-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                        className="text-[#007BFF]"
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
                        className="text-[#007BFF]"
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
                        className="text-[#007BFF]"
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
          </div>
        </div>
      </div>
    </main>
  );
}