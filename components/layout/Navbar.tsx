"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Education", "Experience", "Skills", "Projects", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-4 bg-[#050816]/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo acting as Home link */}
          <a href="#home" className="text-xl font-black tracking-widest text-white cursor-pointer select-none relative z-50">
            PIYUSH<span className="text-[#22D3EE]">.OS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Minimalist Resume Button (Desktop) */}
          <div className="hidden lg:block">
            <a 
              href="/PiyushResume.pdf" 
              download="PiyushResume.pdf" 
              className="flex items-center gap-2 px-4 py-2 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#050816] transition-all"
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#050816]/98 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#22D3EE] transition-colors"
                >
                  {link}
                </a>
              ))}
              
              {/* Minimalist Resume Button (Mobile) */}
              <a 
                href="/PiyushResume.pdf" 
                download="PiyushResume.pdf" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex items-center gap-3 px-6 py-3 border border-[#22D3EE]/50 text-xs font-bold uppercase tracking-widest text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#050816] transition-all"
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}