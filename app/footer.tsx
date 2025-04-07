"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  // Add state to track which icon is clicked with proper typing
  const [clickedIcon, setClickedIcon] = useState<string | null>(null);
  // New state to track which icon is being hovered
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

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

  // Handle icon click with proper TypeScript typing
  const handleIconClick = (iconName: string): void => {
    setClickedIcon(iconName);

    // Reset the clicked state after a short delay (for visual feedback)
    setTimeout(() => {
      setClickedIcon(null);
    }, 300);
  };

  // Blue filter for social media icons
  const blueFilter = "invert(42%) sepia(99%) saturate(1486%) hue-rotate(199deg) brightness(97%) contrast(108%)";

  return (
    <footer className="w-full">
      {/* Blue banner section with more curved top corners */}
      <div
        className="bg-[#007BFF] py-6 sm:py-8 px-4 sm:px-6 md:px-8 rounded-t-3xl"
        id="contact"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h2 className="text-white font-urbanist text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-semibold text-center md:text-left">
            Let&apos;s Work Together
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="mailto:rashinikaweesha47@gmail.com?subject=Inquiry from Website&body=Hello, I'd like to discuss a project with you."
              className="flex items-center font-urbanist font-medium text-sm sm:text-base md:text-[20px] justify-center gap-2 text-white border border-white rounded-[8px] px-3 sm:px-5 py-2 transition-colors hover:bg-blue-600 duration-300 w-full sm:w-auto"
            >
              <span>Send a mail</span>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Link>
            <button
              onClick={handleBookCall}
              className="flex items-center font-urbanist font-medium text-sm sm:text-base md:text-[20px] justify-center gap-2 bg-white text-[#007BFF] rounded-[8px] px-3 sm:px-5 py-2 transition-colors hover:bg-gray-100 duration-300 w-full sm:w-auto"
              disabled={isLoading}
            >
              <span>{isLoading ? "Opening Calendar..." : "Book a call"}</span>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FCFF] py-6 sm:py-8 px-4 sm:px-6 md:px-8 mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/Logo2.svg"
                  alt="UX Research"
                  width={100}
                  height={80}
                  className="rounded-md w-[60px] h-[62px] sm:w-[70px] sm:h-[72px] md:w-[81px] md:h-[84px]"
                />
              </Link>
            </div>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center md:justify-end gap-x-4 sm:gap-x-6 gap-y-2 text-center">
                <li>
                  <Link
                    href="/"
                    className="text-[#000000] font-inter font-medium text-sm sm:text-base lg:text-[18px] hover:text-[#007BFF]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about-me"
                    className="text-[#000000] font-inter font-medium text-sm sm:text-base lg:text-[18px] hover:text-[#007BFF]"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[#000000] font-inter font-medium text-sm sm:text-base lg:text-[18px] hover:text-[#007BFF]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-[#000000] font-inter font-medium text-sm sm:text-base lg:text-[18px] hover:text-[#007BFF]"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blogs"
                    className="text-[#000000] font-inter font-medium text-sm sm:text-base lg:text-[18px] hover:text-[#007BFF]"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-[#000000] font-inter font-medium text-sm sm:text-base lg:text-[18px] hover:text-[#007BFF]"
                  >
                    Contact me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-[#007BFF] pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-[#000000] font-inter font-medium text-xs sm:text-sm lg:text-[19px] mb-0 text-center md:text-left">
              © 2025 RK.Design Studio. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              {/* Behance */}
              <Link
                href="https://www.behance.net/rashiamarasingha"
                className="transition-transform active:scale-95"
                onClick={() => handleIconClick("behance")}
                onMouseEnter={() => setHoveredIcon("behance")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="transition-duration-300">
                  <Image
                    src="/Behance.png"
                    alt="Behance"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                    style={{
                      filter:
                        hoveredIcon === "behance" || clickedIcon === "behance"
                          ? blueFilter
                          : "none",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>
              </Link>
              
              {/* Dribbble */}
              <Link
                href="https://dribbble.com/Rashini_Kaweesha"
                className="transition-transform active:scale-95"
                onClick={() => handleIconClick("dribbble")}
                onMouseEnter={() => setHoveredIcon("dribbble")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="transition-duration-300">
                  <Image
                    src="/Dribbble.png"
                    alt="Dribbble"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                    style={{
                      filter:
                        hoveredIcon === "dribbble" || clickedIcon === "dribbble"
                          ? blueFilter
                          : "none",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>
              </Link>
              
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/rashini-kaweesha"
                className="transition-transform active:scale-95"
                onClick={() => handleIconClick("linkedin")}
                onMouseEnter={() => setHoveredIcon("linkedin")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="transition-duration-300">
                  <Image
                    src="/Linkedin.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                    style={{
                      filter:
                        hoveredIcon === "linkedin" || clickedIcon === "linkedin"
                          ? blueFilter
                          : "none",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>
              </Link>
              
              {/* X (Twitter) */}
              <Link
                href="https://x.com/RashiniKaweesha"
                className="transition-transform active:scale-95"
                onClick={() => handleIconClick("x")}
                onMouseEnter={() => setHoveredIcon("x")}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="transition-duration-300">
                  <Image
                    src="/X.svg"
                    alt="X"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                    style={{
                      filter:
                        hoveredIcon === "x" || clickedIcon === "x"
                          ? blueFilter
                          : "none",
                      transition: "filter 0.3s",
                    }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}