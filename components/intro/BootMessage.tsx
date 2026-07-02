'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  'Initializing core systems...',
  'Loading neural interface...',
  'Calibrating environment...',
  'Welcome to PIYUSH OS',
];

export default function BootMessage({ progress }: { progress: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const stepSize = 100 / messages.length;
    const next = Math.min(
      messages.length - 1,
      Math.floor(progress / stepSize)
    );
    setIndex(next);
  }, [progress]);

  return (
    <div className="h-5 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-xs tracking-widest text-slate-400 sm:text-sm"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}