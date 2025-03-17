import type React from "react";
const DesignNav: React.FC = () => {
  return (
    <div className="w-full flex justify-center mx-auto bg-[#f0f7ff] py-6 md:py-10 px-4 rounded-xl mb-8 overflow-hidden transform -rotate-1">
      <div className="flex items-center justify-center whitespace-nowrap overflow-x-auto max-w-full px-4">
        <span className="text-neutral-900 font-medium text-lg md:text-xl">
          UI Design
        </span>
        <span className="text-[#007bff] mx-2 md:mx-3">♦</span>
        <span className="text-neutral-900 font-medium text-lg md:text-xl">
          App Design
        </span>
        <span className="text-[#007bff] mx-2 md:mx-3">♦</span>
        <span className="text-neutral-900 font-medium text-lg md:text-xl">
          Dashboard
        </span>
        <span className="text-[#007bff] mx-2 md:mx-3">♦</span>
        <span className="text-neutral-900 font-medium text-lg md:text-xl">
          Wireframe
        </span>
        <span className="text-[#007bff] mx-2 md:mx-3">♦</span>
        <span className="text-neutral-900 font-medium text-lg md:text-xl">
          User Research
        </span>
        <span className="text-[#007bff] mx-2 md:mx-3">♦</span>
        <span className="text-neutral-900 font-medium text-lg md:text-xl">
          UX Design
        </span>
      </div>
    </div>
  );
};

export default DesignNav;
