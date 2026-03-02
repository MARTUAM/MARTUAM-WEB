export const LogoEmblem = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <img 
      src="/favicon.svg" 
      alt="Martuam Logo" 
      className="w-full h-full object-contain" 
      referrerPolicy="no-referrer"
    />
  </div>
);
