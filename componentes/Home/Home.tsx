"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import NavContanier from "./Navbar/Navcontanier";
import About from "./About/About";
import Services from "./Services/Services";
import WorkProcess from "./WorkProcess/WorkProcess";
import Project from "./Project/Project";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <WorkProcess />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
}