// page.tsx — /team route
// OWNER: Hashir
// Server component — full team page.
// Contains: grid of team member cards with image, name, role.
// Images will be provided later — use next/image with placeholder for now.
"use client";

import { useState } from "react";
import Image from "next/image";
import { FILTERS, TEAM_MEMBERS, TEAM_DESCRIPTIONS } from "@/data/team";

// Fixes "Any" type error
interface TeamMemberData {
  name: string;
  role: string;
  isLeader: boolean;
  category: string;
  hasPhoto: boolean;
  gender: string;
}

/**
 * HELPER COMPONENT: TeamCard
 * Handles local image state to prevent 404 spam.
 */
const TeamCard = ({ member, priority = false }: { member: TeamMemberData, priority?: boolean }) => {
  const namePhotoPath = `/images/team/${member.name.toLowerCase().trim().replace(/\s+/g, '-')}.webp`;
  
  // Determine the correct fallback based on gender (defaults to male if undefined)
  const fallbackPath = member.gender === 'f' 
    ? '/images/team/fplaceholder.webp' 
    : '/images/team/mplaceholder.webp';

  // Initialize state: Skip the network request entirely if hasPhoto is false
  const [imgSrc, setImgSrc] = useState(member.hasPhoto ? namePhotoPath : fallbackPath);

  return (
    <div 
      className={`group flex flex-col h-full bg-[#18181b] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer w-[260px] sm:w-[220px] flex-shrink-0 border
        ${member.isLeader 
          ? "border-2 border-primary shadow-[0_0_35px_rgba(234,179,8,0.6)]" 
          : "border border-white/10 hover:border-primary hover:shadow-[0_8px_24px_rgba(234,179,8,0.45)]"
        }`}
    >
      {/* PHOTO CONTAINER */}
      <div className={`w-full aspect-[4/5] select-none relative flex items-center justify-center overflow-hidden border-b ${member.isLeader ? "border-primary" : "border-white/10"}`}>
        
        <Image 
          src={imgSrc}
          alt={member.name}
          fill
          draggable={false}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          // ✨ FIX: We just apply object-cover directly to everything now!
          className="transition-all select-none duration-500 group-hover:scale-105 object-cover"
          onError={() => setImgSrc(fallbackPath)}
        />

        {/* Overlay to keep the "dark" aesthetic consistent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* CARD INFO */}
      <div className="p-4">
        <h3 className="text-[14px] font-semibold tracking-[0.04em] text-white mb-1.5 line-clamp-2">
          {member.name}
        </h3>
        <p className="text-[10px] font-medium tracking-widest uppercase text-primary/80 leading-relaxed line-clamp-2">
          {member.role}
        </p>
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
      <div className="text-center max-w-6xl mx-auto mb-5">
        <h1 className="font-orbitron text-3xl font-semibold tracking-[0.12em] uppercase text-white mb-2 select-none cursor-default">
          {/* ✨ FIX: Wrap "Team" in a span and give it the primary color */}
          Meet the <span className="text-primary">Team</span>
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-5"></div>

        {/* FILTER BUTTONS CONTAINER */}
        <div className="flex flex-wrap justify-center items-center gap-2 w-full max-w-[1400px] mx-auto mb-6 px-4 select-none">  
          {FILTERS.map((filter, index) => {
            const isActive = activeFilter === filter;
            const isHiddenOnMobile = !showAllFilters && index > 4 && !isActive;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 rounded-full border text-[11px] font-mono tracking-wider transition-all duration-300 uppercase cursor-pointer select-none
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
            className="md:hidden px-4 py-2 rounded-full border border-primary/50 text-primary text-[11px] font-mono tracking-wider uppercase hover:bg-primary/10 transition-colors select-none cursor-pointer"
          >
            {showAllFilters ? "LESS ↑" : "MORE ..."}
          </button>
        </div>
      </div>

      {/* DYNAMIC TEAM DESCRIPTION */}
      <div className="max-w-2xl mx-auto mb-2 flex items-start justify-center px-4 min-h-[40px]">
        <p className="text-[13px] sm:text-[14px] text-white/60 text-center italic transition-opacity duration-300">
          &quot;{TEAM_DESCRIPTIONS[activeFilter] || "Pushing the absolute limits of collegiate motorsport engineering."}&quot;
        </p>
      </div>

      {/* TEAM CARDS CONTAINER */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {[...filteredTeam]
          .sort((a, b) => (a.isLeader === b.isLeader ? 0 : a.isLeader ? -1 : 1))
          .map((member, index) => (
            <TeamCard key={`${member.name}-${index}`} member={member} priority={index < 5}/>
          ))}
      </div>
      
    </div>
  );
}