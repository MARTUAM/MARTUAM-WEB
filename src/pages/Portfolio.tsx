import { motion } from "motion/react";
import { Shield, Cpu, Globe, Server, Terminal, ArrowRight, ExternalLink, Lock, Zap, Database, BarChart3, Activity, ShieldCheck, Wifi, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { LogoEmblem } from "../components/LogoEmblem";
import { BusinessModal } from "../components/BusinessModal";

interface PortfolioProps {
  theme: "dark" | "light";
}

export const Portfolio = ({ theme }: PortfolioProps) => {
  const isDark = theme === "dark";
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);

  const businesses = [
    { 
      name: "Tu Timbrado", 
      category: "FINTECH & INVOICING", 
      desc: "Comprehensive digital tax ecosystem for the Mexican market.",
      fullDesc: "Tu Timbrado is a specialized high-performance platform for the issuance and validation of Digital Tax Receipts (CFDI) in Mexico. It offers a robust API for seamless integration, real-time fiscal compliance, and military-grade encryption for sensitive financial data.",
      url: "tutimbrado.mx",
      stats: [
        { label: "Security", value: "AES-256 Encrypted", icon: Shield },
        { label: "Uptime", value: "99.99% Sovereign", icon: Activity },
        { label: "Protocol", value: "REST API v4", icon: Terminal },
        { label: "Capacity", value: "10k TPS", icon: Zap }
      ]
    },
    { 
      name: "COMTUAL", 
      category: "CORPORATE SERVICES", 
      desc: "Legal-Operational Representation Office Mexico–United States.",
      fullDesc: "Strategic corporate bridge facilitating legal and operational excellence between Mexico and the United States. We provide the structural backbone for international scaling and cross-border corporate governance.",
      url: "comtual.com",
      stats: [
        { label: "Jurisdiction", value: "Bi-National", icon: Globe },
        { label: "Compliance", value: "Full Audit Ready", icon: ShieldCheck },
        { label: "Network", value: "Encrypted Node", icon: Wifi },
        { label: "Strategy", value: "Modular Growth", icon: Cpu }
      ]
    },
  ];

  return (
    <main className={`min-h-screen pt-24 transition-colors duration-500 ${isDark ? "bg-martuam-navy" : "bg-slate-50"}`}>
      <div className="premium-texture" />
      
      {/* Portfolio Header */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-martuam-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
                Active Portfolio
              </p>
              <h1 className={`text-5xl md:text-7xl font-display font-bold leading-tight transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Business<br />Ecosystem
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`max-w-md text-lg leading-relaxed font-light transition-colors ${
                isDark ? "text-white/40" : "text-slate-500"
              }`}
            >
              The entities listed below operate under the jurisdiction and technological infrastructure of MARTUAM Holding.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {businesses.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`p-10 border transition-all group relative overflow-hidden flex flex-col h-full rounded-[2.5rem] ${
                  isDark 
                    ? "bg-white/[0.02] border-white/5" 
                    : "bg-white border-slate-200 shadow-sm hover:shadow-xl"
                }`}
              >
                <div className="absolute top-8 right-8 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                <h4 className={`text-3xl font-bold mb-2 group-hover:text-martuam-gold transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>{item.name}</h4>
                <p className="text-[10px] tracking-[0.2em] text-martuam-gold/60 font-bold uppercase mb-6">{item.category}</p>
                <p className={`text-base leading-relaxed mb-10 flex-grow transition-colors ${
                  isDark ? "text-white/40" : "text-slate-500"
                }`}>{item.desc}</p>
                
                <button 
                  onClick={() => setSelectedBusiness(item)}
                  className="gold-button-premium w-full flex items-center justify-center gap-3 group/btn"
                >
                  <Eye size={16} />
                  <span>View Details</span>
                  <ArrowRight size={14} className="opacity-50 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BusinessModal 
        isOpen={!!selectedBusiness} 
        onClose={() => setSelectedBusiness(null)} 
        business={selectedBusiness}
        theme={theme}
      />

      {/* Footer */}
      <footer className={`py-16 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 ${
        isDark ? "border-white/5 bg-black/40" : "border-slate-200 bg-slate-50"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <LogoEmblem className="h-12 w-auto transition-transform duration-500 group-hover:scale-110" />
            <span className={`font-display font-bold text-2xl tracking-[0.3em] mt-1 transition-colors ${
              isDark ? "text-white" : "text-slate-900"
            }`}>MARTUAM</span>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">
            <div className="flex items-center gap-2">
              <Lock size={12} className="text-martuam-gold" />
              <span className={isDark ? "text-white/40" : "text-slate-400"}>Encrypted Connection</span>
            </div>
            <span className={isDark ? "text-white/40" : "text-slate-400"}>© 2026 MARTUAM HOLDING</span>
          </div>
        </div>
      </footer>
    </main>
  );
};
