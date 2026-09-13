"use client";
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <div className="py-24">
      <div className="flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto">
          
          {/* FORM */}
          <div data-aos="zoom-in" className="lg:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm transition-colors">
            <input type="text" placeholder={t("form.name")} className="border-2 mt-6 border-gray-300 dark:border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-gray-400 dark:placeholder:text-white text-gray-900 dark:text-white bg-transparent outline-none focus:border-[#b69974] transition-all" />
            <input type="email" placeholder={t("form.email")} className="border-2 mt-6 border-gray-300 dark:border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-gray-400 dark:placeholder:text-white text-gray-900 dark:text-white bg-transparent outline-none focus:border-[#b69974] transition-all" />
            <input type="text" placeholder={t("form.subject")} className="border-2 mt-6 border-gray-300 dark:border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-gray-400 dark:placeholder:text-white text-gray-900 dark:text-white bg-transparent outline-none focus:border-[#b69974] transition-all" />
            <textarea rows={5} placeholder={t("form.message")} className="border-2 mt-6 border-gray-300 dark:border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-gray-400 dark:placeholder:text-white text-gray-900 dark:text-white bg-transparent outline-none focus:border-[#b69974] transition-all resize-none" />
            <button className="w-full px-6 py-3 bg-[#b69974] uppercase cursor-pointer rounded-full text-white font-semibold hover:bg-[#a3855f] transition-all">
              {t("form.submit")}
            </button>
          </div>

          {/* CARDS */}
          <div data-aos="zoom-out" data-aos-delay="100" className="lg:col-span-1 space-y-4 w-full">
            
            {/* Call Card */}
            <div className="p-6 bg-blue-700 dark:bg-blue-900 flex items-center space-x-4 rtl:space-x-reverse rounded-xl transition-colors">
              <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-blue-700 dark:text-blue-900 transform rtl:rotate-180 transition-transform" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold opacity-80">{t("info.call")}</h2>
                <h1 className="text-[18px] md:text-[20px] font-bold text-white tracking-wide">+555 67676734</h1>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-blue-700 dark:bg-blue-900 flex items-center space-x-4 rtl:space-x-reverse rounded-xl transition-colors">
              <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-blue-700 dark:text-blue-900 transform rtl:rotate-180 transition-transform" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold opacity-80">{t("info.emailUs")}</h2>
                <h1 className="text-[18px] md:text-[20px] font-bold text-white break-all">example@gmail.com</h1>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-blue-700 dark:bg-blue-900 flex items-center space-x-4 rtl:space-x-reverse rounded-xl transition-colors">
              <div className="w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-blue-700 dark:text-blue-900 transform rtl:rotate-180 transition-transform" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold opacity-80">{t("info.address")}</h2>
                <h1 className="text-[18px] md:text-[20px] font-bold text-white">123 Street, City</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}