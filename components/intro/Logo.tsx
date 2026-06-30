"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="text-6xl md:text-8xl font-black tracking-[12px]"
    >
      <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
        PIYUSH
      </span>

      <span className="text-white"> OS</span>
    </motion.h1>
  );
}