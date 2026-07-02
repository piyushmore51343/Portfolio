"use client";

import { motion } from "framer-motion";
import { Code, Globe, Database, BrainCircuit } from "lucide-react";

const skillCategories = [
  { title: "Programming", icon: <Code size={24} />, skills: ["Python", "C", "C++"], glow: "#8B5CF6" },
  { title: "Web Dev", icon: <Globe size={24} />, skills: ["HTML", "CSS", "JS", "Next.js"], glow: "#22D3EE" },
  { title: "Database", icon: <Database size={24} />, skills: ["MySQL"], glow: "#3B82F6" },
  { title: "AI & Automation", icon: <BrainCircuit size={24} />, skills: ["ML Models", "Automation", "LLMs"], glow: "#F472B6" },
];

function getSatellitePositions(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
  });
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 z-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-24 items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-wide">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#F472B6]">Capabilities</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-transparent mr-auto ml-[10%] opacity-80" />
        </motion.div>

        {/* Constellations - Borderless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 w-full">
          {skillCategories.map((category, i) => {
            const radius = 70;
            const positions = getSatellitePositions(category.skills.length, radius);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center gap-4"
              >
                <div className="relative" style={{ width: radius * 2 + 60, height: radius * 2 + 20 }}>
                  <svg className="absolute inset-0 pointer-events-none" width="100%" height="100%" style={{ overflow: "visible" }}>
                    <g transform={`translate(${radius + 30}, ${radius + 10})`}>
                      {positions.map((pos, j) => (
                        <motion.line
                          key={j} x1={0} y1={0} x2={pos.x} y2={pos.y} stroke={category.glow} strokeOpacity={0.35} strokeWidth={1} strokeDasharray="3 4"
                          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + j * 0.1 }}
                        />
                      ))}
                    </g>
                  </svg>

                  <motion.div
                    animate={{ boxShadow: [`0 0 18px -2px ${category.glow}80`, `0 0 30px -2px ${category.glow}b0`, `0 0 18px -2px ${category.glow}80`] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute rounded-full flex items-center justify-center bg-[#050816]"
                    style={{ width: 56, height: 56, left: radius + 30 - 28, top: radius + 10 - 28, color: category.glow }}
                  >
                    {category.icon}
                  </motion.div>

                  {category.skills.map((skill, j) => {
                    const pos = positions[j];
                    return (
                      <motion.div key={skill} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + j * 0.1, type: "spring" }} className="absolute flex flex-col items-center" style={{ left: radius + 30 + pos.x - 22, top: radius + 10 + pos.y - 22, width: 44 }}>
                        <span className="w-2 h-2 rounded-full" style={{ background: category.glow, boxShadow: `0 0 10px 1px ${category.glow}` }} />
                        <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] whitespace-nowrap">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] pt-4">{category.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}