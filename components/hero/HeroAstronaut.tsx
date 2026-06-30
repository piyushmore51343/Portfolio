"use client";

import { motion } from "framer-motion";

export default function HeroAstronaut() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center pointer-events-none select-none">
      {/* Glowing Orb / Planet behind */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#8B5CF6]/20 to-[#22D3EE]/20 blur-3xl"
      />
      
      {/* Floating Astronaut Box (Glassmorphism Mockup) */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-72 h-80 glass-panel rounded-3xl border border-white/10 bg-[#0B1023]/40 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        {/* Placeholder for actual 3D model or image */}
        <div className="w-32 h-32 rounded-full border border-[#3B82F6]/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 rounded-full border border-t-[#22D3EE] animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-4xl">👨‍🚀</span>
        </div>
        
        <div className="w-full space-y-3">
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#22D3EE]" 
              animate={{ width: ["0%", "100%", "0%"] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[#94A3B8] font-body uppercase tracking-widest">
            <span>Core</span>
            <span className="text-[#22D3EE]">Online</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}