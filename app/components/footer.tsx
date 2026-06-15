import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-400 border-t border-white/10  py-3 md:py-5 mt-auto">
      <div className="mx-[50px] px-4 sm:px-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
        
        {/* Left Side: Brand & Tagline */}
        <div className="flex flex-col gap-1.5 w-full md:w-auto text-left">
          <h2 className="font-oswald text-xl md:text-2xl font-bold tracking-wider text-[#f5c518]">
            TCP
          </h2>
          <p className="text-xs md:text-sm tracking-wide font-light text-gray-500">
            Thrive Clip Production <span className="mx-1 text-gray-700">|</span> Advertising & Business Growth
          </p>
        </div>

        {/* Right Side: Contact Details */}
        <div className="flex flex-col text-left md:text-right w-full md:w-auto text-xs md:text-sm tracking-wide font-light text-gray-400 gap-1">
          <p className="hover:text-white transition-colors duration-200">
            +91 XXXXX XXXXX
          </p>
          <p className="text-gray-500">
            Jaipur, Rajasthan
          </p>
        </div>

      </div>
    </footer>
  );
}