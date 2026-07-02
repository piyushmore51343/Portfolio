"use client";

import { motion } from "framer-motion";
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
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "Pandas", icon: <SiPandas className="text-[#150458] bg-white rounded-full p-0.5" /> },
  { name: "NumPy", icon: <SiNumpy className="text-[#013243] bg-white rounded-sm p-0.5" /> },
  { name: "Scikit", icon: <SiScikitlearn className="text-[#F7931E]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-start z-20 scroll-mt-32">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16 items-center relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-wide">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">Experience</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#22D3EE] to-transparent mr-auto ml-[10%] opacity-80" />
        </motion.div>

        {/* Content - Borderless */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col md:flex-row gap-12 md:gap-24 items-start"
        >
          <div className="flex flex-col gap-2 md:w-1/3">
            <h3 className="text-2xl font-bold text-[#F8FAFC]">{experienceData.role}</h3>
            <p className="text-[#22D3EE] text-xs font-bold uppercase tracking-widest">{experienceData.company}</p>
          </div>

          <ul className="space-y-4 text-sm md:text-base text-[#94A3B8] flex-1">
            {experienceData.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#8B5CF6] text-lg leading-none mt-0.5">•</span> 
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack - Floating */}
        <div className="w-full pt-10 border-t border-white/10 mt-4">
          <p className="text-[#94A3B8] text-xs font-bold uppercase tracking-widest text-center mb-8">Technologies Utilized</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="text-3xl">{tech.icon}</div>
                <span className="text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}