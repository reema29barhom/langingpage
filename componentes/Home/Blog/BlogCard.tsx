"use client"; // إضافة هذا السطر لأننا نستخدم hooks
import Image from "next/image";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { FiArrowDownRight } from "react-icons/fi";
import { useTranslations } from "next-intl";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  const t = useTranslations("BlogCard");

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <Image
        src={image}
        width={300}
        height={200}
        alt="blog image"
        className="w-full"
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaRegFolderOpen className="text-orange-700 w-6 h-6" />
            <p className="font-semibold text-gray-800 text-sm">{t("category")}</p>
          </div>
          <div className="flex items-center space-x-3">
            <BiCalendar className="text-orange-700 w-6 h-6" />
            <p className="font-semibold text-gray-800 text-sm">
              {t("date")}
            </p>
          </div>
        </div>

        <h1 className="text-lg mt-6 font-bold text-gray-900 hover:text-blue-700 transition-all duration-300 cursor-pointer">
          {title}
        </h1>

        <button className="relative inline-block mt-8 cursor-pointer group">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[2px] uppercase text-[#1a1a1a]">
            {t("readMore")}
            <FiArrowDownRight className="text-[#b79d7b] text-xl transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="block w-full h-px group-hover:w-0 transition-all duration-300 bg-[#514f4f] mt-2"></span>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;