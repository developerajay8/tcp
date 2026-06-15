import React from 'react';

export default function StatsSection() {
  return (
    <div className="">
      <div className="space-y-6 pt-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 rounded-sm overflow-hidden">
          {/* Stat 1 */}
          <div className="border-b md:border-b-0 md:border-r border-white/10 p-8 flex flex-col justify-center min-h-[160px]">
            <span className="font-oswald text-4xl md:text-5xl font-black tracking-tight text-[#f5c518]">
              50+
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mt-2 font-oswald">
              Ads Created
            </span>
          </div>

          {/* Stat 2 */}
          <div className="border-b md:border-b-0 md:border-r border-white/10 p-8 flex flex-col justify-center min-h-[160px]">
            <span className="font-oswald text-4xl md:text-5xl font-black tracking-tight text-[#f5c518]">
              500+
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mt-2 font-oswald">
              Leads Generated
            </span>
          </div>

          {/* Stat 3 */}
          <div className="p-8 flex flex-col justify-center min-h-[160px]">
            <span className="font-oswald text-4xl md:text-5xl font-black tracking-tight text-[#f5c518]">
              ₹80
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mt-2 font-oswald">
              Avg. Cost Per Lead
            </span>
          </div>
        </div>

        {/* Founder Profile Card */}
        <div className="max-w-lg bg-[#141414] border-l-4 border-[#f5c518] p-6 flex items-center gap-5 shadow-xl rounded-r-sm">
          {/* Avatar Icon */}
          <div className="w-14 h-14 bg-[#f5c518] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-[#0b0b0b] font-oswald text-xl font-bold tracking-wider">
              AK
            </span>
          </div>
          
          {/* Details */}
          <div className="flex flex-col">
            <h4 className="font-oswald text-xl font-bold tracking-wide text-white leading-tight">
              Arbaj Khan
            </h4>
            <p className="text-[#f5c518] text-xs font-bold tracking-wider uppercase mt-0.5 font-oswald">
              Founder — TCP
            </p>
            <p className="text-gray-500 text-xs mt-1 tracking-wide font-light">
              +91 XXXXX XXXXX <span className="mx-1 text-gray-700">|</span> tcp@gmail.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}