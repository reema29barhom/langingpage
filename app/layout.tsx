import type { Metadata } from "next";
import "./globals.css";

import Navcontainer from "@/componentes/Home/Navbar/Navcontanier";
import Footer from "@/componentes/Home/Footer/Footer";
import ScrollToTop from "@/componentes/Helper/ScrollToTop";

export const metadata: Metadata = {
  title: "Corporate Landing Page",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1f242c] text-white">

        <Navcontainer />

        <main>
          {children}
        </main>

        <Footer />
        <ScrollToTop />

      </body>
    </html>
  );
}