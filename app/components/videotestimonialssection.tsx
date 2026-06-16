"use client";

import { useState } from "react";
import { FaHeart, FaRegClock, FaShare } from "react-icons/fa";

interface VideoData {
  id: number;
  src: string;      // Cloudinary Video URL
  poster: string;   // Thumbnail Image URL
  caption: string;
}

interface VideoCardProps {
  video: VideoData;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

const videos: VideoData[] = [
  {
    id: 1,
    // Apni Cloudinary video aur poster image links yahan paste karein
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781586271/Arihantam_Vihar._final_2_fr4efn.mp4",
    poster: "/image.png",
    caption: "Luxury Modern Villa Review",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781585745/1.st_final_jhlge3.mp4",
    poster: "/image copy.png",
    caption: "Premium Apartment Tour",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781584674/2nd_final_i6btam.mp4",
    poster: "/image copy 2.png",
    caption: "High-Rise Project Launch",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781590039/HariOm_Residency_2nd_reel_yf6pan.mp4",
    poster: "/image copy 3.png",
    caption: "Client Growth Feedback",
  },
];


const videos2: VideoData[] = [
  {
    id: 5,
    // Apni Cloudinary video aur poster image links yahan paste karein
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781592102/Copy_of_Copy_of_farm_house_edit_2_1_bjjblw.mp4",
    poster: "/image copy 4.png",
    caption: "Luxury Modern Villa Review",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781589067/home_3_final_e4ilzv.mp4",
    poster: "/image copy 5.png",
    caption: "Premium Apartment Tour",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781588530/jaipurdreamhousegroup_1761384848_3751090206603978769_75427125315_kusyzc.mp4",
    poster: "/image copy 6.png",
    caption: "High-Rise Project Launch",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781601923/Copy_of_jaipurdreamhouse_1749091604_3647966768440110122_4358432917_letvhf.mp4",
    poster: "/image copy 11.png",
    caption: "Client Growth Feedback",
  },
];

const videos3: VideoData[] = [
  {
    id: 9,
    // Apni Cloudinary video aur poster image links yahan paste karein
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781597035/55_lhak_villaa_final_1_xwsn2c.mp4",
    poster: "/image copy 8.png",
    caption: "Luxury Modern Villa Review",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781600593/65_lhak_2222_1_1_viczgk.mp4",
    poster: "/image copy 9.png",
    caption: "Premium Apartment Tour",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781588145/2nd_kk_reel_pewaxp.mp4",
    poster: "/image copy 7.png",
    caption: "High-Rise Project Launch",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dubmk66ps/video/upload/v1781601365/32_lhak_vila_final_1_gnukoi.mp4",
    poster: "/image copy 10.png",
    caption: "Client Growth Feedback",
  },
];

function VideoCard({ video, activeId, setActiveId }: VideoCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const isActive = activeId === video.id;

  return (
    <div
      className={`relative w-full rounded-sm overflow-hidden shadow-2xl bg-[#111111] aspect-[9/16] group cursor-pointer transition-all duration-500 border ${
        isActive 
          ? "scale-[1.03] z-20 border-[#f5c518] shadow-[0_10px_30px_rgba(245,197,24,0.15)]" 
          : "border-white/10 hover:border-[#f5c518]/40"
      }`}
      onClick={() => setActiveId(isActive ? null : video.id)}
    >
      {isActive ? (
        <video
          src={video.src}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          controls
          playsInline
        />
      ) : (
        <>
          {/* Thumbnail Image Container */}
          <div className="absolute inset-0">
            <img
              src={video.poster}
              alt={video.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              loading="lazy"
            />
            {/* Dark/Gold Premium Ambient Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Premium Centered Minimal Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-between p-4 z-10">
            {/* Top Row: Category/Caption Spacer */}
            <span className="self-start sm:block hidden bg-[#0b0b0b]/80 backdrop-blur-md text-[#f5c518] text-[9px] font-bold font-oswald tracking-widest uppercase px-2 py-0.5 rounded-xs border border-white/5">
              Client Review
            </span>

            {/* Play Button Icon */}
            <div className="w-12 h-12 rounded-full bg-[#0b0b0b]/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#f5c518] group-hover:border-[#f5c518] group-hover:scale-110 transition-all duration-300 shadow-lg sm:mt-0 mt-[60px]">
              <svg
                className="w-4 h-4 text-white group-hover:text-[#0b0b0b] ml-0.5 transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </div>

            {/* Bottom Title Content */}
            <p className="w-full sm:block hidden font-oswald text-sm font-bold text-white tracking-wide line-clamp-1 bg-[#0b0b0b]/40 backdrop-blur-xs p-1.5 rounded-sm text-center border border-white/5">
              {video.caption}
            </p>
          </div>
        </>
      )}

      {/* Options Trigger (Three Dots) */}
      <div className="sm:block hidden">

      <div
        className="absolute top-3 right-3 z-20 bg-black/40 p-1.5 rounded-full backdrop-blur-xs hover:bg-[#0b0b0b] transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        <div className="flex gap-[3px] flex-col items-center cursor-pointer">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/80 group-hover:bg-[#f5c518]" />
          ))}
        </div>
      </div>
      </div>

      {/* Sliding Premium Sidebar Options Menu */}
      
      {showMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 w-[180px] h-full bg-[#0b0b0b]/95 backdrop-blur-md z-30 p-5 border-l border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
              <p className="text-white text-xs font-bold tracking-wider font-oswald uppercase">Options</p>
              <button 
                onClick={() => setShowMenu(false)} 
                className="text-gray-400 hover:text-[#f5c518] text-xs transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 text-xs font-medium tracking-wide">
              <button className="flex items-center gap-3 hover:text-white transition-colors group text-left">
                <FaHeart className="group-hover:text-[#f5c518] transition-colors" /> Like Video
              </button>
              <button className="flex items-center gap-3 hover:text-white transition-colors group text-left">
                <FaRegClock className="group-hover:text-[#f5c518] transition-colors" /> Watch Later
              </button>
              <button className="flex items-center gap-3 hover:text-white transition-colors group text-left">
                <FaShare className="group-hover:text-[#f5c518] transition-colors" /> Share Link
              </button>
            </div>
          </div>
          
          <p className="text-[10px] text-gray-600 font-oswald tracking-widest uppercase">
            TCP PORTFOLIO
          </p>
        </div>
      )}
    </div>
  );
}

export default function VideoTestimonialsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="testimonials" className="w-full bg-[#0b0b0b]  py-10 md:py-24 border-t border-white/5">
      <div className="sm:mx-[50px] px-4 sm:px-0">

        {/* Section Heading matched with TCP Theme */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Our Production Portfolio
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white">
            Featured <span className="text-[#f5c518]">Videos</span>
          </h2>
        </div>

 <p className="text-[#f5c518] text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Saroda Group
          </p>
        {/* Grid System Configured to 2 Columns Mobile -> 4 Columns Large Screen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>



 <p className="text-[#f5c518] pt-12 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            Dream house group
          </p>
        {/* Grid System Configured to 2 Columns Mobile -> 4 Columns Large Screen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {videos2.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>



        <p className="text-[#f5c518] pt-12 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-oswald">
            KK group
          </p>
        {/* Grid System Configured to 2 Columns Mobile -> 4 Columns Large Screen */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {videos3.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

      </div>
    </section>
  );
}