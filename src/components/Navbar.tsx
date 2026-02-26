import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoEmblem } from "./LogoEmblem";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-0 flex justify-between items-center bg-martuam-navy/40 backdrop-blur-md border-b border-white/5 h-12 md:h-16">
      <div className="flex items-center h-full">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <LogoEmblem className="h-5 md:h-7 w-auto" />
          <span className="text-white font-display font-bold text-[10px] md:text-base tracking-[0.2em] md:tracking-[0.3em] mt-1">MARTUAM</span>
        </Link>
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-[9px] font-bold tracking-[0.25em] uppercase text-white/80">
        <Link to="/about" className="hover:text-martuam-gold transition-colors">About</Link>
        <button className="gold-button-premium !px-6 !py-2 !text-[8px] group flex items-center gap-2">
          <span>Executive Access</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-martuam-navy/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-6 text-[10px] font-semibold tracking-[0.2em] uppercase md:hidden"
        >
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <button className="gold-button-premium w-fit group flex items-center gap-2">
            <span>Executive Access</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </nav>
  );
};
