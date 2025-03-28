import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Added ArrowUpRight import
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Blue banner section with more curved top corners */}
      <div className="bg-[#007BFF] py-8 px-4 md:px-8 lg:px-12 rounded-t-3xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white text-2xl md:text-3xl font-medium mb-4 md:mb-0">
            Let&apos;s Work Together
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 text-white border border-white rounded-full px-5 py-2 transition-colors"
            >
              <span>Send a Mail</span>
              <ArrowUpRight className="h-6 w-6" /> {/* Added ArrowUpRight */}
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-white text-[#007BFF] rounded-full px-5 py-2 transition-colors"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="h-6 w-6" /> {/* Added ArrowUpRight */}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F5FCFF] py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/Logo.svg"
                alt="UX Research"
                width={100}
                height={150}
                className="rounded-md"
              />
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <li>
                  <Link href="#" className="text-[#000000] hover:text-[#007BFF]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#000000] hover:text-[#007BFF]">
                    About me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#000000] hhover:text-[#007BFF]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#000000] hover:text-[#007BFF]">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#000000] hover:text-[#007BFF]">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#000000] hover:text-[#007BFF]">
                    Contact me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-[#007BFF] pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#000000] text-sm mb-4 md:mb-0">
              © 2025 RK.Design Studio. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
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
                href="https://x.com/RashiniKaweesha"
                className="text-[#000000] hover:text-[#007BFF]"
              >
                <Image src="/X.svg" alt="X" width={30} height={30} />
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
