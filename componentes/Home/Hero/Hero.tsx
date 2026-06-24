import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full min-h-[80vh] bg-[#1f242c] flex items-center">
      
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

        {/* Text */}
        <div>
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-7xl font-bold text-white"
          >
            Crafting your digital story with passion
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-5 text-sm md:text-base font-semibold text-white"
          >
            Payment solutions enable businesses to accept payments. Payment
            solutions enable businesses to accept payments from customers
            conveniently and securely.
          </p>

          <button
            data-aos="fade-up"
            data-aos-delay="300"
            className="px-8 py-3 rounded-full mt-10 text-white font-semibold bg-[#b69974] hover:bg-[#9f7c4e] transition-all"
          >
            Discover More
          </button>
        </div>

        {/* Image */}
        <div
          data-aos="fade-down"
          data-aos-delay="450"
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/images/hero.png"
            width={550}
            height={550}
            alt="Hero Image"
          />
        </div>

      </div>
    </div>
  );
}