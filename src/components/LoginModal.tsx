import { motion, AnimatePresence } from "motion/react";
import { X, Lock, Fingerprint, Activity } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [operativeId, setOperativeId] = useState("");
  const [accessCipher, setAccessCipher] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-martuam-navy border border-martuam-gold/30 p-8 shadow-2xl overflow-hidden rounded-[2.5rem]"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-martuam-gold to-transparent" />
            <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-martuam-gold/5 blur-2xl" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 rounded-full border border-martuam-gold/30 flex items-center justify-center mb-4 bg-martuam-gold/5">
                <Lock className="text-martuam-gold w-5 h-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-white tracking-[0.2em] uppercase mb-1">
                Restricted Area
              </h2>
              <p className="text-martuam-gold/60 text-[10px] tracking-[0.3em] uppercase font-semibold">
                Level 4 Authorization Required
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold ml-1">
                  Operative ID
                </label>
                <div className="relative">
                  <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 text-martuam-gold/40 w-4 h-4" />
                  <input
                    type="text"
                    value={operativeId}
                    onChange={(e) => setOperativeId(e.target.value)}
                    placeholder="ID-0000"
                    className="w-full bg-black/40 border border-white/10 px-12 py-4 text-white text-sm focus:outline-none focus:border-martuam-gold/50 transition-colors font-mono tracking-widest rounded-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold ml-1">
                  Access Cipher
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-martuam-gold/40 w-4 h-4" />
                  <input
                    type="password"
                    value={accessCipher}
                    onChange={(e) => setAccessCipher(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-black/40 border border-white/10 px-12 py-4 text-white text-sm focus:outline-none focus:border-martuam-gold/50 transition-colors font-mono tracking-widest rounded-full"
                  />
                </div>
              </div>

              <button className="gold-button-premium w-full py-5 group flex items-center justify-center gap-3 mt-4">
                <span className="text-xs tracking-[0.3em] font-bold">Initiate Handshake</span>
                <Activity className="w-4 h-4 group-hover:animate-pulse" />
              </button>

              <div className="pt-4 border-t border-white/5 text-center">
                <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                  Unauthorized access is strictly prohibited. <br />
                  All connections are monitored and logged.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
