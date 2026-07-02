'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntro } from '@/hooks/useIntro';
import Logo from './Logo';
import LoadingBar from './LoadingBar';
import BootMessage from './BootMessage';

interface IntroProps {
  onComplete?: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const { isBooting, progress } = useIntro(2600);

  useEffect(() => {
    if (!isBooting) {
      onComplete?.();
    }
  }, [isBooting, onComplete]);

  return (
    <AnimatePresence>
      {isBooting && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(12px)',
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#050816]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <Logo />

          <div className="flex flex-col items-center gap-4">
            <LoadingBar progress={progress} />
            <BootMessage progress={progress} />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 font-mono text-[10px] tracking-[0.3em] text-slate-500"
          >
            AI & AUTOMATION ENGINEER
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}