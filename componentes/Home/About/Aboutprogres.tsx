import React from "react";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { useTranslations } from "next-intl"; // استيراد المكتبة

export default function Aboutprogres() {
  const t = useTranslations("AboutProgress"); // ربط القسم

  const data = [
    {
      id: 1,
      percent: 95,
      icon: <FaBullseye className="text-white text-3xl" />,
    },
    {
      id: 2,
      percent: 90,
      icon: <HiOutlineChartBar className="text-white text-3xl" />,
    },
  ];

  return (
    <div className="space-y-8 py-6 md:py-10">
      {data.map((item, idx) => (
        <div
          key={item.id}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay={450 + (idx + 1) * 150}
          className="flex items-center gap-6 bg-white rounded-xl shadow p-4"
        >
          {/* Icon */}
          <div className="bg-[#b58b58] p-5 rounded-md flex items-center justify-center">
            {item.icon}
          </div>

          {/* Text + Progress */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800 text-lg">
                {/* استدعاء الترجمة باستخدام الـ id */}
                {t(item.id.toString())}
              </h3>

              <p className="font-semibold text-gray-800">
                {item.percent}%
              </p>
            </div>

            {/* Progress bar background */}
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b58b58] rounded-full transition-all duration-500"
                style={{
                  width: `${item.percent}%`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}