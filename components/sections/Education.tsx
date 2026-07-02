"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

const timelineData = [
  {
    title: "Diploma in Computer Technology",
    institution: "K K Wagh Polytechnic",
    date: "2023 - Present",
    status: "IN PROGRESS",
    icon: <GraduationCap size={20} className="text-[#8B5CF6]" />,
    details: "Focusing on software engineering, system architecture, and core programming principles.",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    dotColor: "border-[#8B5CF6]",
  },
  {
    title: "AI & Automation Intern",
    institution: "Rich System Solutions",
    date: "Internship",
    status: "COMPLETED",
    icon: <Briefcase size={20} className="text-[#22D3EE]" />,
    details: "Hands-on experience developing practical AI solutions and automated workflows.",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
    dotColor: "border-[#22D3EE]",
  },
  {
    title: "Secondary School Certificate",
    institution: "Secondary Education",
    date: "Completed",
    status: "VERIFIED [85.60%]",
    icon: <Award size={20} className="text-[#3B82F6]" />,
    details: "Graduated with a strong academic foundation and exceptional analytical skills.",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    dotColor: "border-[#3B82F6]",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-32 relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-start z-20">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-wide">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#22D3EE]">& Timeline</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#3B82F6] to-transparent mr-auto ml-[10%] opacity-80" />
        </motion.div>

        <div className="relative border-l-2 border-white/5 ml-6 md:ml-0 md:border-l-0 md:space-y-24 space-y-16 w-full mt-8">
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "circOut" }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B5CF6] via-[#3B82F6] to-transparent -translate-x-1/2 opacity-30 origin-top" 
          />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group">
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), type: "spring", bounce: 0.6 }}
                  className={`absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#050816] border-2 ${item.dotColor} flex items-center justify-center z-20 ${item.glow}`}
                >
                  {item.icon}
                </motion.div>

                <div className={`hidden md:flex w-[45%] justify-end text-right ${!isEven ? 'opacity-0' : ''}`}>
                  {isEven && <TimelineContent item={item} direction="right" delay={index * 0.2} />}
                </div>

                <div className={`w-full pl-12 md:pl-0 md:w-[45%] flex justify-start text-left ${isEven ? 'md:opacity-0' : ''}`}>
                  {(!isEven || true) && (
                    <div className={isEven ? 'md:hidden w-full' : 'w-full'}>
                       <TimelineContent item={item} direction="left" delay={index * 0.2} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineContent({ item, direction, delay }: { item: any, direction: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "right" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, type: "spring" }}
      className={`flex flex-col gap-3 w-full ${direction === 'right' ? 'items-end' : 'items-start'}`}
    >
      <h3 className="text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-wide">
        {item.title}
      </h3>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[#22D3EE] text-xs font-bold tracking-widest uppercase">
          {item.institution}
        </span>
        <span className="text-[#94A3B8] text-xs font-bold tracking-widest uppercase">
          • {item.date}
        </span>
      </div>
      <p className="text-[#94A3B8] text-sm leading-relaxed mt-2 max-w-md">
        {item.details}
      </p>
    </motion.div>
  );
}