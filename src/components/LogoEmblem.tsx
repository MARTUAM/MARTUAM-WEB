export const LogoEmblem = ({ className = "", theme = "dark" }: { className?: string; theme?: "dark" | "light" }) => (
  <div className={`relative ${className}`}>
    <img 
      src="/favicon.svg" 
      alt="Martuam Logo" 
      className={`w-full h-full object-contain transition-all duration-500 ${
        theme === "light" ? "brightness-0" : ""
      }`} 
      referrerPolicy="no-referrer"
    />
  </div>
);
