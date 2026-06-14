"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Menu from "@/components/Menu";
import WhyLoveUs from "@/components/WhyLoveUs";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <SmoothScroll />
      <div className="noise" aria-hidden />
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-gold-light via-gold to-gold-deep"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Menu />
        <WhyLoveUs />
        <Reviews />
        <Gallery />
        <Hours />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
