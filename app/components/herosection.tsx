import React from 'react';
import StatsSection from './statssection';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0b0b0b] overflow-hidden pt-20">
      {/* Background Premium Ambient Glow (Top Right Corner) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#f5c518]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="sm:mx-[50px] px-4 sm:px-0 w-full z-10 py-12 md:py-24">
        <div className="max-w-4xl">
          
          {/* Subheading/Tagline */}
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 md:mb-6 font-oswald">
            Thrive Clip Production — Real Estate Marketing
          </p>

          {/* Main Hero Typography */}
          <h1 className="font-oswald text-5xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-white flex flex-col">
            <span>We Don't Just</span>
            <span>Make Videos.</span>
            <span className="text-[#f5c518]">We Sell</span>
            <span className="">Properties.</span>
          </h1>

          {/* Bottom Descriptive Paragraph */}
          <p className="mt-8 md:mt-12 text-gray-400 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Meta Ads + High-Impact Video Production — built specifically for 
            Real Estate builders, agents & developers who want 
            <span className="text-white font-medium"> qualified leads</span>, not just views.
          </p>

          <StatsSection/>
          
          
        </div>
      </div>
    </section>
  );
}