import React from "react";
import Logo from "@/componentes/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type props = {
  openNav: () => void;
};

export default function Nav({ openNav }: props) {
  return (
    <div className="h-[12vh] w-full relative z-10 bg-transparent">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10">
          {NAVLINKS.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <button className="h-full px-4 bg-[#b69974] text-white font-bold">
            Create Account
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={openNav} className="lg:hidden cursor-pointer">
          <HiBars3BottomRight className="w-9 h-9 text-[#dfc39f]" />
        </div>
      </div>
    </div>
  );
}