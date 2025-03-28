import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  return (
    <div className="bg-[#FFFFFF] py-16 px-4 md:px-6">
      {/* Header */}
      <header className="container mx-auto py-4 text-center">
        <Button variant="outline" className="rounded-full py-6 px-12 border-[#171717] text-[#171717] text-lg">
          Blogs
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto text-center px-4 py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C57] mb-2">
          Unveiling Creativity Through My Insights
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-4">
          Exploring innovative ideas and sharing unique perspectives to inspire creativity in design
        </p>
      </section>

      {/* Blog Cards */}
      <section className="container mx-auto px-4 pt-2 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F0F7FF] rounded-xl p-6 flex items-center h-full">
            <div className="w-1/3 mr-6">
              <Image
                src="Placeholder Image-6.svg"
                alt="UI/UX Design Trends"
                width={300}
                height={150}
                className="rounded-md"
              />
            </div>
            <div className="w-2/3 flex flex-col">
              <h2 className="text-xl font-bold text-[#1C1C57] mb-2">
                Unveiling the Latest UI/UX Design Trends
              </h2>
              <p className="text-gray-600 mb-4 flex-grow">
                Embark on a journey into the future of digital design as we uncover the most innovative UI/UX trends shaping the landscape in 2024.
              </p>
              <Link 
                href="https://medium.com/@rashinikaweesha47/unveiling-the-latest-ui-ux-design-trends-in-2024-c36dccbd8f5a" 
                className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F0F7FF] rounded-xl p-6 flex items-center h-full">
            <div className="w-1/3 mr-6">
              <Image
                src="Research.svg"
                alt="UX Research"
                width={300}
                height={150}
                className="rounded-md"
              />
            </div>
            <div className="w-2/3 flex flex-col">
              <h2 className="text-xl font-bold text-[#1C1C57] mb-2">
                A Beginner&apos;s Guide to UX Research: Methods & Best Practices.
              </h2>
              <p className="text-gray-600 mb-4 flex-grow">
                Ever wondered why some apps feel incredibly intuitive while others frustrate you?
              </p>
              <Link 
                href="https://medium.com/@rashinikaweesha47/unveiling-the-latest-ui-ux-design-trends-in-2024-c36dccbd8f5a" 
                className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
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