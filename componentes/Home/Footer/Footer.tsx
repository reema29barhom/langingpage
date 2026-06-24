import React from "react";
import Logo from "@/componentes/Helper/Logo";
import Image from "next/image";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="pt-16 pb-16 bg-gray-900">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* 1st Part */}
        <div>
          <Logo />
          <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
            Conditions Terms of Use Ours feturesin Services ew Guests VisitThe
            Team List Guests VisitThe Team List
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <FaFacebookF className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-300">
              <FaYoutube className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-all duration-300">
              <FaInstagram className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-500 transition-all duration-300">
              <FaTwitter className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* 2nd Part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">Address</h1>
          <div className="mt-8">
            <div className="flex items-center space-x-5">
              <FaPaperPlane className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">
                Old city Street, USA <br />
                1212 New york-3500
              </p>
            </div>
            <div className="flex items-center space-x-5 mt-5 mb-5">
              <FaPhone className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">+88 014 420420</p>
            </div>
            <div className="flex items-center space-x-5">
              <IoMailOpen className="w-5 h-5 text-white" />
              <p className="font-medium text-sm text-white">example@gmail.com</p>
            </div>
          </div>
        </div>

        {/* 3rd Part */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-white">More Services</h1>
          <div className="mt-8">
            {["UI Design", "UX Design", "Web App", "Digital Marketing", "Video Editing"].map((service) => (
              <div key={service} className="flex items-center mb-2">
                <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                <p className="font-medium text-sm text-white">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4th Part */}
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-white">Newsletter</h1>
          <div className="mt-8">
            <p className="font-medium text-sm text-white">
              It is a long established fact that a reader will be distracted
            </p>
            <div className="mt-5 flex items-center space-x-4">
              <Image src="/images/f.jpg" alt="img" width={80} height={80} />
              <div className="flex-1">
                <div className="flex items-center">
                  <BiCalendar className="text-amber-300 w-6 h-6 mr-2" />
                  <p className="text-white text-sm font-semibold">25 October, 2025</p>
                </div>
                <p className="mt-2 text-white font-bold text-sm">The standard chunk of Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom part */}
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="mt-8 text-gray-300">© Webdev Warriors 2025 | All Rights Reserved</p>
      </div>
    </div>
  );
}