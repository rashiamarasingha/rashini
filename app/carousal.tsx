"use client";
import TextCarousel from "@/components/TextCaro/textCarousel";
import React from "react";

const Carousal = () => {
  return (
    <div className=" bg-[#F0F7FF] xl:h-[150px]">
      <div className="transform md:pt-10 -rotate-2">

      <TextCarousel />
      </div>
    </div>
  );
};

export default Carousal;
