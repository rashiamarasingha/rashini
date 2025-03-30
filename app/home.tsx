"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

// Add this Typewriter component
const Typewriter = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse ">|</span>
    </span>
  );
};

export const Home = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", active: true, href: "/" },
    { name: "About", active: false, href: "#about-me" },
    { name: "Service", active: false, href: "#services" },
    { name: "Project", active: false, href: "#projects" },
    { name: "Blogs", active: false, href: "#blogs" },
    { name: "Contact", active: false, href: "#contact" },
  ];

  return (
    <main className="w-full  md:min-h-[800px] lg:min-h-[900px] bg-[#f0f7ff] overflow-hidden  flex justify-center">
      <div className="flex flex-col items-center relative pt-5 bg-[#F0F7FF] w-full max-w-[1440px] px-4 md:px-6">
        {/* Navigation Bar - Increased height */}
        <nav className="w-full max-w-[1298px] h-auto md:h-[80px] flex items-center justify-between px-4 md:px-8 py-3 md:py-0 relative bg-[#FFFFFF] rounded-[30px] md:rounded-[50px] border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] z-50">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-10 md:h-[40px] flex items-center">
              <Link href="/">
                <Image
                  src="/Logo.svg"
                  alt="UX Research"
                  width={70}
                  height={40}
                  className="rounded-md md:w-[70px] md:h-[40px] w-[50px] h-[25px] object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-300" />
              ) : (
                <MenuIcon className="h-6 w-6 transition-all duration-300" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-3">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`h-auto px-4 lg:px-6 py-2 lg:py-3 rounded-[60px] ${
                  item.active
                    ? "bg-transparent"
                    : "bg-transparent hover:bg-transparent"
                }`}
              >
                <a
                  href={item.href}
                  className={`[font-family:'Inter',Helvetica] text-[20px] tracking-[-0.30px] ${
                    item.active
                      ? "text-[#007BFF] font-medium"
                      : "text-[#2E2E2E] font-medium"
                  }`}
                >
                  {item.name}
                </a>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Dropdown - Improved */}
        {mobileMenuOpen && (
          <div className="md:hidden  w-[calc(100%-2rem)] mx-auto mt-6 bg-white rounded-[20px] p-4 shadow-lg z-40 absolute top-[70px] left-0 right-0 border border-gray-100 animate-in fade-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`w-full justify-start mb-2 py-3 rounded-[20px] ${
                  item.active
                    ? "bg-[#f0f7ff]"
                    : "bg-transparent hover:bg-[#f9fbff]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <a
                  href={item.href}
                  className={`[font-family:'Inter',Helvetica] text-[20px] tracking-[-0.30px] ${
                    item.active
                      ? "text-[#007BFF] font-medium"
                      : "text-[#2E2E2E] font-medium"
                  }`}
                >
                  {item.name}
                </a>
              </Button>
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section className="relative w-full py-6 mt-4 md:mt-0 md:py-12 lg:py-10">
          <div className="relative w-full max-w-[1125px] mx-auto">
            {/* Hero Text Content */}
            <div className="flex flex-col items-center text-center px-4 z-10 relative">
              {/* Hello Badge */}
              <div className="relative mb-4">
                <Card className="inline-flex h-8 sm:h-10 md:h-[45px] items-center justify-center px-4 md:px-6 py-1 md:py-3 bg-[#ffffff1a] rounded-[38.24px] overflow-hidden border-[1.27px] border-solid border-neutral-900">
                  <CardContent className="p-0">
                    <div className="[font-family:'Lufga-Medium',Helvetica] font-medium text-gray-900 text-[22px] tracking-[-0.30px]">
                      Hello!
                    </div>
                  </CardContent>
                </Card>
                <Image
                  className="absolute w-5 md:w-8 h-5 md:h-[33px] -top-5 right-[-8px] md:right-[-20px]"
                  alt="Vector"
                  src="/vector-1.svg"
                  width={32}
                  height={33}
                />
              </div>

              {/* Main Heading */}
              <h1 className="font-urbanist font-semibold text-gray-900 text-3xl sm:text-4xl md:text-6xl lg:text-[95.6px] text-center tracking-[-0.8px] md:tracking-[-1.43px] leading-tight md:leading-[1.1] mb-6 md:mb-8">
                <span className="text-neutral-900">I&apos;m </span>
                <span className="text-[#007bff]">Rashini</span>
                <span className="text-neutral-900">
                  ,<br />{" "}
                  <span>
                    <Typewriter text="UI / UX Designer" speed={150} />
                  </span>{" "}
                </span>
              </h1>

              <Image
                className="hidden md:block absolute w-[40px] md:w-[86px] h-[40px] md:h-[88px] top-[180px] md:top-[236px] left-[5%] md:left-[31px]"
                alt="Vector"
                src="/vector-2.svg"
                width={86}
                height={88}
              />
            </div>

            {/* Quote Section */}
            <div className="flex flex-col items-center md:items-start gap-3 md:gap-6 mt-4 md:mt-12 mx-auto md:mx-0 md:absolute md:top-[336px] md:left-0 max-w-[350px] px-4 md:px-0 z-10 relative">
              {/* <QuoteIcon className="w-5 md:w-9 h-5 md:h-9 text-gray-700" /> */}
              <Image
                src="/quote-up.svg"
                alt="quote"
                width={20}
                height={20}
                className="w-5 md:w-9 h-5 md:h-9 text-gray-700"
              />
              <p className="[font-family:'Urbanist',Helvetica] font-medium text-gray-700 text-sm md:text-lg tracking-[-0.27px] leading-5 md:leading-7 text-center md:text-left">
                A UI/UX designer who crafts intuitive and delightful experiences
                by turning complexity into simplicity with creativity.
              </p>
            </div>

            {/* Profile Image Section */}
            <div className="mt-8 md:mt-0 md:absolute md:w-[952px] md:h-[636px] md:top-[170px] md:left-[173px] flex justify-center">
              <div className="relative w-full md:w-[1018px] h-auto md:h-[688px]">
                {/* <Image
                  className="hidden md:block absolute w-[812px] h-[406px] top-[255px] left-[118px]"
                  alt="Ellipse"
                  src="/ellipse-2.svg"
                  width={812}
                  height={406}
                /> */}

                {/* Profile Image */}
                <Image
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none md:w-[952px] md:h-[636px] md:absolute md:top-6 lg:top-32 md:left-[35px] object-contain mx-auto"
                  alt="Young pretty woman"
                  // src="/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smil.png"
                  src="/rashiniScratch.png"
                  width={952}
                  height={636}
                />

                {/* <Image
                  className="hidden md:block absolute w-7 h-6 top-[468px] left-96"
                  alt="Vector"
                  src="/vector.svg"
                  width={28}
                  height={24}
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Buttons */}
        <Card className="w-[90%] max-w-[450px] mx-auto md:absolute md:bottom-16 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col sm:flex-row h-auto sm:h-[82px] items-center justify-center gap-3 sm:gap-2.5 p-3 sm:p-2.5 bg-[#ffffff1a] rounded-[8px] overflow-hidden backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] mb-8 md:mb-0 z-20 relative">
          <CardContent className="p-1 flex flex-col sm:flex-row w-full gap-3 ">
            <Button className="w-full sm:w-56 flex items-center justify-center px-4 py-2 sm:px-6 sm:py-6 bg-[#007bff] rounded-[8px] overflow-hidden border-[0.5px] border-solid border-[#cfd4dc]">
              <a
                href="#projects"
                className="[font-family:'Inter',Helvetica] font-medium text-[24px] text-white text-base sm:text-lg lg:text-[25.7px] tracking-[-0.39px] leading-[normal] mr-2"
              >
                View My Work
              </a>
            </Button>
            <Button
              variant="ghost"
              className="w-full sm:w-56 sm:flex-1 flex items-center justify-center gap-2.5 px-4 py-2 sm:px-6 sm:py-6 rounded-[8px] overflow-hidden"
            >
              <a
                href="https://www.linkedin.com/in/rashini-kaweesha"
                className="[font-family:'Inter',Helvetica] font-medium text-black text-base sm:text-lg lg:text-[25.7px] text-[24px] tracking-[-0.39px] leading-[normal]"
              >
                Let&apos;s Connect
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Home;
