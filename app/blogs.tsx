// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Twitter, Linkedin, Instagram } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Blogs() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="container mx-auto py-6 text-center">
//         <Button variant="outline" className="rounded-full px-6">
//           Blogs
//         </Button>
//       </header>

//       {/* Hero Section */}
//       <section className="container mx-auto text-center px-4 py-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-3">
//           Discover the Design World
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Stay updated with the latest trends and insights in the design
//           industry.
//         </p>
//       </section>

//       {/* Blog Cards */}
//       <section className="container mx-auto px-4 py-8">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Card 1 */}
//           <div className="bg-blue-50 rounded-lg p-6 flex flex-col h-full">
//             <div className="mb-4">
//               <Image
//                 src="/Placeholder Image-6.svg"
//                 alt="UI/UX Design Trends"
//                 width={300}
//                 height={150}
//                 className="rounded-md"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-[#1a237e] mb-2">
//               Unveiling the Latest UI/UX Design Trends
//             </h2>
//             <p className="text-gray-600 mb-4 flex-grow">
//               Embark on a journey into the future of digital design as we
//               uncover the most innovative UI/UX trends shaping the landscape in
//               2024.
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium"
//             >
//               Read more <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-blue-50 rounded-lg p-6 flex flex-col h-full">
//             <div className="mb-4">
//               <Image
//                 src="/Placeholder Image-7.svg"
//                 alt="UX Research"
//                 width={300}
//                 height={150}
//                 className="rounded-md"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-[#1a237e] mb-2">
//               A Beginner's Guide to UX Research: Methods & Best Practices.
//             </h2>
//             <p className="text-gray-600 mb-4 flex-grow">
//               Ever wondered why some apps feel incredibly intuitive while others
//               frustrate you?
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium"
//             >
//               Read more <ArrowRight className="ml-1 h-4 w-4" />
//             </Link>
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           <div className="w-8 h-1 bg-blue-500 rounded"></div>
//           <div className="w-8 h-1 bg-blue-200 rounded"></div>
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto py-6 text-center">
        <Button variant="outline" className="rounded-full px-6">
          Blogs
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto text-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-3">
          Discover the Design World
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends and insights in the design
          industry.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col h-full">
            <div className="mb-4">
              <Image
                src="Placeholder Image-6.svg"
                alt="UI/UX Design Trends"
                width={300}
                height={150}
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-2">
              Unveiling the Latest UI/UX Design Trends
            </h2>
            <p className="text-gray-600 mb-4 flex-grow">
              Embark on a journey into the future of digital design as we
              uncover the most innovative UI/UX trends shaping the landscape in
              2024.
            </p>
            <Link
              href="#"
              className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium"
            >
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col h-full">
            <div className="mb-4">
              <Image
                src="Placeholder Image-7.svg"
                alt="UX Research"
                width={300}
                height={150}
                className="rounded-md"
              />
            </div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-2">
              A Beginner's Guide to UX Research: Methods & Best Practices.
            </h2>
            <p className="text-gray-600 mb-4 flex-grow">
              Ever wondered why some apps feel incredibly intuitive while others
              frustrate you?
            </p>
            <Link
              href="#"
              className="text-blue-500 hover:text-blue-700 flex items-center text-sm font-medium"
            >
              Read more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-8 h-1 bg-blue-500 rounded"></div>
          <div className="w-8 h-1 bg-blue-200 rounded"></div>
        </div>
      </section>
    </div>
  );
}
