import React from 'react';

export default function PackagesSection() {
  return (
    <section id="services" className="w-full bg-[#0b0b0b] py-10 md:py-24 border-t border-white/5">
      <div className="sm:mx-[50px] px-4 sm:px-0">
        
        {/* Section Headers */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            What We Offer
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-none text-white">
            Our <span className="text-[#f5c518]">Packages</span>
          </h2>
        </div>

        {/* Pricing/Packages Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10 rounded-sm overflow-hidden bg-[#111111]/10">
          
          {/* Card 1: Video Only */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300">
            <div>
              <div className="text-2xl mb-6">🎬</div>
              <h3 className="font-oswald text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Video Only
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                Premium property video crafted to stop the scroll and showcase your project.
              </p>
              <ul className="space-y-3.5 text-xs md:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>1 Property Walkthrough Reel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Professional Editing + Color Grade</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Script + Voiceover</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Delivery in 5–7 days</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Ads + Leads (Featured/Most Popular) */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative bg-[#141414]/50 group">
            {/* Premium Center Accent Badge */}
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#f5c518] text-[#0b0b0b] text-[9px] font-bold font-oswald tracking-[0.2em] px-4 py-1 uppercase  shadow-md">
              Most Popular
            </div>
            
            <div className="pt-2">
              <div className="text-2xl mb-6">📣</div>
              <h3 className="font-oswald text-2xl md:text-3xl font-black uppercase tracking-tight text-[#f5c518] mb-4">
                Ads + Leads
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                Full Meta Lead Generation campaign — targeted, optimized, and managed by TCP.
              </p>
              <ul className="space-y-3.5 text-xs md:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Campaign Setup on Meta</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Audience Targeting (Buyers)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>A/B Ad Creative Testing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Weekly Performance Report</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Lead CRM Integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Full Package */}
          <div className="p-8 md:p-10 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-300">
            <div>
              <div className="text-2xl mb-6">📦</div>
              <h3 className="font-oswald text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Full Package
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                Everything — from shoot to leads. One team, one vision, maximum results.
              </p>
              <ul className="space-y-3.5 text-xs md:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Video Production (Full)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Meta Lead Gen Campaign</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>2 Ad Variations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>30 Days Management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#f5c518] text-[10px] mt-1">▶</span>
                  <span>Guaranteed Lead Flow</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}