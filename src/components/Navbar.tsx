import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, ArrowRight, Lock, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { LoginModal } from "./LoginModal";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <>
      <nav className={`hidden md:flex fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-0 justify-between items-center backdrop-blur-md border-b h-12 md:h-16 transition-all duration-500 ${
        isDark 
          ? "bg-martuam-navy/40 border-white/5" 
          : "bg-white border-slate-200"
      }`}>
        <div className="hidden md:flex items-center h-full">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo-horizontal-blanco.svg" 
              alt="MARTUAM" 
              className={`h-8 lg:h-10 w-auto group-hover:scale-105 transition-transform ${!isDark ? "invert" : ""}`} 
            />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[9px] font-bold tracking-[0.25em] uppercase">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark ? "bg-white/5 text-white hover:bg-white/10" : "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200"
            }`}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <button 
            onClick={() => setIsLoginOpen(true)}
            className="gold-button-premium !px-6 !py-2 !text-[8px] group flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-martuam-gold/20"
          >
            <Lock className="w-3 h-3 text-martuam-gold" />
            <span>Executive Access</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 ml-auto">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={isDark ? "text-white" : "text-slate-900"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-full left-0 w-full backdrop-blur-xl border-t p-8 flex flex-col gap-6 text-[10px] font-semibold tracking-[0.2em] uppercase md:hidden transition-colors duration-500 ${
              isDark ? "bg-martuam-navy/95 border-white/10 text-white" : "bg-white/95 border-slate-200 text-slate-900"
            }`}
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 mb-4 group">
              <img 
                src="/logo-horizontal-blanco.svg" 
                alt="MARTUAM" 
                className={`h-6 w-auto ${!isDark ? "invert" : ""}`} 
              />
            </Link>
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsLoginOpen(true);
              }}
              className="gold-button-premium w-fit group flex items-center gap-2 px-6 py-3"
            >
              <Lock className="w-4 h-4 text-martuam-gold" />
              <span>Executive Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};
