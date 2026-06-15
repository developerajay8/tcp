import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full bg-[#0b0b0b] py-10 md:py-24 border-t border-white/5">
      <div className="sm:mx-[50px] px-4 sm:px-0">
        
        {/* Outer Premium Thin Box Border */}
        <div className="border border-[#f5c518] p-8 md:p-16 text-center bg-[#1d1d1a] relative overflow-hidden flex flex-col items-center justify-center">
          
          {/* Subtle Inner BG Ambient Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-white/[0.02] to-transparent pointer-events-none" />

          {/* High Impact Heading Content */}
          <h2 className="font-oswald text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase leading-[1.05] text-white max-w-2xl flex flex-col mb-6 z-10">
            <span>Ready to fill your</span>
            <span className="text-[#f5c518]">Site Visits?</span>
          </h2>

          {/* Supporting Pitch Text */}
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl leading-relaxed mb-10 z-10">
            Book a free 15-minute strategy call. No commitment — just a clear plan for your project's growth.
          </p>

          {/* Dual Action Premium Buttons Layout */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10">
            {/* Primary Filled CTA Button */}
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-[#f5c518] hover:bg-[#e0b410] text-[#0b0b0b] font-sans text-xs font-black tracking-widest uppercase px-8 py-4 flex items-center justify-center gap-2 transition-all duration-200 shadow-lg rounded-sm"
            >
              <span>📲</span> WHATSAPP NOW
            </a>

            {/* Secondary Outlined Button */}
            <a 
              href="mailto:tcp@gmail.com" 
              className="w-full sm:w-auto border border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-[#f5c518] hover:text-white font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 text-center transition-all duration-200 rounded-sm"
            >
              SEND EMAIL
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}