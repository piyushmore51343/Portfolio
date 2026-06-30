"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-wrap gap-4 pt-4"
    >
      <a href="#projects" className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-medium flex items-center gap-2 overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <span className="relative z-10 flex items-center gap-2 font-body">
          View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </a>

      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full glass-panel text-[#F8FAFC] font-medium flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 border border-white/10 hover:border-white/20">
        <span className="font-body flex items-center gap-2">
          Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
        </span>
      </a>

      <a href="#contact" className="group px-6 py-3 rounded-full bg-transparent text-[#94A3B8] font-medium flex items-center gap-2 hover:text-[#22D3EE] transition-all border border-transparent hover:border-[#22D3EE]/30">
        <span className="font-body flex items-center gap-2">
          Contact <Mail size={18} />
        </span>
      </a>
    </motion.div>
  );
}