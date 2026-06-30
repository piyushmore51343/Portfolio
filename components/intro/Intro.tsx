"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const messages = [
    "INITIALIZING PIYUSH OS...",
    "LOADING CORE MODULES...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    // Sequence the text changes
    const timer1 = setTimeout(() => setTextIndex(1), 700);
    const timer2 = setTimeout(() => setTextIndex(2), 1500);

    // Simulate progress bar (0 to 100 in ~2 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 2000 / 20); // 20 steps over 2 seconds

    // Complete the intro sequence at 2.5 seconds
    const finishTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(finishTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center w-72">
        <div className="h-6 mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="font-body text-xs tracking-[0.25em] text-[#22D3EE] uppercase text-center"
            >
              {messages[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Neon Progress Bar */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#22D3EE]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        
        <div className="mt-3 text-[#94A3B8] font-body text-[10px] tracking-widest w-full flex justify-end">
          {progress}%
        </div>
      </div>
    </motion.div>
  );
}