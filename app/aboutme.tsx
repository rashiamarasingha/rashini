"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="Placeholder Image.svg"
              alt="Designer working on UI/UX sketches"
              width={600}
              height={450}
              className="rounded-lg shadow-md"
            />
          </motion.div>

          <div className="order-1 md:order-2 flex flex-col space-y-6">
            <div className="space-y-6">
              <motion.div
                className="mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <Button variant="outline" className="rounded-full px-6">
                  About Me
                </Button>
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-bold text-slate-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Hi, I am Rashini Kaweesha
              </motion.h1>

              <div className="space-y-4 text-slate-700">
                {[
                  "A dedicated UI/UX Designer and Graphic Designer with 2 years of professional experience creating intuitive and user-centric digital experiences. I hold a Bachelor of Science in Mass Communication Technology (Hons) degree from Rajarata University of Sri Lanka.",
                  "I specialize in user-centered design, creating intuitive and engaging digital experiences through web and mobile UI/UX, dashboard designs, chatbot interfaces, and branding solutions. With a strong foundation in both technology and design, I bring a unique approach to problem-solving and innovation.",
                  "I focus on delivering functional, visually appealing, and seamless digital experiences. My goal is to bridge the gap between creativity and usability, ensuring designs that not only look great but also provide meaningful interactions.",
                  "Let's collaborate and create something impactful! 🚀",
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
                    href: "https://linkedin.com",
                    name: "LinkedIn",
                    icon: <Linkedin size={20} />,
                  },
                  {
                    href: "https://behance.net",
                    name: "Behance",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7.443 5.35c.639 0 1.23.05 1.77.198.541.099.984.297 1.377.544.394.247.689.594.885 1.039.197.445.296.989.296 1.583 0 .693-.148 1.286-.492 1.731-.296.446-.787.841-1.377 1.138.836.247 1.475.742 1.869 1.336.394.594.64 1.336.64 2.177 0 .693-.148 1.286-.394 1.78-.246.495-.639.89-1.082 1.187-.443.297-.984.544-1.574.643-.59.099-1.18.148-1.77.148H1V5.35h6.443zm-.394 5.54c.541 0 .984-.148 1.328-.396.344-.247.492-.693.492-1.237 0-.297-.05-.544-.148-.742-.099-.198-.246-.347-.443-.446-.197-.099-.394-.148-.639-.198-.246 0-.492-.05-.787-.05H3.77v3.069h3.279zm.197 5.838c.295 0 .59-.05.836-.05.246-.05.492-.148.688-.247.197-.099.344-.297.443-.495.099-.198.148-.495.148-.841 0-.643-.197-1.089-.541-1.386-.344-.248-.836-.347-1.426-.347H3.77v3.366h3.476zm8.754-2.177c.344.346.885.544 1.574.544.492 0 .934-.124 1.328-.346.394-.248.64-.495.738-.792h2.41c-.394 1.187-1.033 2.029-1.82 2.572-.787.495-1.77.792-2.902.792-.787 0-1.475-.148-2.115-.396-.64-.247-1.18-.644-1.623-1.138-.443-.495-.787-1.089-.984-1.78-.197-.693-.296-1.435-.296-2.227 0-.742.099-1.484.296-2.177.197-.693.541-1.287.984-1.78.443-.495.984-.89 1.623-1.188.64-.247 1.377-.396 2.164-.396.886 0 1.623.198 2.263.545.64.346 1.131.792 1.574 1.336.394.544.689 1.138.836 1.83.148.693.197 1.386.148 2.128h-7.18c0 .742.197 1.435.541 1.78zm2.804-4.85c-.295-.346-.787-.544-1.426-.544-.394 0-.738.05-.984.198-.246.148-.443.297-.59.495-.148.198-.246.396-.295.594-.05.198-.099.396-.099.544H19.1c-.148-.594-.394-1.039-.738-1.287zm-3.05-5.194h5.607v1.682h-5.607V4.507z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://dribbble.com",
                    name: "Dribbble",
                    icon: <Dribbble size={20} />,
                  },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="text-blue-600 hover:text-blue-800"
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
