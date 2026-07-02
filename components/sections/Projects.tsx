"use client";

import { motion } from "framer-motion";
import { Bot, Shield, Zap, Cpu, Car } from "lucide-react";

const projects = [
  {
    title: "EDITH AI System",
    desc: "Advanced personal AI assistant with voice control, automation, and system-level intelligence.",
    tech: ["Python", "Voice AI", "Automation", "LLM Integration"],
    icon: <Bot size={28} className="text-[#22D3EE]" />,
  },
  {
    title: "Vanrakshak",
    desc: "Forest surveillance system designed to detect illegal activities using sound monitoring and ML models.",
    tech: ["Machine Learning", "Python", "Software"],
    icon: <Shield size={28} className="text-[#8B5CF6]" />,
  },
  {
    title: "Workflow Automation",
    desc: "n8n-powered automation system connecting AI agents with WhatsApp, Gmail, and Sheets.",
    tech: ["n8n", "Webhooks", "API Integration", "AI Agents"],
    icon: <Zap size={28} className="text-[#3B82F6]" />,
  },
  {
    title: "AI Compute Core",
    desc: "Modular backend system designed for scalable AI processing and task orchestration.",
    tech: ["Node.js", "AI Architecture", "Microservices"],
    icon: <Cpu size={28} className="text-[#F472B6]" />,
  },
  {
    title: "SmartPark Android",
    desc: "Android app to find and reserve parking spots in real time, with a clean native XML + Java build using static/mock data.",
    tech: ["Java", "Android XML", "Android 12+", "Mock Data"],
    icon: <Car size={28} className="text-[#34D399]" />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-32 pt-32 md:pt-40 pb-20 px-6 md:px-12 z-20 flex flex-col items-center"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16 items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-wide">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">Showcase</span>
          </h2>
          {/* Subtle underline under "Deployment" */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#22D3EE] to-transparent mr-auto ml-[10%] opacity-80" />
        </motion.div>

        {/* Minimalist Floating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 w-full mt-4">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-start text-left gap-4"
            >
              {/* Floating Icon */}
              <motion.div
                whileHover={{ y: -3 }}
                className="mb-1"
              >
                {proj.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#F8FAFC]">
                {proj.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                {proj.desc}
              </p>

              {/* Raw Text Tech Tags */}
              <div className="flex flex-wrap gap-x-3 gap-y-2 pt-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#94A3B8]"
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