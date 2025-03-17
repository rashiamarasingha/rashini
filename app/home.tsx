"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRightIcon, QuoteIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Home = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", active: true },
    { name: "About", active: false },
    { name: "Service", active: false },
    { name: "Project", active: false },
    { name: "Blogs", active: false },
    { name: "Contact", active: false },
  ];

  return (
    <main className="w-full min-h-screen bg-[#f0f7ff] overflow-hidden flex justify-center">
      <div className="flex flex-col items-center relative pt-5 bg-[#f0f7ff] w-full max-w-[1440px] px-4 md:px-6">
        {/* Navigation Bar */}
        <nav className="w-full max-w-[1298px] h-auto md:h-[86px] flex items-center justify-between px-4 md:px-6 py-4 md:py-0 relative bg-gray-900 rounded-[30px] md:rounded-[50px] border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] z-50">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-8 md:h-[47px] flex items-center">
              <Image
                src="/Group 11.svg"
                alt="UX Research"
                width={100}
                height={150}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "default" : "ghost"}
                className={`h-auto px-4 lg:px-10 py-2 lg:py-5 rounded-[60px] ${
                  item.active
                    ? "bg-[#007bff]"
                    : "bg-transparent hover:bg-gray-800"
                }`}
              >
                <span
                  className={`[font-family:'Inter',Helvetica] text-white text-base lg:text-xl tracking-[-0.30px] ${
                    item.active ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full max-w-[1298px] mt-2 bg-gray-900 rounded-[20px] p-4 z-40 absolute top-[70px] left-0 right-0 mx-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start mb-2 py-2 rounded-[20px] ${
                  item.active
                    ? "bg-[#007bff]"
                    : "bg-transparent hover:bg-gray-800"
                }`}
              >
                <span
                  className={`[font-family:'Inter',Helvetica] text-white text-base tracking-[-0.30px] ${
                    item.active ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </Button>
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section className="relative w-full py-6 md:py-12 lg:py-16">
          <div className="relative w-full max-w-[1125px] mx-auto">
            {/* Hero Text Content */}
            <div className="flex flex-col items-center text-center px-4 z-10 relative">
              {/* Hello Badge */}
              <div className="relative mb-4">
                <Card className="inline-flex h-8 sm:h-10 md:h-[45px] items-center justify-center px-4 md:px-6 py-1 md:py-3 bg-[#ffffff1a] rounded-[38.24px] overflow-hidden border-[1.27px] border-solid border-neutral-900">
                  <CardContent className="p-0">
                    <div className="[font-family:'Lufga-Medium',Helvetica] font-medium text-gray-900 text-base md:text-xl tracking-[-0.30px]">
                      Hello!
                    </div>
                  </CardContent>
                </Card>
                <img
                  className="absolute w-5 md:w-8 h-5 md:h-[33px] top-0 right-[-8px] md:right-[-20px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </div>

              {/* Main Heading */}
              <h1 className="[font-family:'Urbanist',Helvetica] font-semibold text-gray-900 text-3xl sm:text-4xl md:text-6xl lg:text-[95.6px] text-center tracking-[-0.8px] md:tracking-[-1.43px] leading-tight md:leading-[1.1] mb-6 md:mb-8">
                <span className="text-neutral-900">I&apos;m </span>
                <span className="text-[#007bff]">Rashini</span>
                <span className="text-neutral-900">, UI / UX Designer</span>
              </h1>

              <img
                className="hidden md:block absolute w-[40px] md:w-[86px] h-[40px] md:h-[88px] top-[180px] md:top-[236px] left-[5%] md:left-[31px]"
                alt="Vector"
                src="/vector-2.svg"
              />
            </div>

            {/* Quote Section */}
            <div className="flex flex-col items-center md:items-start gap-3 md:gap-6 mt-4 md:mt-12 mx-auto md:mx-0 md:absolute md:top-[336px] md:left-0 max-w-[350px] px-4 md:px-0 z-10 relative">
              <QuoteIcon className="w-5 md:w-9 h-5 md:h-9 text-gray-700" />
              <p className="[font-family:'Urbanist',Helvetica] font-medium text-gray-700 text-sm md:text-lg tracking-[-0.27px] leading-5 md:leading-7 text-center md:text-left">
                UI/UX designer who wields the magic of creativity, transforming
                complexity into seamless, intuitive, and delightful experiences
              </p>
            </div>

            {/* Profile Image Section */}
            <div className="mt-8 md:mt-0 md:absolute md:w-[952px] md:h-[636px] md:top-[170px] md:left-[173px] flex justify-center">
              <div className="relative w-full md:w-[1018px] h-auto md:h-[688px]">
                <img
                  className="hidden md:block absolute w-[812px] h-[406px] top-[255px] left-[118px]"
                  alt="Ellipse"
                  src="/ellipse-2.svg"
                />

                {/* Profile Image */}
                <img
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none md:w-[952px] md:h-[636px] md:absolute md:top-6 md:left-[35px] object-contain mx-auto"
                  alt="Young pretty woman"
                  src="/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smil.png"
                />

                <img
                  className="hidden md:block absolute w-7 h-6 top-[468px] left-96"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Buttons */}
        <Card className="w-[90%] max-w-[387px] mx-auto md:absolute md:bottom-16 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col sm:flex-row h-auto sm:h-[82px] items-center justify-center gap-3 sm:gap-2.5 p-3 sm:p-2.5 bg-[#ffffff1a] rounded-[30px] sm:rounded-[50px] overflow-hidden backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] mb-8 md:mb-0 z-20 relative">
          <CardContent className="p-0 flex flex-col sm:flex-row w-full gap-3 sm:gap-0">
            <Button className="w-full sm:w-52 flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-[#007bff] rounded-[30px] sm:rounded-[60px] overflow-hidden border-[0.5px] border-solid border-[#cfd4dc]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base sm:text-lg lg:text-[25.7px] tracking-[-0.39px] leading-[normal] mr-2">
                Portfolio
              </span>
              <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[42px] lg:h-[42px] text-white" />
            </Button>
            <Button
              variant="ghost"
              className="w-full sm:flex-1 flex items-center justify-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-[30px] sm:rounded-[60px] overflow-hidden"
            >
              <span className="[font-family:'Inter',Helvetica] font-light text-white text-base sm:text-lg lg:text-[25.7px] tracking-[-0.39px] leading-[normal]">
                Book a call
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
