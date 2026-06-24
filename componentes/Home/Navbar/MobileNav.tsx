import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: props) => {
  return (
    <div>
      {/* Overlay (خلفية معتمة عند فتح القائمة) */}
      <div
        className={`fixed inset-0 bg-black/70 transition-all duration-500 z-40 ${
          showNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      />
      
      {/* القائمة الجانبية */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[#e9f7c4] z-50 transform transition-all duration-500 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 w-6 h-6 cursor-pointer"
        />
        <div className="flex flex-col justify-center h-full space-y-6">
          {NAVLINKS.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-black w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;