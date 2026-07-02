"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpaceBackground from "@/components/background/SpaceBackground";
import Intro from "@/components/intro/Intro";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    // Added id="home" here for the logo link to trigger scroll to top
    <main id="home" className="relative min-h-screen w-full select-none overflow-x-hidden bg-[#050816]">
      <AnimatePresence mode="wait">
        {!introComplete && (
          <Intro key="intro" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {introComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full"
        >
          <SpaceBackground />
          <Navbar />
          
          <div className="flex flex-col items-center w-full">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      )}
    </main>
  );
}