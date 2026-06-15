"use client";

import React from "react";

interface DriveVideo {
  id: string;
  title: string;
  category: string;
  // Google Drive video link ke end me humesha '/preview' hona chahiye taaki iframe load ho sake
  embedUrl: string; 
}

export default function VideoGallery() {
  // Aap yahan apni Google Drive ki linked strings ko paste kar sakte hain
  const myDriveVideos: DriveVideo[] = [
    {
      id: "vid-1",
      title: "Ultra Luxury Modern Villa Walkthrough",
      category: "Cinematic Shoot",
      embedUrl: "https://drive.google.com/file/d/1OslP_flmktT9f2WWuC-siU60r4OxyZp2/preview",
    },
    {
      id: "vid-2",
      title: "Premium 3BHK Apartment Indoor Tour",
      category: "Property Reel",
      embedUrl: "https://drive.google.com/file/d/1_aD0PS7XCysXlb4g2UwyTHTzczmo-cXC/preview",
    },
    {
      id: "vid-3",
      title: "Commercial High-Rise Mega Launch",
      category: "Ad Campaign",
      embedUrl: "https://drive.google.com/file/d/1HWpAH084UBSGX1K0GGcjADv2FY8CVONc/preview",
    },
    {
      id: "vid-4",
      title: "Elegant Minimalist Penthouse Review",
      category: "Premium Edit",
      embedUrl: "https://drive.google.com/file/d/1ZAdZh29dzvEJsESxjbPf9IvUSl-TEXLa/preview",
    },
  ];

  const myDriveVideos2: DriveVideo[] = [
    {
      id: "vid-1",
      title: "Ultra Luxury Modern Villa Walkthrough",
      category: "Cinematic Shoot",
      embedUrl: "https://drive.google.com/file/d/1dcWiOuwV6VpJANQzud4v74AH9EzmXaDp/preview",
    },
    {
      id: "vid-2",
      title: "Premium 3BHK Apartment Indoor Tour",
      category: "Property Reel",
      embedUrl: "https://drive.google.com/file/d/1yuPEusHR6-gE-d3TkgmuZ29K7XdNQElZ/preview",
    },
    {
      id: "vid-3",
      title: "Commercial High-Rise Mega Launch",
      category: "Ad Campaign",
      embedUrl: "https://drive.google.com/file/d/1bW7lTjvhufJCFGcRqbFmHeuCUzj7a2vw/preview",
    },
    {
      id: "vid-4",
      title: "Elegant Minimalist Penthouse Review",
      category: "Premium Edit",
      embedUrl: "https://drive.google.com/file/d/1bbjDCqDTjNXQ8DlBmnjJkX_umfZ0C8OL/preview",
    },
  ];

  const myDriveVideos3: DriveVideo[] = [
    {
      id: "vid-1",
      title: "Ultra Luxury Modern Villa Walkthrough",
      category: "Cinematic Shoot",
      embedUrl: "https://drive.google.com/file/d/1jamfrDWSjFlqhvifLwi38kfvGNr6qx2l/preview",
    },
    {
      id: "vid-2",
      title: "Premium 3BHK Apartment Indoor Tour",
      category: "Property Reel",
      embedUrl: "https://drive.google.com/file/d/1Fao5GluGVeFi11jQi-MlX02KFEhC1J75/preview",
    },
    {
      id: "vid-3",
      title: "Commercial High-Rise Mega Launch",
      category: "Ad Campaign",
      embedUrl: "https://drive.google.com/file/d/17rvaSzqyweuS5VXYiiIsuPCHPRLCnIzD/preview",
    },
    {
      id: "vid-4",
      title: "Elegant Minimalist Penthouse Review",
      category: "Premium Edit",
      embedUrl: "https://drive.google.com/file/d/1VXoX8WLZ_Uf_EuS0Y9AmovOq09pq-xIv/preview",
    },
  ];

  return (
    <section id="portfolio" className="w-full bg-[#0b0b0b]  py-10 md:py-24 border-t border-white/5">
      <div className="sm:mx-[50px] px-4 sm:px-0">
        
        {/* Section Heading Setup */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Our Production Portfolio
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white">
            Featured <span className="text-[#f5c518]">Videos</span>
          </h2>
        </div>

        {/* 
          Custom Breakpoints Implementation:
          1. Mobile (default)     -> grid-cols-1 (sm se niche 1 video)
          2. Small screen (sm:)   -> sm:grid-cols-2 (sm se md tak 2 video)
          3. Medium screen (md:)  -> md:grid-cols-3 (md se lg tak 3 video)
          4. Large screen (lg:)   -> lg:grid-cols-4 (lg se upar 4 video)
        */}
        <div className="">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Dream House Group
          </p>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myDriveVideos.map((video) => (
            <div 
              key={video.id} 
              className="bg-[#111111] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#f5c518]/40 hover:shadow-[0_10px_30px_rgba(245,197,24,0.05)] transition-all duration-300 relative"
            >
              
              {/* Aspect Ratio Box Custom Video Container */}
              <div className="relative w-full h-[350px] aspect-video bg-black overflow-hidden border-b border-white/5">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full border-0 absolute inset-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                  title={video.title}
                />
                
                {/* Micro Floating Overlay Category Tag */}
                <span className="absolute top-3 left-3 bg-[#0b0b0b]/90 backdrop-blur-md text-[#f5c518] text-[9px] font-bold font-oswald tracking-widest uppercase px-2 py-0.5 rounded-xs z-20 border border-white/5">
                  {video.category}
                </span>
              </div>

              {/* Text Description Block Below Player */}
              <div className="p-4 flex flex-col gap-1 bg-[#121212]">
                <h4 className="font-oswald text-sm md:text-base font-bold text-white tracking-wide group-hover:text-[#f5c518] transition-colors duration-200 line-clamp-1">
                  {video.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider font-sans">
                  High-Impact Clip
                </p>
              </div>

            </div>
          ))}
        </div>


        <div className="pt-12">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            KK Group
          </p>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myDriveVideos2.map((video) => (
            <div 
              key={video.id} 
              className="bg-[#111111] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#f5c518]/40 hover:shadow-[0_10px_30px_rgba(245,197,24,0.05)] transition-all duration-300 relative"
            >
              
              {/* Aspect Ratio Box Custom Video Container */}
              <div className="relative w-full h-[350px] aspect-video bg-black overflow-hidden border-b border-white/5">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full border-0 absolute inset-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                  title={video.title}
                />
                
                {/* Micro Floating Overlay Category Tag */}
                <span className="absolute top-3 left-3 bg-[#0b0b0b]/90 backdrop-blur-md text-[#f5c518] text-[9px] font-bold font-oswald tracking-widest uppercase px-2 py-0.5 rounded-xs z-20 border border-white/5">
                  {video.category}
                </span>
              </div>

              {/* Text Description Block Below Player */}
              <div className="p-4 flex flex-col gap-1 bg-[#121212]">
                <h4 className="font-oswald text-sm md:text-base font-bold text-white tracking-wide group-hover:text-[#f5c518] transition-colors duration-200 line-clamp-1">
                  {video.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider font-sans">
                  High-Impact Clip
                </p>
              </div>

            </div>
          ))}
        </div>


        <div className="pt-12">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Dream House Group
          </p>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myDriveVideos3.map((video) => (
            <div 
              key={video.id} 
              className="bg-[#111111] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#f5c518]/40 hover:shadow-[0_10px_30px_rgba(245,197,24,0.05)] transition-all duration-300 relative"
            >
              
              {/* Aspect Ratio Box Custom Video Container */}
              <div className="relative w-full h-[350px] aspect-video bg-black overflow-hidden border-b border-white/5">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full border-0 absolute inset-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                  title={video.title}
                />
                
                {/* Micro Floating Overlay Category Tag */}
                <span className="absolute top-3 left-3 bg-[#0b0b0b]/90 backdrop-blur-md text-[#f5c518] text-[9px] font-bold font-oswald tracking-widest uppercase px-2 py-0.5 rounded-xs z-20 border border-white/5">
                  {video.category}
                </span>
              </div>

              {/* Text Description Block Below Player */}
              <div className="p-4 flex flex-col gap-1 bg-[#121212]">
                <h4 className="font-oswald text-sm md:text-base font-bold text-white tracking-wide group-hover:text-[#f5c518] transition-colors duration-200 line-clamp-1">
                  {video.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider font-sans">
                  High-Impact Clip
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}