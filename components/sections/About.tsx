"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Brain, Zap, CloudCog } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 z-20">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-20 items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-wide">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]">Profile</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-transparent mr-auto ml-[10%] opacity-80" />
        </motion.div>

        {/* Identity - Borderless */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center text-center gap-6 relative"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22D3EE]"></span>
            </span>
            <p className="text-[#22D3EE] text-[10px] font-bold uppercase tracking-[0.2em]">System Online</p>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] tracking-wide">Piyush Dinesh More</h3>
          
          <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
            Computer Technology Student engineering the future at the intersection of AI, robust software architectures, and automated workflows.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <MapPin size={18} className="text-[#8B5CF6]" />
              <span className="text-xs font-bold uppercase tracking-widest">Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <Target size={18} className="text-[#22D3EE]" />
              <span className="text-xs font-bold uppercase tracking-widest">AI Development & Automation</span>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Attributes - Borderless */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mt-4 text-left">
          {[
            { title: "Logic & Architecture", desc: "Designing scalable AI agent integrations and automated n8n workflows.", icon: <Brain size={28} className="text-[#8B5CF6]" /> },
            { title: "Rapid Execution", desc: "Quickly adapting to new frameworks, LLMs, and cloud-native environments.", icon: <Zap size={28} className="text-[#22D3EE]" /> },
            { title: "Cloud & Systems", desc: "Certified via Hack2Skill Gen AI Academy & Google Cloud Skills Boost.", icon: <CloudCog size={28} className="text-[#3B82F6]" /> }
          ].map((attr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col gap-4 items-start"
            >
              <div className="mb-1">{attr.icon}</div>
              <h4 className="text-xl font-bold text-[#F8FAFC]">{attr.title}</h4>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{attr.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}