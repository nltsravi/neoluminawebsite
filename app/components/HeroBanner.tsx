import React from "react";

interface HeroBannerProps {
  children: React.ReactNode;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ children, className = "" }) => (
  <section className={`relative ${className}`}>
    {/* Foreground overlays */}
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-0 bg-[url('/neoluminawebsite/hero-home-bg.png')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
    </div>
    <div className="relative z-20">{children}</div>
  </section>
);

export default HeroBanner; 