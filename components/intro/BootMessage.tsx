"use client";

import { motion } from "framer-motion";

const messages = [
  "Initializing PIYUSH OS...",
  "Loading AI Modules...",
  "Loading Portfolio...",
  "Preparing Interface...",
];

export default function BootMessage() {
  return (
    <div className="mt-12 space-y-2 text-center">
      {messages.map((msg, index) => (
        <motion.p
          key={msg}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.35,
          }}
          className="text-slate-400 tracking-wide"
        >
          {msg}
        </motion.p>
      ))}
    </div>
  );
}