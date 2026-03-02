import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Globe, Shield, Zap, Cpu } from 'lucide-react';

interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: {
    name: string;
    category: string;
    desc: string;
    fullDesc: string;
    url: string;
    stats: { label: string; value: string; icon: any }[];
  } | null;
  theme: "dark" | "light";
}

export const BusinessModal = ({ isOpen, onClose, business, theme }: BusinessModalProps) => {
  if (!business) return null;
  const isDark = theme === "dark";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border transition-colors duration-500 ${
              isDark ? "bg-martuam-navy border-white/10" : "bg-white border-slate-200"
            }`}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className={`absolute top-6 right-6 p-2 rounded-full transition-colors z-20 ${
                isDark ? "hover:bg-white/10 text-white/40 hover:text-white" : "hover:bg-slate-100 text-slate-400 hover:text-slate-900"
              }`}
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-10">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-martuam-gold/10 border border-martuam-gold/20 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-martuam-gold animate-pulse" />
                    <span className="text-[9px] font-bold tracking-widest text-martuam-gold uppercase">{business.category}</span>
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-display font-bold mb-3 transition-colors ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {business.name}
                  </h2>
                  <p className={`text-base leading-relaxed font-light transition-colors ${
                    isDark ? "text-white/60" : "text-slate-600"
                  }`}>
                    {business.fullDesc}
                  </p>
                </div>

                {/* Stats/Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {business.stats.map((stat, i) => (
                    <div key={i} className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                      isDark ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-100"
                    }`}>
                      <div className="p-2 rounded-lg bg-martuam-gold/10 text-martuam-gold">
                        <stat.icon size={16} />
                      </div>
                      <div>
                        <p className={`text-[8px] uppercase tracking-widest font-bold ${isDark ? "text-white/30" : "text-slate-400"}`}>{stat.label}</p>
                        <p className={`text-xs font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a 
                    href={`https://${business.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-button-premium flex-1 flex items-center justify-center gap-3 text-center"
                  >
                    <Globe size={16} />
                    <span>Visit Website</span>
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                  <button 
                    onClick={onClose}
                    className={`flex-1 px-8 py-4 rounded-full border text-[10px] font-bold tracking-widest uppercase transition-all ${
                      isDark ? "border-white/10 text-white hover:bg-white/5" : "border-slate-200 text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
