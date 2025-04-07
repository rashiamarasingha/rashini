"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

// Typewriter component for animated text
interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
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
      <span className="animate-pulse">|</span>
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
    <main className="w-full md:min-h-[700px] lg:min-h-[800px] bg-[#f0f7ff] overflow-hidden flex justify-center relative">
      <div className="flex flex-col items-center relative pt-3 bg-[#F0F7FF] w-full max-w-[1000px] px-4 md:px-6">
        {/* Navigation Bar */}
        <nav className="w-full max-w-[1298px] h-auto md:h-[70px] flex items-center justify-between px-4 md:px-8 py-3 md:py-0 relative bg-[#FFFFFF] rounded-[30px] md:rounded-[50px] border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] z-50">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-10 md:h-[40px] flex items-center">
              <Link href="/">
                <Image
                  src="/Logo1.svg"
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
          <div className="hidden md:flex items-center justify-center space-x-1 md:space-x-3">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="h-auto px-4 lg:px-6 py-2 lg:py-3 rounded-[60px] bg-transparent hover:bg-transparent"
              >
                <a
                  href={item.href}
                  className={`text-base font-medium lg:text-[16px] tracking-[-0.30px] font-['Inter',Helvetica] ${
                    item.active
                      ? "text-[#007BFF] font-bold"
                      : "text-[#2E2E2E] font-medium hover:text-[#007BFF]"
                  } transition-colors duration-200`}
                >
                  {item.name}
                </a>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden w-[calc(100%-2rem)] mx-auto mt-6 bg-white rounded-[20px] p-4 shadow-lg z-40 absolute top-[70px] left-0 right-0 border border-gray-100 animate-in fade-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start mb-2 py-3 rounded-[20px] bg-transparent hover:bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a
                  href={item.href}
                  className={`text-base font-medium tracking-[-0.30px] font-['Inter',Helvetica] ${
                    item.active
                      ? "text-[#007BFF] font-bold"
                      : "text-[#2E2E2E] font-medium hover:text-[#007BFF]"
                  } transition-colors duration-200`}
                >
                  {item.name}
                </a>
              </Button>
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section className="relative w-full py-4 mt-2 md:mt-0 md:py-6 lg:py-8">
          <div className="relative w-full max-w-[1125px] mx-auto">
            {/* Hero Text Content */}
            <div className="flex flex-col items-center text-center px-4 z-10 relative">
              {/* Hello Badge */}
              <div className="relative mb-1">
                <Card className="inline-flex h-8 sm:h-10 md:h-[45px] items-center justify-center px-4 md:px-6 py-1 md:py-3 bg-[#ffffff1a] rounded-[38.24px] overflow-hidden border-[1.27px] border-solid border-neutral-900">
                  <CardContent className="p-0">
                    <div className="font-['Lufga-Medium',Helvetica] font-medium text-gray-900 text-base md:text-xl tracking-[-0.30px]">
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
              <h1 className="font-['Urbanist',Helvetica] font-semibold text-gray-900 text-3xl sm:text-4xl md:text-6xl lg:text-[70px] text-center tracking-[-0.8px] md:tracking-[-1.43px] leading-tight md:leading-[1.1] mb-6 md:mb-8 mt-1">
                <span className="text-neutral-900">I&apos;m </span>
                <span className="text-[#007bff]">Rashini</span>
                <span className="text-neutral-900">
                  ,<br />{" "}
                  <span>
                    <Typewriter text="UI/UX Designer" speed={150} />
                  </span>{" "}
                </span>
              </h1>

              <Image
                className="hidden md:block absolute w-[40px] md:w-[86px] h-[40px] md:h-[88px] top-[180px] md:top-[180px] left-[5%] md:left-[140px]"
                alt="Vector"
                src="/vector-2.svg"
                width={86}
                height={88}
              />
            </div>

            {/* Mobile Quote Section */}
            <div className="flex flex-col items-center gap-3 mt-4 mx-auto max-w-[350px] px-4 z-10 relative md:hidden">
              <Image
                src="/quote-up.svg"
                alt="quote"
                width={20}
                height={20}
                className="w-5 h-5 text-gray-700"
              />
              <p className="font-['Urbanist',Helvetica] font-medium text-gray-700 text-sm tracking-[-0.27px] leading-5 text-center">
                A UI/UX designer who crafts intuitive and delightful experiences
                by turning complexity into simplicity with creativity.
              </p>
            </div>

            {/* Profile Image Section */}
            <div className="mt-8 md:mt-0 md:absolute md:w-full md:h-[736px] md:top-[190px] flex justify-center items-center">
              <div className="relative w-full md:w-full h-auto md:h-[688px] flex justify-center">
                <Image
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-none md:w-[852px] md:h-[636px] object-contain mx-auto"
                  alt="Young pretty woman"
                  src="/rashiniScratch.png"
                  width={952}
                  height={636}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Buttons */}
        <Card className="w-[75%] sm:w-[85%] max-w-[400px] mx-auto md:absolute md:bottom-5 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col sm:flex-row h-auto sm:h-[50px] items-center justify-center gap-2 sm:gap-1 p-1 sm:p-1 bg-[#ffffff1a] rounded-[8px] overflow-hidden backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] mb-8 md:mb-0 z-20 relative">
          <CardContent className="p-0.5 flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
            <Button className="w-[100%] sm:w-[48%] mx-auto sm:mx-0 flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-1.5 bg-[#007bff] hover:bg-blue-600 transition-colors duration-300 rounded-[8px] overflow-hidden border-[0.5px] border-solid border-[#cfd4dc] h-[40px]">
              <a
                href="#projects"
                className="font-['Inter',Helvetica] font-medium text-white text-sm sm:text-base tracking-[-0.30px] leading-[normal]"
              >
                View My Work
              </a>
            </Button>
            <Button
              variant="ghost"
              className="w-[100%] sm:w-[48%] mx-auto sm:mx-0 flex font-medium items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-[8px] overflow-hidden h-[40px] border-[0.5px] border-solid border-[#cfd4dc] hover:bg-gray-100 hover:text-[#007bff] transition-colors duration-300"
            >
              <Link
                href="https://www.linkedin.com/in/rashini-kaweesha"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Inter',Helvetica] font-light text-black hover:text-[#007bff] text-sm sm:text-base tracking-[-0.30px] leading-[normal]"
              >
                Let&apos;s Connect
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Quote Section - Positioned in Left Corner of the Screen */}
      <div className="hidden md:flex md:flex-col md:items-start md:gap-4 lg:gap-6 md:absolute md:top-[40vh] lg:top-[48vh] md:left-[0vw] lg:left-[10vw] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] md:z-20">
        <Image
          src="/quote-up.svg"
          alt="quote"
          width={36}
          height={36}
          className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-gray-700"
        />
        <p className="font-['Urbanist',Helvetica] font-medium text-gray-700 text-sm md:text-base lg:text-lg tracking-[-0.27px] leading-5 md:leading-6 lg:leading-7 text-left">
          A UI/UX designer who crafts intuitive and delightful experiences by
          turning complexity into simplicity with creativity.
        </p>
      </div>
    </main>
  );
};

export default Home;