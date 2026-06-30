"use client";

import { motion } from "framer-motion";

export default function LoadingBar() {
  return (
    <div className="mt-10 w-[320px] max-w-[90%]">
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500"
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
        className="mt-3 text-sm text-slate-500"
      >
        System Ready
      </motion.div>
    </div>
  );
}