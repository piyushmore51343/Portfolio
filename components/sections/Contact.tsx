"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Terminal, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-32 px-6 md:px-12 z-20 flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 items-center text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 flex flex-col items-center"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black text-[#F8FAFC]">
            Connect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">
              System
            </span>
          </h2>
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-60 mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
          {/* LEFT PANEL */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-[#22D3EE]">
              <Terminal size={24} />
              <h3 className="font-heading text-xl font-bold">Direct Link</h3>
            </div>

            <p className="text-[#94A3B8] font-body text-sm leading-relaxed">
              Open to collaborations, AI research, and automation projects.
              Let's build something powerful and efficient together.
            </p>

            <div className="flex flex-col gap-4 mt-auto">
              <a
                href="mailto:piyush.more@example.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
              >
                <Mail className="text-[#22D3EE]" size={20} />
                <span className="font-mono text-sm">piyushmore51434@gmail.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT PANEL - FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Designation / Name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#22D3EE] outline-none font-body text-sm text-white transition-colors"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="System ID / Email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#22D3EE] outline-none font-body text-sm text-white transition-colors"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Connection Purpose..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-[#22D3EE] outline-none font-body text-sm min-h-[120px] text-white transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full p-4 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-white font-bold font-body text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  TRANSMITTING...
                </>
              ) : status === "sent" ? (
                <>
                  <CheckCircle2 size={16} />
                  TRANSMISSION SENT
                </>
              ) : (
                <>
                  <Send size={16} />
                  INITIALIZE TRANSMISSION
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-xs font-mono text-center">
                Please fill all fields. If it keeps failing, check your EmailJS config.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}