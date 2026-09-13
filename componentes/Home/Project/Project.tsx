"use client";
import React from 'react';

import Image from "next/image";
import { useTranslations } from "next-intl";

const PROJECT_IMAGES = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];

export default function Project() {
  const t = useTranslations("Portfolio");

  return (
    <div className="pt-16 pb-16">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        {t("subheading")}
      </h2>
      <h1 className="text-3xl md:text-5xl mt-4 text-gray-900 dark:text-white font-bold text-center">
        {t.rich("heading", { br: () => <br /> })}
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 w-[80%] mx-auto gap-6">
        {PROJECT_IMAGES.map((src, idx) => (
          <div 
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay={idx * 100}
            key={idx}
          >
            <Image 
  src={src} 
  alt="project" 
  width={450} 
  height={550} 
  className="rounded-md w-full h-auto shadow-md dark:shadow-none" 
/>
          </div>
        ))}
      </div>
    </div>
  );
}