"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Added ArrowUpRight import
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);

  // Function to open Google Calendar with Meet creation
  const handleBookCall = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    // Google Calendar URL to create a new event with Google Meet
    const now = new Date();
    // Default event duration - 30 minutes
    const thirtyMinutesLater = new Date(now.getTime() + 30 * 60000);

    // Format dates for Google Calendar URL
    const startDate = now.toISOString().replace(/-|:|\.\d+/g, "");
    const endDate = thirtyMinutesLater.toISOString().replace(/-|:|\.\d+/g, "");

    // Create URL with pre-filled information
    const calendarURL = `https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+RK.Design+Studio&dates=${startDate}/${endDate}&details=Call+scheduled+from+website&add=meet@google.com&ctz=local`;

    // Open Google Calendar in a new tab
    window.open(calendarURL, "_blank");

    setIsLoading(false);
  };

  return (
    <footer className="w-full">
      {/* Blue banner section with more curved top corners */}
      <div
        className="bg-[#007BFF] py-8 px-4 md:px-8  rounded-t-3xl"
        id="contact"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white font-urbanist text-2xl md:text-3xl lg:text-[45px] font-semibold mb-4 md:mb-0">
            Let&apos;s Work Together
          </h2>
          <div className="flex flex-row gap-3">
            <Link
              href="mailto:rashinikaweesha47@gmail.com?subject=Inquiry from Website&body=Hello, I'd like to discuss a project with you."
              className="flex items-center font-urbanist font-medium md:text-[20px] justify-center gap-2 text-white border border-white rounded-[8px] px-5 py-2 transition-colors"
            >
              <span>Send a mail</span>
              <ArrowUpRight className="h-6 w-6" />
            </Link>
            <button
              onClick={handleBookCall}
              className="flex items-center font-urbanist font-medium md:text-[20px] justify-center gap-2 bg-white text-[#007BFF] rounded-[8px] px-5 py-2 transition-colors"
              disabled={isLoading}
            >
              <span>{isLoading ? "Opening Calendar..." : "Book a call"}</span>
              <ArrowUpRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FCFF] py-8 px-8 mt-auto">
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/Logo2.svg"
                  alt="UX Research"
                  width={100}
                  height={80}
                  className="rounded-md w-[81px] h-[84px]"
                />
              </Link>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-[#000000] font-inter font-medium lg:text-[22px] hover:text-[#007BFF]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about-me"
                    className="text-[#000000] font-inter font-medium lg:text-[22px] hover:text-[#007BFF]"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[#000000] font-inter font-medium lg:text-[22px] hhover:text-[#007BFF]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-[#000000] font-inter font-medium lg:text-[22px] hover:text-[#007BFF]"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blogs"
                    className="text-[#000000] font-inter font-medium lg:text-[22px] hover:text-[#007BFF]"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#000000] font-inter font-medium lg:text-[22px] hover:text-[#007BFF]"
                  >
                    Contact me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-[#007BFF] pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#000000] font-inter font-medium lg:text-[19px] text-sm mb-4 md:mb-0">
              © 2025 RK.Design Studio. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.behance.net/rashiamarasingha"
                className="text-[#000000] hover:text-[#007BFF]"
              >
                <Image
                  src="/Behance.svg"
                  alt="Behance"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://dribbble.com/Rashini_Kaweesha"
                className="text-[#000000] hover:text-[#007BFF]"
              >
                <Image
                  src="/Dribbble.svg"
                  alt="Dribbble"
                  width={30}
                  height={30}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/rashini-kaweesha"
                className="text-[#000000] hover:text-[#007BFF]"
              >
                <Image
                  src="/Linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://x.com/RashiniKaweesha"
                className="text-[#000000] hover:text-[#007BFF]"
              >
                <Image src="/X.svg" alt="X" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
