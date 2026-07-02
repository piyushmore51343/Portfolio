"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroText() {
  // FIX: Corrected "Cmputer" to "Computer"
  const fullText = "Computer Technology Student | AI & Automation";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-start w-full z-10 text-left">
      
      {/* System Initialized Tag */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 w-max"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-400 text-[10px] tracking-[0.2em] uppercase font-bold">
          System Initialized
        </span>
      </motion.div>
      
      {/* Massive PIYUSH OS Title Stack */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex flex-col mb-8"
      >
        <h1 className="text-[75px] md:text-[100px] lg:text-[120px] font-black leading-[0.85] tracking-tighter text-white">
          PIYUSH
        </h1>
        <h1 className="text-[75px] md:text-[100px] lg:text-[120px] font-black leading-[0.9] tracking-tighter bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          OS
        </h1>
      </motion.div>

      {/* Name and Subtitle */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col space-y-4 mb-5"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-hollow leading-tight pb-1">
          Hi, I'm Piyush<br /> Dinesh More
        </h2>
        
        {/* Typewriter Container */}
        <div className="h-6 md:h-8">
          <h3 className="text-cyan-400 text-sm md:text-base lg:text-lg font-bold tracking-wide">
            {displayText}
            <span className="animate-pulse text-white ml-1">|</span>
          </h3>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed"
      >
        Exploring AI, automation, and modern software solutions. 
        Building the future, one line of code at a time.
      </motion.p>
    </div>
  );
}