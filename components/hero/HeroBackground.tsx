"use client";

import { motion } from 'framer-motion';

export default function HeroAstronaut() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px] md:h-[450px] md:w-[450px] z-10"
    >
      {/* Outer glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-[var(--primary)] opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 rounded-full border border-[var(--accent)] opacity-20"
      />

      {/* Core glass orb */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center h-[70%] w-[70%] rounded-full border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent shadow-[0_0_80px_rgba(139,92,246,0.25)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--secondary)]/10 via-transparent to-[var(--primary)]/10" />
        
        {/* Floating Astronaut inside the Orb */}
        <motion.div
           animate={{ y: [0, 10, 0], rotate: [0, 2, -2, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
           className="text-7xl sm:text-8xl md:text-9xl drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] z-20"
        >
          
        </motion.div>
      </motion.div>

      {/* Orbiting accent dot */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
      </motion.span>
    </motion.div>
  );
}