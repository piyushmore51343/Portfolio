"use client";

import { motion } from "framer-motion";
import { Code, Globe, Database, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code size={24} />,
    skills: ["Python", "C", "C++"],
    glow: "#8B5CF6",
  },
  {
    title: "Web Dev",
    icon: <Globe size={24} />,
    skills: ["HTML", "CSS", "JS", "Next.js"],
    glow: "#22D3EE",
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    skills: ["MySQL"],
    glow: "#3B82F6",
  },
  {
    title: "AI & Automation",
    icon: <BrainCircuit size={24} />,
    skills: ["ML Models", "Automation", "LLMs"],
    glow: "#F472B6",
  },
];

// Lays out N satellite stars evenly around a circle behind the hub
function getSatellitePositions(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 md:px-12 z-20">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16 md:gap-24 items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 flex flex-col items-center"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black text-[#F8FAFC] tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#F472B6]">Capabilities</span>
          </h2>
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#F472B6] to-transparent opacity-60" />
        </motion.div>

        {/* Constellation Grid — no card boxes, just hub stars + connected satellite skills */}
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
                className="relative flex flex-col items-center text-center gap-4 group"
              >
                {/* Constellation field */}
                <div className="relative" style={{ width: radius * 2 + 60, height: radius * 2 + 20 }}>
                  <svg
                    className="absolute inset-0 pointer-events-none"
                    width="100%"
                    height="100%"
                    style={{ overflow: "visible" }}
                  >
                    <g transform={`translate(${radius + 30}, ${radius + 10})`}>
                      {positions.map((pos, j) => (
                        <motion.line
                          key={j}
                          x1={0}
                          y1={0}
                          x2={pos.x}
                          y2={pos.y}
                          stroke={category.glow}
                          strokeOpacity={0.35}
                          strokeWidth={1}
                          strokeDasharray="3 4"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 + j * 0.1 }}
                        />
                      ))}
                    </g>
                  </svg>

                  {/* Hub star — the category */}
                  <motion.div
                    animate={{ boxShadow: [
                      `0 0 18px -2px ${category.glow}80`,
                      `0 0 30px -2px ${category.glow}b0`,
                      `0 0 18px -2px ${category.glow}80`,
                    ] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.12 }}
                    className="absolute rounded-full flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      left: radius + 30 - 28,
                      top: radius + 10 - 28,
                      background: `radial-gradient(circle at 35% 30%, ${category.glow}40, rgba(255,255,255,0.04) 70%)`,
                      color: category.glow,
                    }}
                  >
                    {category.icon}
                  </motion.div>

                  {/* Satellite skill stars */}
                  {category.skills.map((skill, j) => {
                    const pos = positions[j];
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + j * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.25 }}
                        className="absolute flex flex-col items-center"
                        style={{
                          left: radius + 30 + pos.x - 22,
                          top: radius + 10 + pos.y - 22,
                          width: 44,
                        }}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: category.glow, boxShadow: `0 0 10px 2px ${category.glow}` }}
                        />
                        <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-[#94A3B8] whitespace-nowrap">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                <h3 className="font-heading text-lg font-bold text-[#F8FAFC] pt-2">{category.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}