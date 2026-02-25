import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "motion/react";

export const HeroGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        if (width === 0) width = 600; // Fallback to prevent 0-size initialization
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const dpr = window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 2;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 8000,
      mapBrightness: 22,
      baseColor: [0.01, 0.02, 0.05],
      markerColor: [1, 0.85, 0.5],
      glowColor: [0.02, 0.05, 0.15],
      markers: [
        { location: [40.7128, -74.0060], size: 0.04 }, // NY
        { location: [51.5074, -0.1278], size: 0.04 }, // London
        { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
        { location: [1.3521, 103.8198], size: 0.04 }, // Singapore
        { location: [25.2048, 55.2708], size: 0.04 }, // Dubai
        { location: [-23.5505, -46.6333], size: 0.04 }, // Sao Paulo
        { location: [19.4326, -99.1332], size: 0.04 }, // Mexico City
        { location: [48.8566, 2.3522], size: 0.04 }, // Paris
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.008;
        state.width = width * dpr;
        state.height = width * dpr;
      }
    });

    const resizeObserver = new ResizeObserver(() => {
      onResize();
    });
    
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40 md:opacity-50 mix-blend-screen -translate-y-16 md:translate-y-6">
      <div className="w-full max-w-[600px] aspect-square relative">
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            contain: "layout paint size"
          }}
        />
        
        {/* Orbit 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-martuam-gold rounded-full shadow-[0_0_10px_rgba(198,168,94,0.8)] -translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Orbit 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[135%] h-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        >
          <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] translate-x-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Orbit 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[155%] h-[155%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        >
          <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-martuam-gold rounded-full shadow-[0_0_12px_rgba(198,168,94,0.8)] -translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </div>
  );
};
