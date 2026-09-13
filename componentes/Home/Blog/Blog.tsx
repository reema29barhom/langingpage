import React from "react";
import BlogCard from "./BlogCard";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("Blog");

  return (
    <div className="pt-16 pb-16">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        {t("subheading")}
      </h2>

      <h1 className="text-3xl md:text-5xl mt-4 text-black dark:text-white font-bold text-center">
        {t.rich("heading", { br: () => <br /> })}
      </h1>

      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="0"
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20"
      >
        <BlogCard
          image="/images/b1.png"
          title={t("cards.1.title")}
        />
        <BlogCard
          image="/images/b2.png"
          title={t("cards.2.title")}
        />
        <BlogCard
          image="/images/b3.png"
          title={t("cards.3.title")}
        />
      </div>
    </div>
  );
}