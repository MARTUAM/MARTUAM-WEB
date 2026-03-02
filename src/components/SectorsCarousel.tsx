import { motion } from "motion/react";
import { ShoppingBag, Code2, Users, Building2, Landmark } from "lucide-react";

interface SectorsCarouselProps {
  theme?: "dark" | "light";
}

export const SectorsCarousel = ({ theme = "dark" }: SectorsCarouselProps) => {
  const isDark = theme === "dark";
  const sectors = [
    {
      title: "Commerce",
      description: "Global trade networks and digital storefronts optimized for infinite scale.",
      icon: <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />,
      color: isDark ? "from-blue-500/20 to-transparent" : "from-blue-500/10 to-transparent"
    },
    {
      title: "Software",
      description: "Enterprise-grade applications and resilient digital infrastructure.",
      icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
      color: isDark ? "from-purple-500/20 to-transparent" : "from-purple-500/10 to-transparent"
    },
    {
      title: "Employment",
      description: "Connecting elite talent with opportunity across global markets.",
      icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
      color: isDark ? "from-emerald-500/20 to-transparent" : "from-emerald-500/10 to-transparent"
    },
    {
      title: "Real Estate",
      description: "Strategic property investments and intelligent asset management.",
      icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />,
      color: isDark ? "from-amber-500/20 to-transparent" : "from-amber-500/10 to-transparent"
    },
    {
      title: "Finance",
      description: "Next-generation wealth management and sovereign capital allocation.",
      icon: <Landmark className="w-6 h-6" strokeWidth={1.5} />,
      color: isDark ? "from-martuam-gold/20 to-transparent" : "from-martuam-gold/10 to-transparent"
    }
  ];

  return (
    <section id="sectors" className={`relative py-24 md:py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? "bg-martuam-navy" : "bg-white"
    }`}>
      <div className={`premium-texture transition-opacity duration-500 ${isDark ? "opacity-30" : "opacity-10"}`} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-martuam-gold" />
              <span className="text-martuam-gold text-[10px] font-bold tracking-[0.3em] uppercase">Strategic Focus</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-4xl md:text-6xl font-display leading-tight transition-colors ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Diversified <span className="text-martuam-gold italic">Excellence.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-sm md:text-base max-w-xs font-light leading-relaxed transition-colors ${
              isDark ? "text-white/40" : "text-slate-500"
            }`}
          >
            We operate across high-impact sectors, leveraging technology to create sustainable value and global scalability.
          </motion.p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-px border transition-colors ${
          isDark ? "bg-white/5 border-white/5" : "bg-slate-100 border-slate-200"
        }`}>
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group p-8 md:p-10 flex flex-col h-full min-h-[320px] overflow-hidden transition-all duration-700 ${
                isDark ? "bg-martuam-navy hover:bg-white/[0.02]" : "bg-white hover:bg-slate-50"
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center text-martuam-gold mb-8 group-hover:scale-110 group-hover:border-martuam-gold/30 transition-all duration-500 ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}>
                  {sector.icon}
                </div>
                <h3 className={`text-xl font-medium tracking-wide mb-4 font-display group-hover:text-martuam-gold transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {sector.title}
                </h3>
                <p className={`text-sm leading-relaxed font-light transition-colors duration-300 ${
                  isDark ? "text-white/40 group-hover:text-white/60" : "text-slate-500 group-hover:text-slate-700"
                }`}>
                  {sector.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-martuam-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
