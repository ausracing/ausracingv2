"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { TeamMember } from "@/lib/queries";

const genderPlaceholder = (gender: string) =>
  gender === 'f' ? '/images/team/fplaceholder.webp' : '/images/team/mplaceholder.webp';

const nameToPath = (name: string) =>
  '/images/team/' + name.toLowerCase().trim().replace(/\s+/g, '-') + '.webp';

const TeamCard = ({ member, priority = false }: { member: TeamMember; priority?: boolean }) => {
  const [imgSrc, setImgSrc] = useState(
    member.photo
      ? urlFor(member.photo)
      : nameToPath(member.name)
  );
  const fallback = genderPlaceholder(member.gender);

  return (
    <div className={`group flex flex-col h-full bg-[#18181b] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer w-[260px] sm:w-[220px] flex-shrink-0 border ${
      member.isLeader
        ? "border-2 border-primary shadow-[0_0_35px_rgba(234,179,8,0.6)]"
        : "border border-white/10 hover:border-primary hover:shadow-[0_8px_24px_rgba(234,179,8,0.45)]"
    }`}>
      <div className={`w-full aspect-[4/5] select-none relative flex items-center justify-center overflow-hidden border-b ${member.isLeader ? "border-primary" : "border-white/10"}`}>
        <Image
          src={imgSrc}
          alt={member.name}
          fill
          draggable={false}
          priority={priority}
          unoptimized={imgSrc.startsWith('http')}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="transition-all select-none duration-500 group-hover:scale-105 object-cover"
          onError={() => setImgSrc(fallback)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>
      <div className="p-4">
        <h3 className="text-[14px] font-semibold tracking-[0.04em] text-white mb-1.5 line-clamp-2">{member.name}</h3>
        <p className="text-[10px] font-medium tracking-widest uppercase text-primary/80 leading-relaxed line-clamp-2">{member.role}</p>
      </div>
    </div>
  );
};

export default function TeamClient({ members }: { members: TeamMember[] }) {
  const [activeFilter, setActiveFilter] = useState("Executive Board");
  const [showAllFilters, setShowAllFilters] = useState(false);

  const categories = [...new Set(members.map(m => m.category))].filter(Boolean);
  const displayFilters = categories.length > 0 ? categories : [];

  const filteredMembers = members.filter(m => m.category === activeFilter);

  const FILTER_ORDER = [
    "Executive Board", "Electrical", "Powertrain", "Suspension & Steering",
    "Chassis", "Aerodynamics", "Brakes", "Drivers", "Public Relations",
    "Internal Relations", "Operations", "Supply Chain", "Web Development",
    "Media & Marketing"
  ];

  const defaultDescriptions: Record<string, string> = {
    "Executive Board": "Guiding the strategic vision, operations, and ultimate success of the racing team.",
    "Electrical": "Designing the custom wiring harnesses and high-voltage systems that power our vehicle.",
    "Powertrain": "Optimizing battery output and energy efficiency for peak track performance.",
    "Suspension & Steering": "Engineering dynamic suspension geometry to maximize tire grip and driver handling.",
    "Chassis": "Fabricating a lightweight, structurally rigid frame to protect the driver and anchor the car.",
    "Aerodynamics": "Manipulating airflow to reduce drag and generate massive cornering downforce.",
    "Brakes": "Engineering high-performance stopping power and thermal management for precision cornering.",
    "Drivers": "Pushing the engineered vehicle to its absolute physical limits on the track.",
    "Public Relations": "Managing sponsor relationships, community outreach, and the team's professional image.",
    "Internal Relations": "Overseeing internal communications, team dynamics, and organizational culture.",
    "Operations": "Managing team finances, logistics, and internal administration for peak operational efficiency.",
    "Supply Chain": "Procuring crucial components and managing logistics to keep manufacturing strictly on schedule.",
    "Web Development": "Building the digital track: developing our high-performance team platform.",
    "Media & Marketing": "Crafting our story and showcasing our speed to the world.",
  };

  // Sort filters by the defined order
  const sortedFilters = [...displayFilters].sort(
    (a, b) => FILTER_ORDER.indexOf(a) - FILTER_ORDER.indexOf(b)
  );

  // Ensure activeFilter is valid
  const validFilter = sortedFilters.includes(activeFilter) ? activeFilter : sortedFilters[0] || "Executive Board";
  const displayMembers = members.filter(m => m.category === validFilter);

  return (
    <div className="min-h-screen bg-background pt-7 pb-16 px-6">
      <div className="text-center max-w-6xl mx-auto mb-5">
        <h1 className="font-orbitron text-3xl font-semibold tracking-[0.12em] uppercase text-white mb-2 select-none cursor-default">
          Meet the <span className="text-primary">Team</span>
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-5"></div>

        <div className="flex flex-wrap justify-center items-center gap-2 w-full max-w-[1400px] mx-auto mb-6 px-4 select-none">
          {sortedFilters.map((filter, index) => {
            const isActive = validFilter === filter;
            const isHidden = !showAllFilters && index > 4 && !isActive;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full border text-[11px] font-mono tracking-wider transition-all duration-300 uppercase cursor-pointer select-none ${
                  isActive
                    ? "bg-primary text-black border-primary font-bold"
                    : "bg-[#18181b] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                } ${isHidden ? "hidden md:block" : "block"}`}
              >
                {filter}
              </button>
            );
          })}
          <button
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="md:hidden px-4 py-2 rounded-full border border-primary/50 text-primary text-[11px] font-mono tracking-wider uppercase hover:bg-primary/10 transition-colors select-none cursor-pointer"
          >
            {showAllFilters ? "LESS ↑" : "MORE ..."}
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-2 flex items-start justify-center px-4 min-h-[40px]">
        <p className="text-[13px] sm:text-[14px] text-white/60 text-center italic transition-opacity duration-300">
          &quot;{defaultDescriptions[validFilter] || "Pushing the absolute limits of collegiate motorsport engineering."}&quot;
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] mx-auto">
        {displayMembers.length > 0 ? (
          [...displayMembers]
            .sort((a, b) => {
              // 1. LEADER RULE
              if (a.isLeader !== b.isLeader) {
                return a.isLeader ? -1 : 1; 
              }
              
              // 2. THE ORDER RULE (If both are leaders (or both are NOT leaders), sort by custom Sanity numbers.)
              const orderA = a.order ?? 0;
              const orderB = b.order ?? 0;
              
              if (orderA !== orderB) {
                return orderA - orderB;
              }
              
              // 3. THE ALPHABETICAL FALLBACK (If they have the exact same number, sort by name)
              return a.name.localeCompare(b.name);
            })
            .map((member, index) => (
              <TeamCard key={member._id} member={member} priority={index < 5} />
            ))
        ) : (
          <p className="text-white/40 text-sm py-10">No members found for this category.</p>
        )}
      </div>
    </div>
  );
}
