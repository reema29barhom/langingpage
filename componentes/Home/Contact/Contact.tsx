import React from "react";
import { FaArrowRight } from "react-icons/fa";

// قمت بإزالة دالة الترجمة مؤقتاً لنضمن استقرار الكود.
// بمجرد أن يعمل التصميم، سنضيف الترجمة بطريقة ثابتة وآمنة.

interface ContactProps {
  locale: string;
}

export default function Contact({ locale }: ContactProps) {
  return (
    <div className="py-24 bg-gray-200 overflow-hidden">
      <div className="flex items-center min-h-screen">
        {/* شبكة توزيع المحتوى */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto">
          
          {/* FORM - قسم استمارة التواصل */}
          <div data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="0"
            className="lg:col-span-2 bg-gray-900 rounded-xl p-6">

            <input
              type="text"
              placeholder="Name"
              className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent outline-none focus:border-[#b69974] transition-all"
            />

            <input
              type="email"
              placeholder="Email"
              className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent outline-none focus:border-[#b69974] transition-all"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white text-white bg-transparent outline-none focus:border-[#b69974] transition-all"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white text-white bg-transparent outline-none focus:border-[#b69974] transition-all resize-none"
            />

            <button className="w-full px-6 py-3 bg-[#b69974] uppercase cursor-pointer rounded-full text-white font-semibold hover:bg-[#a3855f] transition-all">
              Submit
            </button>
          </div>

          {/* CARDS - قسم كروت معلومات التواصل */}
          <div data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100" 
            className="lg:col-span-1 space-y-4 w-full">

            {/* Call Card */}
            <div className="p-6 bg-blue-800 flex items-center space-x-4 rtl:space-x-reverse rounded-xl">
              <div className="w-15 h-15 min-w-[3.75rem] min-h-[3.75rem] rounded-full bg-[#d8ff36] flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-blue-800 transform rtl:rotate-180 transition-transform" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold opacity-80">Call Us</h2>
                <h1 className="text-[18px] md:text-[20px] font-bold text-white tracking-wide">
                  +555 67676734
                </h1>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-blue-800 flex items-center space-x-4 rtl:space-x-reverse rounded-xl">
              <div className="w-15 h-15 min-w-[3.75rem] min-h-[3.75rem] rounded-full bg-[#d8ff36] flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-blue-800 transform rtl:rotate-180 transition-transform" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold opacity-80">Email Us</h2>
                <h1 className="text-[18px] md:text-[20px] font-bold text-white break-all">
                  example@gmail.com
                </h1>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-blue-800 flex items-center space-x-4 rtl:space-x-reverse rounded-xl">
              <div className="w-15 h-15 min-w-[3.75rem] min-h-[3.75rem] rounded-full bg-[#d8ff36] flex items-center justify-center flex-shrink-0">
                <FaArrowRight className="text-blue-800 transform rtl:rotate-180 transition-transform" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold opacity-80">Address</h2>
                <h1 className="text-[18px] md:text-[20px] font-bold text-white">
                  123 Street, City
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}