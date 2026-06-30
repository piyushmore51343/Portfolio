"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiMysql, SiTensorflow } from "react-icons/si";

const experienceData = {
  role: "AI & Automation Intern",
  company: "Rich System Solutions",
  achievements: [
    "Engineered automated data analysis pipelines.",
    "Designed scalable AI integrations utilizing n8n workflows.",
    "Developed and deployed ML regression models.",
    "Analyzed Titanic, Netflix, and Boston Housing datasets."
  ],
};

const techStack = [
  { name: "Python", icon: <SiPython className="text-[#3776AB]" />, info: "> SYS: Core language logic." },
  { name: "Pandas", icon: <SiPandas className="text-[#150458] bg-white rounded-full p-0.5" />, info: "> SYS: Data manipulation." },
  { name: "NumPy", icon: <SiNumpy className="text-[#013243] bg-white rounded-sm p-0.5" />, info: "> SYS: Scientific computing." },
  { name: "Scikit", icon: <SiScikitlearn className="text-[#F7931E]" />, info: "> SYS: Predictive modeling." },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, info: "> SYS: Database architecture." },
  { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" />, info: "> SYS: Machine learning platform." },
];

export default function Experience() {
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!hoveredInfo) {
      setDisplayText("[ AWAITING ASSET ]");
      return;
    }
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      setDisplayText((prev) => prev + hoveredInfo.charAt(i));
      i++;
      if (i >= hoveredInfo.length) clearInterval(timer);
    }, 20);
    return () => clearInterval(timer);
  }, [hoveredInfo]);

  return (
    // Forced pt-[120px] and justify-start
    <section
  id="experience"
  className="relative w-full min-h-screen pt-40 pb-20 px-6 md:px-12 flex flex-col items-center justify-start z-20 scroll-mt-32"
>
      
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#22D3EE]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Reduced max-width to 3xl for compact look */}
      <div className="max-w-3xl mx-auto w-full flex flex-col gap-10 items-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-heading text-4xl md:text-5xl font-black text-[#F8FAFC]"
        >
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">Experience</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
          // Reduced padding to p-8
          className="w-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg rounded-3xl p-8 flex flex-col items-center text-center gap-6"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 rounded-xl bg-[#0B1023] shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Briefcase size={28} className="text-[#22D3EE]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">{experienceData.role}</h3>
              <p className="text-[#22D3EE] font-body uppercase tracking-[0.2em] text-xs font-bold">{experienceData.company}</p>
            </div>
          </div>

          <ul className="space-y-3 font-body text-sm md:text-base text-[#94A3B8] max-w-xl w-full flex flex-col">
            {experienceData.achievements.map((item, i) => (
              <li key={i} className="flex flex-row items-start gap-3 group text-left">
                <span className="text-[#22D3EE] text-lg leading-none mt-0.5">◈</span> 
                <span className="group-hover:text-[#F8FAFC] transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring" }}
                onMouseEnter={() => setHoveredInfo(tech.info)}
                onMouseLeave={() => setHoveredInfo(null)}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-crosshair group hover:bg-white/10 transition-all aspect-square"
              >
                <div className="text-2xl group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="font-body text-[9px] uppercase font-bold text-[#94A3B8] tracking-widest text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-16 w-full flex flex-col justify-center items-center p-4 rounded-2xl bg-[#050816]/80 border border-[#22D3EE]/30 shadow-[inset_0_0_15px_rgba(34,211,238,0.1)] relative overflow-hidden"
          >
            <p className="font-mono text-xs md:text-sm text-[#22D3EE] tracking-wide text-center z-10">
              {displayText}
              <span className="animate-pulse">_</span>
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}