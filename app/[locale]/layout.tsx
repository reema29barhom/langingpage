import type { Metadata } from "next";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Navcontainer from "@/componentes/Home/Navbar/Navcontanier";
import Footer from "@/componentes/Home/Footer/Footer";
import ScrollToTop from "@/componentes/Helper/ScrollToTop";
import { ThemeProvider } from "@/componentes/ThemeProvider";

export const metadata: Metadata = {
  title: "Corporate Landing Page",
  description: "Built with Next.js",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // فك الـ Promise للحصول على الـ locale (مطلوب في Next.js الحديث)
  const { locale } = await params;

  // الحصول على الترجمة تلقائياً
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-white dark:bg-[#1f242c] text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Navcontainer />
            <main>
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}