// page.tsx — /team route
// OWNER: Hashir
// Server component — full team page.
// Contains: grid of team member cards with image, name, role.
// Images will be provided later — use next/image with placeholder for now.
"use client";

import { useState } from "react";
import Image from "next/image";
import { FILTERS, TEAM_MEMBERS } from "@/data/team";

export default function TeamPage() {

  // STATE: This remembers which filter bubble is currently clicked.
  const [activeFilter, setActiveFilter] = useState("Main Board");
  const [showAllFilters, setShowAllFilters] = useState(false); // NEW STATE

  const filteredTeam = TEAM_MEMBERS.filter(member => member.category === activeFilter);
  
  // Decide how many to show: all of them, or just the first 7
  const visibleFilters = showAllFilters ? FILTERS : FILTERS.slice(0, 7);

  return (
    <div className="min-h-screen bg-background pt-8 pb-16 px-6">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="font-mono text-3xl font-semibold tracking-[0.12em] uppercase text-white mb-2">
          Meet the Team
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-8"></div>

        {/* FILTERS MAP */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {visibleFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-[11px] tracking-[0.07em] uppercase px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer
                ${activeFilter === filter 
                  ? "bg-primary border-primary text-black font-semibold" 
                  : "bg-[#18181b] border-white/10 text-white/70 hover:border-primary hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
          
          {/* THE "SEE MORE" BUTTON */}
          {FILTERS.length > 7 && (
            <button
              onClick={() => setShowAllFilters(!showAllFilters)}
              className="font-mono text-[11px] tracking-[0.1em] font-bold uppercase px-4 py-2 rounded-full border border-white/10 bg-black text-primary hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {showAllFilters ? "LESS ↑" : "MORE ..."}
            </button>
          )}
        </div>
      </div>

      {/* TEAM CARDS CONTAINER - Now using Flex Wrap for auto-centering */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {filteredTeam.map((member, index) => (
          /* CARD WITH CONDITIONAL LEADER GLOW */
          <div 
            key={index} 
            className={`group bg-[#18181b] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer w-[260px] sm:w-[220px] flex-shrink-0
              ${index === 0 
                ? "border-2 border-primary shadow-[0_0_35px_rgba(234,179,8,0.6)]" 
                : "border border-white/10 hover:border-primary hover:shadow-[0_8px_24px_rgba(234,179,8,0.15)]"
              }`}
          >
            {/* PHOTO CONTAINER */}
            <div className={`w-full aspect-[4/5] bg-[#111113] relative flex items-center justify-center 
              ${index === 0 ? "border-b-2 border-primary" : "border-b border-white/10"}
            `}>
              
              {/* NEXT/IMAGE PLACEHOLDER */}
              {/* <Image src="/images/placeholder.webp" fill alt="Profile" className="object-cover opacity-40 grayscale" /> */}
              
              {/* CSS SILHOUETTE (Just until you add the real images) */}
              <div className="flex flex-col items-center opacity-15">
                <div className="w-14 h-14 rounded-full bg-white"></div>
                <div className="w-[90px] h-[60px] bg-white rounded-t-[40px] mt-2"></div>
              </div>

              {/* OVERLAPPING ROLE BADGE */}
              <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-sm px-2.5 py-1.5 rounded-md flex items-center gap-2 border border-white/5 max-w-[calc(100%-24px)]">
                <span className="text-sm leading-none shrink-0">{member.emoji}</span>
                <span className="font-mono text-[9px] font-semibold tracking-widest uppercase text-primary leading-tight text-left line-clamp-2 text-ellipsis overflow-hidden">
                  {member.role}
                </span>
              </div>
            </div>


            {/* CARD INFO */}
            <div className="p-4">
              <h3 className="font-mono text-[14px] font-semibold tracking-[0.04em] text-white mb-2.5">
                {member.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-[1px] bg-white/10"></div>
                <p className="text-[11px] italic text-white/50 truncate max-w-[140px]">
                  {member.quote}
                </p>
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}