"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the intro after 2.5 seconds
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }} // Zooms in slightly as it fades out
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] backdrop-blur-3xl"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-40 w-40 sm:h-56 sm:w-56"
          >
            <Image
              src="/logo-space.png"
              alt="PIYUSH.OS Booting"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]"
              priority
            />
          </motion.div>
          
          {/* Boot-up Text Animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 text-sm sm:text-lg font-bold text-white tracking-[0.3em] flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-pulse" />
            INITIALIZING <span className="text-[#22D3EE]">PIYUSH.OS</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}