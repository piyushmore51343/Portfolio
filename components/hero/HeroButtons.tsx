"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
// Assuming you have HERO_CONTENT, if not, just use hardcoded strings for now.
import { HERO_CONTENT } from '@/constants/hero'; 

function scrollToId(href: string) {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroButtons() {
  // Fallbacks just in case constants aren't fully set up yet
  const primaryLabel = HERO_CONTENT?.primaryCTA?.label || "View My Work";
  const primaryHref = HERO_CONTENT?.primaryCTA?.href || "#projects";
  const secondaryLabel = HERO_CONTENT?.secondaryCTA?.label || "Contact Me";
  const secondaryHref = HERO_CONTENT?.secondaryCTA?.href || "#contact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col items-center gap-5 sm:flex-row md:justify-start pt-4 w-full"
    >
      <button
        onClick={() => scrollToId(primaryHref)}
        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white glow transition-all duration-300 hover:scale-105 hover:bg-[#7c3aed]"
      >
        <span className="relative z-10 tracking-wide">{primaryLabel}</span>
        <ArrowRight
          size={18}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
        {/* Hover light sweep */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </button>

      <button
        onClick={() => scrollToId(secondaryHref)}
        className="group flex items-center gap-2 rounded-full glass border-[var(--glass-border)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--glass)] hover:scale-105"
      >
        <Mail size={18} className="transition-transform duration-300 group-hover:rotate-12" />
        <span className="tracking-wide">{secondaryLabel}</span>
      </button>
    </motion.div>
  );
}