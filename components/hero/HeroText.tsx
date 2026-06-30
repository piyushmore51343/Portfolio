"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="flex flex-col space-y-4 text-left">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-body text-[#22D3EE] tracking-[0.2em] text-sm uppercase"
      >
        System Initialized
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-heading text-5xl md:text-7xl font-black tracking-tight"
      >
        <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
          PIYUSH OS
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-2"
      >
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#F8FAFC]">
          Piyush Dinesh More
        </h2>
        <h3 className="font-body text-lg md:text-xl text-[#94A3B8]">
          Computer Technology Student | AI & Automation Enthusiast
        </h3>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-body text-base text-[#94A3B8] max-w-lg leading-relaxed pt-2"
      >
        Exploring AI, automation, and modern software solutions. 
        Building the future one line of code at a time.
      </motion.p>
    </div>
  );
}