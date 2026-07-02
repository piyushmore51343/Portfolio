"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen py-32 px-6 md:px-12 z-20 flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16 items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-wide">
            Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">System</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-[#22D3EE] to-transparent mr-auto ml-[10%] opacity-80" />
        </motion.div>

        {/* Layout - Borderless */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full text-left">
          
          {/* Left Panel */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-[#F8FAFC]">Let's collaborate.</h3>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              Open to collaborations, AI research, and automation projects.
              Let's build something powerful and efficient together.
            </p>
            <div className="mt-4">
              <a href="mailto:piyushmore51434@gmail.com" className="flex items-center gap-3 text-[#22D3EE] hover:text-[#8B5CF6] transition-colors">
                <Mail size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">piyushmore51434@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Panel Form - Minimal Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 focus:border-[#22D3EE] outline-none text-white py-2 transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 focus:border-[#22D3EE] outline-none text-white py-2 transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#94A3B8]">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="w-full bg-transparent border-b border-white/20 focus:border-[#22D3EE] outline-none text-white py-2 min-h-[100px] resize-none transition-colors" />
            </div>

            <button type="submit" disabled={status === "sending"} className="mt-4 w-fit px-8 py-3 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-bold uppercase tracking-widest hover:bg-[#22D3EE] hover:text-[#050816] transition-all rounded-full disabled:opacity-50 flex items-center gap-2">
              {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Transmitting</> : status === "sent" ? <><CheckCircle2 size={16} /> Sent</> : <><Send size={16} /> Send Message</>}
            </button>
            
            {status === "error" && <p className="text-red-400 text-xs font-bold tracking-widest uppercase mt-2">Error: Please fill all fields.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}