"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 flex flex-col items-center gap-4 border-t border-white/5">
      <div className="text-center space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
          SYSTEM_TERMINATION_PROTOCOL_ACTIVE
        </p>
        <p className="text-[10px] font-mono text-gray-600">
          © {new Date().getFullYear()} PIYUSH.OS // ALL SYSTEMS OPERATIONAL
        </p>
      </div>
      
      <div className="flex gap-6 mt-4">
        {["GitHub", "LinkedIn", "Twitter"].map((social) => (
          <a 
            key={social} 
            href="#" 
            className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#22D3EE] transition-colors"
          >
            {social}
          </a>
        ))}
      </div>
    </footer>
  );
}