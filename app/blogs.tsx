"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <div className="bg-[#FFFFFF] py-16 px-4 md:px-6 overflow-hidden" id="blogs">
      {/* Header */}
      <motion.div
        className="container mx-auto py-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="rounded-full font-urbanist py-6 px-12 border-[#171717] text-[#171717] text-[22px] font-semibold hover:bg-transparent hover:border-[#171717] hover:text-[#171717] hover:shadow-none"
          >
            Blogs
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto text-center px-4 py-4"
      >
        <motion.h1 
          className="text-3xl md:text-[34px] lg:text-[40px] font-inter font-medium text-[#1C1C57] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Unveiling Creativity Through My Insights
        </motion.h1>
        <motion.p 
          className="text-[#1C1C57] max-w-2xl text-[18px] font-inter font-normal mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Exploring innovative ideas and sharing unique perspectives to inspire
          creativity in design
        </motion.p>
      </motion.section>

      {/* Blog Cards */}
      <section className="container mx-auto px-4 pt-2 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Bottom to Top Animation */}
          <motion.div 
            className="bg-[#F0F7FF] rounded-xl p-6 flex lg:flex-row flex-col items-center h-full"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="lg:w-1/3 xl:w-[276px] mb-4 lg:mb-0 lg:h-[250px] lg:mr-6">
              <Image
                src="/PlaceholderImage.jpg"
                alt="UI/UX Design Trends"
                width={300}
                height={150}
                className="rounded-md lg:w-[150px] xl:w-[276px] lg:h-[250px] xl:h-[250px]"
              />
            </div>
            <div className="lg:w-2/3 flex flex-col">
              <h2 className="font-inter text-[24px] font-bold text-[#1C1C57] mb-2">
                Unveiling the Latest UI/UX Design Trends
              </h2>
              <p className="text-[#1C1C57] font-inter font-normal text-[14px] mb-4 flex-grow">
                Embark on a journey into the future of digital design as we
                uncover the most innovative UI/UX trends shaping the landscape
                in 2024.
              </p>
              <Link
                href=" https://medium.com/@rashinikaweesha47/unveiling-the-latest-ui-ux-design-trends-in-2024-c36dccbd8f5a"
                className="text-blue-500 hover:text-blue-700 flex items-center text-[16px] font-inter font-normal"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2 - Bottom to Top Animation with slight delay */}
          <motion.div 
            className="bg-[#F0F7FF] rounded-xl p-6 flex lg:flex-row flex-col items-center h-full"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="lg:w-1/3 xl:w-[276px] mb-4 lg:mb-0 lg:h-[250px] lg:mr-6">
              <Image
                src="Research.svg"
                alt="UX Research"
                width={300}
                height={150}
                className="rounded-md lg:w-[150px] xl:w-[276px] lg:h-[250px] xl:h-[250px]"
              />
            </div>
            <div className="lg:w-2/3 flex flex-col">
              <h2 className="font-inter text-[24px] font-bold text-[#1C1C57] mb-2">
                A Beginner&apos;s Guide to UX Research: Methods & Best
                Practices.
              </h2>
              <p className="text-[#1C1C57] font-inter font-normal text-[14px] mb-4 flex-grow">
                Ever wondered why some apps feel incredibly intuitive while
                others frustrate you?
              </p>
              <Link
                href="https://medium.com/@rashinikaweesha47/a-beginners-guide-to-ux-research-methods-best-practices-94c5289a1e85"
                className="text-blue-500 hover:text-blue-700 flex items-center text-[16px] font-inter font-normal"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-20 space-x-2">
          <div className="w-8 h-1 bg-blue-500 rounded"></div>
          <div className="w-8 h-1 bg-blue-200 rounded"></div>
        </div>
      </section>
    </div>
  );
}