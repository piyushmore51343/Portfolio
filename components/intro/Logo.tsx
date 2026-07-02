'use client';

import { motion } from 'framer-motion';

const letters = 'PIYUSH OS'.split('');

export default function Logo() {
  return (
    <div className="flex items-center justify-center" aria-label="PIYUSH OS">
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            delay: 0.15 + i * 0.045,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`font-space text-4xl font-bold tracking-[0.2em] sm:text-5xl md:text-6xl ${
            letter === ' '
              ? 'w-4 md:w-6'
              : 'bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent'
          }`}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
}