"use client";

import { motion } from "framer-motion";

export default function Nebula() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-[-250px]
        top-[-200px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-violet-600/20
        blur-[150px]
      "
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-250px]
        bottom-[-250px]
        h-[700px]
        w-[700px]
        rounded-full
        bg-cyan-500/15
        blur-[170px]
      "
      />
    </>
  );
}