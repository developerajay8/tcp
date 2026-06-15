import React from 'react';

export default function CaseStudy() {
  return (
    <section id="work" className="w-full bg-[#0b0b0b] py-10 md:py-24 border-t border-white/5">
      <div className="sm:mx-[50px] px-4 sm:px-0">
        
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Real Results. Real Clients.
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white flex flex-col">
            <span>What We've</span>
            <span className="text-[#f5c518]">Delivered</span>
          </h2>
        </div>

        {/* Case Study Main Card */}
        <div className="w-full border border-white/10 rounded-sm p-6 md:p-10 bg-[#111111]/30 backdrop-blur-sm relative">
          
          <span className="absolute top-4 right-6 text-[9px] md:text-10px font-bold tracking-[0.2em] text-gray-500 uppercase font-oswald hidden sm:inline">
            Case Study
          </span>

          {/* Project Category Tag */}
          <div className="inline-block border border-[#f5c518]/60 px-3 py-1 mb-8">
            <span className="text-[#f5c518] text-[10px] md:text-xs font-bold tracking-widest uppercase font-oswald">
              Real Estate Developer — Residential Project
            </span>
          </div>

          {/* Challenge & Solution Content */}
          <div className="space-y-8 max-w-5xl mb-12">
            <div>
              <h4 className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-oswald mb-2">
                The Challenge
              </h4>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                Client was running generic Facebook posts with zero lead flow. No proper video content, no targeting strategy — spending money with no results.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h4 className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase font-oswald mb-2">
                Our Solution
              </h4>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                We created a cinematic property walkthrough video + ran a targeted Meta Lead Generation campaign aimed at buyers in a 25km radius with specific income filters.
              </p>
            </div>
          </div>

          {/* Inner Small Stats Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
            {/* Inner Stat 1 */}
            <div className="border border-white/10 p-4 rounded-sm bg-[#0b0b0b]/50">
              <span className="block font-oswald text-2xl md:text-3xl font-black text-[#f5c518]">
                120+
              </span>
              <span className="block text-[9px] md:text-10px font-bold tracking-wider text-gray-400 uppercase mt-1 font-oswald">
                Leads in 30 Days
              </span>
            </div>

            {/* Inner Stat 2 */}
            <div className="border border-white/10 p-4 rounded-sm bg-[#0b0b0b]/50">
              <span className="block font-oswald text-2xl md:text-3xl font-black text-[#f5c518]">
                ₹65
              </span>
              <span className="block text-[9px] md:text-10px font-bold tracking-wider text-gray-400 uppercase mt-1 font-oswald">
                Cost Per Lead
              </span>
            </div>

            {/* Inner Stat 3 */}
            <div className="border border-white/10 p-4 rounded-sm bg-[#0b0b0b]/50 col-span-2 sm:col-span-1">
              <span className="block font-oswald text-2xl md:text-3xl font-black text-[#f5c518]">
                4.2&times;
              </span>
              <span className="block text-[9px] md:text-10px font-bold tracking-wider text-gray-400 uppercase mt-1 font-oswald">
                ROAS Achieved
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}