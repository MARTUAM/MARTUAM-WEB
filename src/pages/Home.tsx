import { motion } from "motion/react";
import { HeroGlobe } from "../components/HeroGlobe";
import { Shield, Cpu, Globe, Server, Terminal, ArrowRight, ExternalLink, Lock, Zap, Database, BarChart3, Activity, ShieldCheck, Wifi } from "lucide-react";
import { useState, useEffect } from "react";
import { LoginModal } from "../components/LoginModal";
import { Link } from "react-router-dom";
import { SectorsCarousel } from "../components/SectorsCarousel";

interface HomeProps {
  theme: "dark" | "light";
}

export const Home = ({ theme }: HomeProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState<number[]>(Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)));
  const isDark = theme === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardData(Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`transition-colors duration-500 ${isDark ? "bg-martuam-navy" : "bg-slate-50"}`}>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-24 transition-colors duration-500 ${
        isDark ? "hero-gradient" : "bg-white"
      }`}>
        <div className="premium-texture" />
        
        {/* Background Globe - Positioned slightly more left than before */}
        <div className={`absolute right-[-10%] md:right-[-5%] top-[60%] md:top-1/2 -translate-y-1/2 w-[70%] h-[90%] z-0 transition-all duration-700 ${
          isDark ? "opacity-50 md:opacity-100" : "opacity-20 md:opacity-40"
        }`}>
          <div key={theme} className="w-full h-full">
            <HeroGlobe theme={theme} />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start mt-20 md:mt-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-6 transition-colors ${
                isDark ? "border-martuam-gold/20 bg-martuam-gold/5" : "border-martuam-gold/40 bg-martuam-gold/10"
              }`}>
                <div className="w-2 h-2 rounded-full bg-martuam-gold animate-pulse" />
                <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                  isDark ? "text-martuam-gold/80" : "text-martuam-gold"
                }`}>
                  Global Infrastructure Holding
                </span>
              </div>
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Structured.<br />
                Scalable.<br />
                <span className="text-martuam-gold">Sovereign.</span>
              </h1>
              
              <p className={`text-base md:text-lg max-w-lg leading-relaxed mb-10 font-light transition-colors ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}>
                The entity that structures, controls, and orchestrates all your digital, financial, and corporate operations. The core of your corporate sovereignty.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="gold-button-premium px-10 py-4 text-[10px] tracking-[0.3em] font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-martuam-gold/30"
                >
                  <Lock size={14} />
                  <span>EXECUTIVE ACCESS</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors Section (Integrated from About) */}
      <SectorsCarousel theme={theme} />

      {/* Strategic Core Section */}
      <section className={`py-32 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 ${
        isDark ? "border-white/5" : "border-slate-200"
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <p className="text-martuam-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
                Strategic Core
              </p>
              <h2 className={`text-4xl md:text-5xl font-display font-bold leading-tight mb-8 transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Control<br />Architecture.
              </h2>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "International Scalability", desc: "Infrastructure designed to absorb and control future companies in Mexico and the world without friction." },
                { icon: Cpu, title: "Modular Separation", desc: "Each business operates independently while being centrally governed by the MARTUAM core." },
                { icon: Shield, title: "Autonomy & Governance", desc: "Long-term vision secured through corporate protocols and asset protection." }
              ].map((item, i) => (
                <div key={i} className={`space-y-6 p-8 border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark 
                    ? "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]" 
                    : "border-slate-200 bg-slate-100/50 hover:bg-slate-100"
                }`}>
                  <item.icon className="text-martuam-gold w-8 h-8 group-hover:scale-110 transition-transform" />
                  <h3 className={`text-lg font-bold tracking-wide transition-colors ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors ${
                    isDark ? "text-white/40" : "text-slate-500"
                  }`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Private Infrastructure Section */}
      <section className={`py-32 px-6 md:px-12 lg:px-24 transition-colors duration-500 ${
        isDark ? "bg-black/20" : "bg-slate-100"
      }`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`inline-flex p-4 rounded-2xl mb-8 transition-colors ${
            isDark ? "bg-white/5" : "bg-white shadow-sm"
          }`}>
            <Server className="text-martuam-gold w-10 h-10" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 transition-colors ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Private Technological Infrastructure
          </h2>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto transition-colors ${
            isDark ? "text-white/40" : "text-slate-500"
          }`}>
            True power resides behind the public interface. MARTUAM operates an interconnected ecosystem of encrypted nodes and autonomous systems.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
            isDark ? "bg-[#050505] border-white/10" : "bg-white border-slate-200"
          }`}>
            {/* Terminal Header */}
            <div className={`px-6 py-4 flex items-center justify-between border-b transition-colors ${
              isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
            }`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className={`flex items-center gap-2 text-[10px] font-mono transition-colors ${
                isDark ? "text-white/40" : "text-slate-400"
              }`}>
                <Activity size={12} className="animate-pulse text-martuam-gold" />
                <span>CORE_SYSTEM_MONITOR_V4.0</span>
              </div>
              <div className="w-12" />
            </div>
            
            {/* Dynamic Dashboard Content */}
            <div className="p-10 font-mono space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`p-6 border rounded-2xl transition-colors ${
                  isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-martuam-gold uppercase tracking-widest">Network Load</span>
                    <Wifi size={12} className="text-martuam-gold animate-bounce" />
                  </div>
                  <div className="flex items-end gap-1 h-12">
                    {dashboardData.slice(0, 8).map((val, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: `${val}%` }}
                        className="flex-1 bg-martuam-gold/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
                <div className={`p-6 border rounded-2xl transition-colors ${
                  isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-martuam-gold uppercase tracking-widest">Security Status</span>
                    <ShieldCheck size={12} className="text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-500 tracking-tighter">ENCRYPTED</div>
                  <div className="text-[8px] text-white/20 mt-1">AES-256-GCM ACTIVE</div>
                </div>
                <div className={`p-6 border rounded-2xl transition-colors ${
                  isDark ? "bg-white/[0.02] border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-martuam-gold uppercase tracking-widest">Active Nodes</span>
                    <Activity size={12} className="text-martuam-gold" />
                  </div>
                  <div className={`text-2xl font-bold tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}>
                    {124 + ((dashboardData[0] || 0) % 10)}
                  </div>
                  <div className="text-[8px] text-white/20 mt-1">GLOBAL SYNC OK</div>
                </div>
              </div>

              <div className={`p-6 border rounded-2xl font-mono text-[10px] leading-relaxed transition-colors ${
                isDark ? "bg-black/40 border-white/5 text-martuam-gold/60" : "bg-slate-50 border-slate-200 text-slate-500"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Terminal size={10} />
                  <span>SYSTEM_LOGS</span>
                </div>
                <div className="space-y-1">
                  <p>[{new Date().toISOString()}] INITIALIZING HANDSHAKE PROTOCOL...</p>
                  <p>[{new Date().toISOString()}] NODE_SYNC: SUCCESSFUL (LATENCY: 0.4ms)</p>
                  <p className="animate-pulse">[{new Date().toISOString()}] MONITORING ACTIVE TRAFFIC...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Section: The Singularity of Control */}
      <section className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-martuam-gold rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-martuam-gold/10 blur-xl rounded-full animate-pulse" />
                <div className={`border p-12 rounded-3xl shadow-2xl transition-colors duration-500 ${
                  isDark ? "bg-martuam-navy border-martuam-gold/30" : "bg-white border-slate-200"
                }`}>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Zap className="text-martuam-gold w-10 h-10" />
                      <h4 className={`font-bold text-2xl sm:text-3xl transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>Real-Time</h4>
                      <p className={`text-[10px] uppercase tracking-widest transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>Decision Latency</p>
                    </div>
                    <div className="space-y-4">
                      <Database className="text-martuam-gold w-10 h-10" />
                      <h4 className={`font-bold text-2xl sm:text-3xl transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>Global</h4>
                      <p className={`text-[10px] uppercase tracking-widest transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>Encrypted Assets</p>
                    </div>
                    <div className="space-y-4">
                      <BarChart3 className="text-martuam-gold w-10 h-10" />
                      <h4 className={`font-bold text-2xl sm:text-3xl transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>Absolute</h4>
                      <p className={`text-[10px] uppercase tracking-widest transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>Uptime Sovereignty</p>
                    </div>
                    <div className="space-y-4">
                      <Shield className="text-martuam-gold w-10 h-10" />
                      <h4 className={`font-bold text-2xl sm:text-3xl transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>Military</h4>
                      <p className={`text-[10px] uppercase tracking-widest transition-colors ${isDark ? "text-white/30" : "text-slate-400"}`}>Core Protocol</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <p className="text-martuam-gold text-[10px] tracking-[0.4em] uppercase font-bold">
                The Singularity
              </p>
              <h2 className={`text-5xl md:text-6xl font-display font-bold leading-tight transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Beyond the<br />Visible Grid.
              </h2>
              <p className={`text-xl font-light leading-relaxed transition-colors ${
                isDark ? "text-white/50" : "text-slate-500"
              }`}>
                We don't just manage companies; we engineer the environment where they thrive. Our proprietary stack replaces traditional management with a silent, high-performance architecture of absolute control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 md:px-12 lg:px-24 border-t transition-colors duration-500 ${
        isDark ? "border-white/5 bg-black/40" : "border-slate-200 bg-slate-50"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="/logo-horizontal-blanco.svg" 
              alt="MARTUAM" 
              className={`h-8 w-auto transition-transform duration-500 group-hover:scale-105 ${!isDark ? "invert" : ""}`} 
            />
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

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </main>
  );
};
