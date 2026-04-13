// page.tsx — /team route
// OWNER: Hashir
// Server component — full team page.
// Contains: grid of team member cards with image, name, role.
// Images will be provided later — use next/image with placeholder for now.
"use client";

import { useState } from "react";
import Image from "next/image";
import { FILTERS, TEAM_MEMBERS, TEAM_DESCRIPTIONS } from "@/data/team";

/**
 * HELPER COMPONENT: TeamCard
 * Handles local image state to prevent 404 spam.
 */
const TeamCard = ({ member }: { member: any }) => {
  // Generate the dynamic path based on the "Name Photo" requirement
  const namePhotoPath = `/images/team/${member.name.toLowerCase().split(' ').join('-')}.jpg`;
  
  // Local state for the image source
  const [imgSrc, setImgSrc] = useState(namePhotoPath);

  return (
    <div 
      className={`group bg-[#18181b] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer w-[260px] sm:w-[220px] flex-shrink-0 border
        ${member.isLeader 
          ? "border-2 border-primary shadow-[0_0_35px_rgba(234,179,8,0.6)]" 
          : "border border-white/10 hover:border-primary hover:shadow-[0_8px_24px_rgba(234,179,8,0.15)]"
        }`}
    >
      {/* PHOTO CONTAINER */}
      <div className={`w-full aspect-[4/5] relative flex items-center justify-center overflow-hidden border-b ${member.isLeader ? "border-primary" : "border-white/10"}`}>
        
        <Image 
          src={imgSrc}
          alt={member.name}
          fill
          className={`transition-all duration-500 group-hover:scale-105 ${
            imgSrc.includes('placeholder') 
            ? "object-contain p-8 opacity-20" // Logo looks like a watermark
            : "object-cover opacity-60"       // Real photos look like portraits
          }`}
          // If the specific name-photo is missing, it swaps to the placeholder
          onError={() => setImgSrc('/images/placeholder.webp')}
        />

        {/* Overlay to keep the "dark" aesthetic consistent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        {/* OVERLAPPING ROLE BADGE */}
        <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-sm px-2.5 py-1.5 rounded-md flex items-center gap-2 border border-white/5 max-w-[calc(100%-24px)] z-10">
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
            {member.quote || "Driven by performance."}
          </p>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

export default function TeamPage() {
  // STATE: This remembers which filter bubble is currently clicked.
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [showAllFilters, setShowAllFilters] = useState(false);

  const filteredTeam = TEAM_MEMBERS.filter(member => member.category === activeFilter);

  return (
    <div className="min-h-screen bg-background pt-7 pb-16 px-6">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-5">
        <h1 className="font-mono text-3xl font-semibold tracking-[0.12em] uppercase text-white mb-2">
          Meet the Team
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-5"></div>

        {/* FILTER BUTTONS CONTAINER */}
        <div className="flex flex-wrap justify-center items-center gap-2 w-full max-w-[1400px] mx-auto mb-6 px-4"> 
          
          {FILTERS.map((filter, index) => {
            const isActive = activeFilter === filter;
            const isHiddenOnMobile = !showAllFilters && index > 4 && !isActive;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 rounded-full border text-[11px] font-mono tracking-wider transition-all duration-300 uppercase
                  ${isActive ? "bg-primary text-black border-primary font-bold" : "bg-[#18181b] text-white/70 border-white/10 hover:border-white/30 hover:text-white"}
                  ${isHiddenOnMobile ? "hidden md:block" : "block"}
                `}
              >
                {filter}
              </button>
            );
          })}

          {/* INLINE MORE/LESS BUTTON (Mobile Only) */}
          <button
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="md:hidden px-4 py-2 rounded-full border border-primary/50 text-primary text-[11px] font-mono tracking-wider uppercase hover:bg-primary/10 transition-colors"
          >
            {showAllFilters ? "LESS ↑" : "MORE ..."}
          </button>
        </div>
      </div>

      {/* DYNAMIC TEAM DESCRIPTION */}
      <div className="max-w-2xl mx-auto mb-2 flex items-start justify-center px-4 min-h-[40px]">
        <p className="text-[13px] sm:text-[14px] text-white/60 text-center italic transition-opacity duration-300">
          "{TEAM_DESCRIPTIONS[activeFilter] || "Pushing the absolute limits of collegiate motorsport engineering."}"
        </p>
      </div>

      {/* TEAM CARDS CONTAINER */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {[...filteredTeam]
          .sort((a, b) => (a.isLeader === b.isLeader ? 0 : a.isLeader ? -1 : 1))
          .map((member, index) => (
            <TeamCard key={`${member.name}-${index}`} member={member} />
          ))}
      </div>
      
    </div>
  );
}