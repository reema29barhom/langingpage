import React from "react";

type Props = {
  number: string;
  title: string;
  description: string; // إضافة الوصف هنا
  isExtraClass?: boolean;
};

export default function WorkProcessCard({
  number,
  title,
  description, // استقبال الوصف
  isExtraClass = false,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="0"
      className={`flex items-center gap-3 ${
        isExtraClass ? "lg:border-r-2 lg:border-gray-300" : ""
      }`}
    >
      <div className="text-[40px] md:text-[60px] lg:text-[80px] font-bold mr-5 leading-none text-amber-600">
        {number}
      </div>

      <div>
        <h1 className="text-[#252525] font-semibold text-xl">
          {title}
        </h1>

        <p className="lg:w-[90%] mt-3 leading-8 font-medium text-gray-700">
          {description} {/* استخدام الوصف المترجم */}
        </p>
      </div>
    </div>
  );
}