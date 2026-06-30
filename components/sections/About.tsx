"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Target, Brain, Zap, CloudCog } from "lucide-react";

interface AttributeItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const attributes: AttributeItem[] = [
  {
    title: "Logic & Architecture",
    description: "Designing scalable AI agent integrations and automated n8n workflows.",
    icon: <Brain size={28} className="text-[#8B5CF6]" />,
  },
  {
    title: "Rapid Execution",
    description: "Quickly adapting to new frameworks, LLMs, and cloud-native environments.",
    icon: <Zap size={28} className="text-[#22D3EE]" />,
  },
  {
    title: "Cloud & Systems",
    description: "Certified via Hack2Skill Gen AI Academy & Google Cloud Skills Boost.",
    icon: <CloudCog size={28} className="text-[#3B82F6]" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
};

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 z-20">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black tracking-tight text-[#F8FAFC]">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE]">Profile</span>
          </h2>
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-60" />
        </motion.div>

        {/* Centered Main Identity Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          // Added native Tailwind glass classes instead of .glass-panel
          className="w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 flex flex-col items-center text-center gap-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <div className="space-y-4 relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22D3EE]"></span>
              </span>
              <p className="font-body text-[#22D3EE] text-xs font-bold uppercase tracking-[0.2em]">System Online</p>
            </div>
            <h3 className="font-heading text-4xl font-bold text-[#F8FAFC]">Piyush Dinesh More</h3>
          </div>
          
          <p className="font-body text-base md:text-lg text-[#94A3B8] leading-relaxed relative z-10 max-w-xl">
            Computer Technology Student engineering the future at the intersection of AI, robust software architectures, and automated workflows.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 pt-6 border-t border-white/10 relative z-10 w-full justify-center">
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <MapPin size={18} className="text-[#8B5CF6]" />
              <span className="font-body text-sm tracking-wide">Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <Target size={18} className="text-[#22D3EE]" />
              <span className="font-body text-sm tracking-wide">AI Development & Automation</span>
            </div>
          </div>
        </motion.div>

        {/* Centered 3-Column Attributes Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {attributes.map((attr, index) => (
            <motion.div
              key={`attr-${index}`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 flex flex-col gap-5 items-center text-center group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {attr.icon}
              </div>
              <div className="space-y-2 z-10">
                <h4 className="font-heading text-xl font-bold text-[#F8FAFC]">{attr.title}</h4>
                <p className="font-body text-sm text-[#94A3B8] leading-relaxed">{attr.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}