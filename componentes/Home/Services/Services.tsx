import React from "react";
import Image from "next/image";
import ServiceCard from "./ServicesCard";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <div className="pt-20 pb-20 relative">
      <Image
        src="/images/service_bg.png"
        alt="bg"
        width={300}
        height={300}
        className="absolute right-0 top-0 opacity-20"
      />

      <div className="w-[80%] mx-auto">
        <h1 className="text-[#eeb956] text-lg font-medium tracking-widest">
          {t("subheading")}
        </h1>

        <h1 className="text-3xl md:text-5xl mt-4 font-bold text-gray-900 dark:text-white">
          {t.rich("heading", {
            b: (chunks) => <span>{chunks}</span>,
            br: () => <br />,
          })}
        </h1>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center"
        >
          <div data-aos="fade-right" data-aos-delay="100">
            <ServiceCard image="/images/s1.png" icon="/images/sicon1.png" title={t("cards.1.title")} description={t("cards.1.desc")} />
          </div>
          <div data-aos="fade-right" data-aos-delay="200">
            <ServiceCard image="/images/s2.png" icon="/images/sicon2.png" title={t("cards.2.title")} description={t("cards.2.desc")} />
          </div>
          <div data-aos="fade-right" data-aos-delay="300">
            <ServiceCard image="/images/s3.png" icon="/images/sicon3.png" title={t("cards.3.title")} description={t("cards.3.desc")} />
          </div>
          <div data-aos="fade-right" data-aos-delay="400">
            <ServiceCard image="/images/s4.png" icon="/images/sicon4.png" title={t("cards.4.title")} description={t("cards.4.desc")} />
          </div>
        </div>
      </div>
    </div>
  );
}