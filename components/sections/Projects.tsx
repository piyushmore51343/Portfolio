"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Zap, Cpu, Car } from "lucide-react";

const projects = [
  {
    title: "EDITH AI System",
    desc: "Advanced personal AI assistant with voice control, automation, and system-level intelligence.",
    tech: ["Python", "Voice AI", "Automation", "LLM Integration"],
    icon: <Bot size={32} className="text-[#22D3EE]" />,
    glow: "#22D3EE",
  },
  {
    title: "Vanrakshak",
    desc: "Forest surveillance system designed to detect illegal activities using sound monitoring and ML models.",
    tech: ["Machine Learning", "Python", "Software"],
    icon: <Shield size={32} className="text-[#8B5CF6]" />,
    glow: "#8B5CF6",
  },
  {
    title: "Workflow Automation",
    desc: "n8n-powered automation system connecting AI agents with WhatsApp, Gmail, and Sheets.",
    tech: ["n8n", "Webhooks", "API Integration", "AI Agents"],
    icon: <Zap size={32} className="text-[#3B82F6]" />,
    glow: "#3B82F6",
  },
  {
    title: "AI Compute Core",
    desc: "Modular backend system designed for scalable AI processing and task orchestration.",
    tech: ["Node.js", "AI Architecture", "Microservices"],
    icon: <Cpu size={32} className="text-[#F472B6]" />,
    glow: "#F472B6",
  },
  {
    title: "SmartPark Android",
    desc: "Android app to find and reserve parking spots in real time, with a clean native XML + Java build using static/mock data.",
    tech: ["Java", "Android XML", "Android 12+", "Mock Data"],
    icon: <Car size={32} className="text-[#34D399]" />,
    glow: "#34D399",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-32 pt-32 md:pt-40 pb-20 px-6 md:px-12 z-20 flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 items-center">

        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black text-[#F8FAFC] leading-[1.2] pb-1">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">Showcase</span>
          </h2>
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-60 mx-auto" />
        </motion.div>

        {/* Grid: no card background, just floating content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 w-full">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col gap-4 group"
            >
              <motion.div
                whileHover={{ rotate: -6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="relative p-4 bg-white/5 rounded-2xl w-fit"
              >
                {proj.icon}
              </motion.div>

              <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">{proj.title}</h3>
              <p className="font-body text-sm text-[#94A3B8] leading-relaxed">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}