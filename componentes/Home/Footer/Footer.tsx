"use client";
import React from "react";
import Logo from "@/componentes/Helper/Logo";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaFacebookF, FaTwitter, FaPaperPlane, FaPhone } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const services = t.raw("services_list") as string[];

  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* 1st Part */}
        <div>
          <Logo />
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 leading-6 font-semibold">{t("description")}</p>
          <div className="flex items-center space-x-4 mt-6">
            {[FaFacebookF, FaYoutube, FaInstagram, FaTwitter].map((Icon, i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-300">
                <Icon className="w-6 h-6 text-gray-800 dark:text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* 2nd Part (Address) */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">{t("address")}</h1>
          <div className="mt-8 space-y-5">
            <div className="flex items-center space-x-5"><FaPaperPlane className="w-5 h-5 text-gray-700 dark:text-white" /><p className="font-medium text-sm text-gray-700 dark:text-white whitespace-pre-line">{t("address_details")}</p></div>
            <div className="flex items-center space-x-5"><FaPhone className="w-5 h-5 text-gray-700 dark:text-white" /><p className="font-medium text-sm text-gray-700 dark:text-white">+88 014 420420</p></div>
            <div className="flex items-center space-x-5"><IoMailOpen className="w-5 h-5 text-gray-700 dark:text-white" /><p className="font-medium text-sm text-gray-700 dark:text-white">example@gmail.com</p></div>
          </div>
        </div>

        {/* 3rd Part (Services) */}
        <div className="lg:mx-auto">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">{t("services")}</h1>
          <div className="mt-8">
            {services.map((service) => (
              <div key={service} className="flex items-center mb-2">
                <MdKeyboardDoubleArrowRight className="w-7 h-7 text-[#b69974]" />
                <p className="font-medium text-sm text-gray-700 dark:text-white">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4th Part (Newsletter) */}
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">{t("newsletter")}</h1>
          <div className="mt-8">
            <p className="font-medium text-sm text-gray-600 dark:text-gray-300">{t("newsletter_desc")}</p>
            <div className="mt-5 flex items-center space-x-4">
              <Image src="/images/f.jpg" alt="img" width={80} height={80} className="rounded" />
              <div>
                <div className="flex items-center"><BiCalendar className="text-amber-500 w-6 h-6 mr-2" /><p className="text-gray-700 dark:text-white text-sm font-semibold">25 October, 2025</p></div>
                <p className="mt-2 text-gray-900 dark:text-white font-bold text-sm">{t("news_title")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 w-[80%] mx-auto border-gray-300 dark:border-gray-700 mt-8">
        <p className="mt-8 text-gray-600 dark:text-gray-300">{t("copyright")}</p>
      </div>
    </div>
  );
}