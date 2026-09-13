import React from "react";
import Image from "next/image";
import Aboutprogres from "./Aboutprogres";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Image Content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="relative flex justify-center items-center">
          <Image
            src="/images/a3.png"
            alt="img"
            width={500}
            height={500}
            className="animate-spin [animation-duration:20s]"
          />
          <Image
            src="/images/a4.png"
            alt="img"
            width={350}
            height={350}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
          />
        </div>

        {/* Text content */}
        <div>
          <h1 data-aos="fade-up" data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="text-blue-700 dark:text-blue-400 text-lg font-medium tracking-widest">
            {t("subheading")}
          </h1>

          <h1 data-aos="fade-up" data-aos-anchor-placement="top-center"
          data-aos-delay="300"
          className="text-3xl md:text-5xl font-bold mt-4 text-black dark:text-white">
            {t("heading")}
          </h1>

          <p data-aos="fade-up" data-aos-anchor-placement="top-center"
          data-aos-delay="450" className="ml-0 md:ml-12 md:mt-10 mt-5 text-gray-700 dark:text-gray-300 text-sm md:text-base font-semibold leading-loose">
            {t("description")}
          </p>
          
          <Aboutprogres />
        </div>

      </div>
    </div>
  );
}