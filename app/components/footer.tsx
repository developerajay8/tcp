import React from 'react';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-400 border-t border-white/10 py-6 md:py-8 mt-auto">
      <div className="sm:mx-[50px] px-4 sm:px-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
        
        {/* Left Side: Brand & Tagline */}
        <div className="flex flex-col gap-1.5 w-full md:w-auto text-left">
          <h2 className="font-oswald text-xl md:text-2xl font-bold tracking-wider text-[#f5c518]">
            TCP
          </h2>
          <p className="text-xs md:text-sm tracking-wide font-light text-gray-500">
            Thrive Clip Production <span className="mx-1 text-gray-700">|</span> Advertising & Business Growth
          </p>
        </div>

        {/* Right Side: Contact Details & Social Links */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-end lg:items-center gap-4 sm:gap-6 md:gap-2 lg:gap-6 w-full md:w-auto text-xs md:text-sm tracking-wide font-light">
          
          {/* Phone Number */}
          <a 
            href="tel:+919983071230" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            +91 9983071230
          </a>

          {/* Action Icons Links */}
          <div className="flex items-center gap-4 text-lg">
            {/* Google Map Location Link */}
            <a 
              href="https://share.google/5LJONtMb42n43Y745" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-[#f5c518] transition-colors duration-200 flex items-center gap-1.5 text-xs md:text-sm font-light"
              title="View Office Location"
            >
              <FaMapMarkerAlt className="text-base" />
              <span>Jaipur, Rajasthan</span>
            </a>

            {/* Divider bar for desktop spacing */}
            <span className="hidden lg:inline text-gray-800">|</span>

            {/* Instagram Profile Link */}
            <a 
              href="https://www.instagram.com/thrive_clip_productions/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-[#f5c518] transition-colors duration-200 flex items-center gap-1.5 text-xs md:text-sm font-light"
              title="Follow us on Instagram"
            >
              <FaInstagram className="text-base" />
              <span>Instagram</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}