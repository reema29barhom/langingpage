import React from "react";
import WorkProcessCard from "./WorkProcessCard";
import { useTranslations } from "next-intl";

export default function WorkProcess() {
  const t = useTranslations("WorkProcess");

  return (
    <div className="pt-24 pb-24">
      <h1 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        {t("subheading")}
      </h1>
      
      <h1 className="text-3xl md:text-5xl mt-4 font-bold text-center text-gray-900 dark:text-white">
        {t.rich("heading", { br: () => <br /> })}
      </h1>
      
      {/* work process cards */}
      <div className="w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14 text-gray-900 dark:text-white">
        <WorkProcessCard 
          number="01" 
          title={t("cards.1.title")} 
          description={t("cards.1.desc")} 
          isExtraClass 
        />
        <WorkProcessCard 
          number="02" 
          title={t("cards.2.title")} 
          description={t("cards.2.desc")} 
        />
        <WorkProcessCard 
          number="03" 
          title={t("cards.3.title")} 
          description={t("cards.3.desc")} 
          isExtraClass 
        />
        <WorkProcessCard 
          number="04" 
          title={t("cards.4.title")} 
          description={t("cards.4.desc")} 
        />
      </div>
    </div>
  );
}