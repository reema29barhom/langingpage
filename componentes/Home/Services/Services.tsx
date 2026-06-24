import React from "react";
import Image from "next/image";
import ServiceCard from "./ServicesCard";

export default function Services() {
  return (
    <div className="pt-20 pb-20 relative bg-[#1f242c]">
      
      {/* Side image pattern */}
      <Image
        src="/images/service_bg.png"
        alt="bg"
        width={300}
        height={300}
        className="absolute right-0 top-0 opacity-20"
      />

      <div className="w-[80%] mx-auto">

        <h1 className="text-[#eeb956] text-lg font-medium tracking-widest">
          Our Services
        </h1>

        <h1 className="text-3xl md:text-5xl mt-4 font-bold text-white">
          Crafting your digital <br />
          story with passion
        </h1>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center"
        >
          
          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard image="/images/s1.png" icon="/images/sicon1.png" />
          </div>

          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <ServiceCard image="/images/s2.png" icon="/images/sicon2.png" />
          </div>

          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ServiceCard image="/images/s3.png" icon="/images/sicon3.png" />
          </div>

          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <ServiceCard image="/images/s4.png" icon="/images/sicon4.png" />
          </div>

        </div>
      </div>
    </div>
  );
}