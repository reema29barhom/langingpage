"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    // نتحقق من اللغة الحالية ونبدلها
    const newLocale = pathname.startsWith("/ar") ? "en" : "ar";
    const newPath = pathname.replace(/^\/(ar|en)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-[#b69974] text-white rounded-full font-bold hover:bg-[#a3855f] transition-all"
    >
      {pathname.startsWith("/ar") ? "EN" : "عربي"}
    </button>
  );
}