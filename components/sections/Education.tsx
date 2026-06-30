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
    // Forced pt-[120px] and justify-start to prevent top cutoff
    <section
  id="education"
  className="scroll-mt-32 relative w-full min-h-screen pt-40 pb-20 px-6 md:px-12 flex flex-col items-center justify-start z-20"
>
      {/* Reduced max-width to 4xl for a more compact timeline */}
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex flex-col items-center text-center space-y-3"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-[#F8FAFC]">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#22D3EE]">& Timeline</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-60" />
        </motion.div>

        <div className="relative border-l-2 border-white/5 ml-6 md:ml-0 md:border-l-0 md:space-y-16 space-y-12 w-full mt-4">
          
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
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), type: "spring", bounce: 0.6 }}
                  className={`absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#050816] border-2 ${item.dotColor} flex items-center justify-center z-20 transition-all duration-300 group-hover:scale-125 ${item.glow}`}
                >
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                    {item.icon}
                  </motion.div>
                </motion.div>

                <div className={`hidden md:flex w-[45%] justify-end ${!isEven ? 'opacity-0' : ''}`}>
                  {isEven && <TimelineCard item={item} direction="right" delay={index * 0.2} />}
                </div>

                <div className={`w-full pl-8 md:pl-0 md:w-[45%] flex justify-start ${isEven ? 'md:opacity-0' : ''}`}>
                  {(!isEven || true) && (
                    <div className={isEven ? 'md:hidden w-full' : 'w-full'}>
                       <TimelineCard item={item} direction="left" delay={index * 0.2} />
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

function TimelineCard({ item, direction, delay }: { item: any, direction: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "right" ? -30 : 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -3, scale: 1.01 }}
      // Reduced padding to p-6 md:p-8
      className="bg-white/5 border border-white/10 backdrop-blur-md shadow-lg w-full rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden cursor-default transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-5xl">
        {item.icon}
      </div>
      
      <div className="flex flex-col gap-2 relative z-10">
        <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-wide break-words">
          {item.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#22D3EE] font-body text-xs font-bold tracking-widest uppercase">
            {item.institution}
          </span>
          <span className="px-2 py-0.5 rounded text-[9px] tracking-widest font-bold bg-white/10 text-white uppercase border border-white/5">
            {item.status}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-[#94A3B8] font-body text-[11px] font-medium bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/5 relative z-10 mt-1">
        <Calendar size={12} />
        <span>{item.date}</span>
      </div>

      <p className="font-body text-[#94A3B8] text-sm md:text-base leading-relaxed border-t border-white/10 pt-4 break-words relative z-10">
        {item.details}
      </p>
    </motion.div>
  );
}