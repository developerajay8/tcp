import React from 'react';

export default function Workflow() {
  return (
    <section className="w-full bg-[#0b0b0b] py-10 md:py-24 border-t border-white/5">
      <div className="sm:mx-[50px] px-4 sm:px-0">
        
        {/* Section Mini Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase font-oswald">
            How We Work
          </p>
        </div>

        {/* Workflow Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-sm bg-[#111111]/10">
          
          {/* Step 01 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 relative flex flex-col justify-between group min-h-[220px]">
            <div>
              <div className="font-oswald text-4xl md:text-5xl font-black text-white/10 tracking-tight group-hover:text-[#f5c518]/20 transition-colors duration-300">
                01
              </div>
              <h3 className="font-sans text-sm md:text-base font-extrabold tracking-wider uppercase text-white mt-4 mb-2">
                Discovery Call
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                15-min free call — we understand your project, target buyer, and budget.
              </p>
            </div>
            {/* Connector Arrow right side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f5c518] text-lg font-bold hidden md:block">
              &rarr;
            </div>
          </div>

          {/* Step 02 */}
          <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 relative flex flex-col justify-between group min-h-[220px]">
            <div>
              <div className="font-oswald text-4xl md:text-5xl font-black text-white/10 tracking-tight group-hover:text-[#f5c518]/20 transition-colors duration-300">
                02
              </div>
              <h3 className="font-sans text-sm md:text-base font-extrabold tracking-wider uppercase text-white mt-4 mb-2">
                Script + Shoot
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                We write, shoot, and edit a high-converting property video for your project.
              </p>
            </div>
            {/* Connector Arrow right side */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f5c518] text-lg font-bold hidden md:block">
              &rarr;
            </div>
          </div>

          {/* Step 03 */}
          <div className="p-8 md:p-10 flex flex-col justify-between group min-h-[220px]">
            <div>
              <div className="font-oswald text-4xl md:text-5xl font-black text-white/10 tracking-tight group-hover:text-[#f5c518]/20 transition-colors duration-300">
                03
              </div>
              <h3 className="font-sans text-sm md:text-base font-extrabold tracking-wider uppercase text-white mt-4 mb-2">
                Launch + Leads
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                We run Meta Ads, optimize daily, and deliver qualified leads straight to you.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}