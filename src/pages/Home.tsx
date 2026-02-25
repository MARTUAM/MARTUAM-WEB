import { motion } from "motion/react";
import { HeroGlobe } from "../components/HeroGlobe";
import { LogoEmblem } from "../components/LogoEmblem";

export const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden px-4 hero-gradient">
        <div className="premium-texture" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 2.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 2.5, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <HeroGlobe />
          </motion.div>
          
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              x: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full will-change-transform" 
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
          />
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-48 -right-48 w-[32rem] h-[32rem] rounded-full will-change-transform" 
            style={{ background: 'radial-gradient(circle, rgba(18,37,58,0.5) 0%, transparent 70%)' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 2.5,
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="relative z-10 w-full max-w-5xl -mt-16"
        >
          {/* Main Content */}
          <div className="flex flex-col items-center will-change-transform">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: 2.5,
                duration: 1.8, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <LogoEmblem className="w-28 md:w-40 aspect-[465/507] mb-6 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              transition={{ 
                delay: 3.1, 
                duration: 1.5, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-3xl md:text-6xl font-bold uppercase text-white mb-4 pl-[0.4em] text-shadow-premium text-center"
            >
              Martuam
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 3.7, 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="flex flex-col gap-3 mb-8 mt-8 text-center"
            >
              <p className="text-martuam-gold-light text-xs md:text-sm tracking-[0.5em] uppercase font-semibold">
                Global Infrastructure Holding
              </p>
              <div className="flex items-center justify-center gap-5">
                <div className="h-[1px] w-8 bg-martuam-gold/20" />
                <p className="text-white/30 text-[9px] md:text-[10px] tracking-[0.5em] uppercase">
                  Structured • Scalable • Sovereign
                </p>
                <div className="h-[1px] w-8 bg-martuam-gold/20" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
