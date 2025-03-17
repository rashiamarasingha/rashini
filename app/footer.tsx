import Link from "next/link";
import { Mail, Phone, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Blue banner section */}
      <div className="bg-blue-500 py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white text-2xl md:text-3xl font-medium mb-4 md:mb-0">
            Let&apos;s Work together
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 text-white border border-white rounded-full px-5 py-2 hover:bg-blue-600 transition-colors"
            >
              <span>Send a mail</span>
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-white text-blue-500 rounded-full px-5 py-2 hover:bg-gray-100 transition-colors"
            >
              <span>Book a call</span>
              <Phone className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/Group 11-2.svg"
                alt="UX Research"
                width={100}
                height={150}
                className="rounded-md"
              />
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-500">
                    About me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-500">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-500">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-500">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-500">
                    Contact me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 R.Design. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
