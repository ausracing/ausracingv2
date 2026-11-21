"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { TeamMember } from "@/lib/queries";

const genderPlaceholder = (gender: string) =>
  gender === "f"
    ? "/images/team/fplaceholder.webp"
    : "/images/team/mplaceholder.webp";

const nameToPath = (name: string) =>
  "/images/team/" + name.toLowerCase().trim().replace(/\s+/g, "-") + ".webp";

const TeamCard = ({
  member,
  priority = false,
}: {
  member: TeamMember;
  priority?: boolean;
}) => {
  const [imgSrc, setImgSrc] = useState(
    member.photo ? urlFor(member.photo) : nameToPath(member.name),
  );
  const fallback = genderPlaceholder(member.gender);

  // Split dual roles separated by "/" into distinct lines
  const roles = member.role
    .split("/")
    .map((r) => r.trim())
    .filter(Boolean);
  const hasMultipleRoles = roles.length > 1;
  const isLongName = member.name.trim().length > 20;

  return (
    <div
      className={`group flex flex-col bg-[#18181b] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer w-[250px] sm:w-[215px] lg:w-[232px] flex-shrink-0 border ${
        member.isLeader
          ? "border-2 border-primary shadow-[0_0_35px_rgba(234,179,8,0.6)]"
          : "border-white/10 hover:border-primary hover:shadow-[0_8px_24px_rgba(234,179,8,0.45)]"
      }`}
    >
      <div
        className={`w-full aspect-[4/5] select-none relative flex items-center justify-center overflow-hidden border-b ${
          member.isLeader ? "border-primary" : "border-white/10"
        }`}
      >
        <Image
          src={imgSrc}
          alt={member.name}
          fill
          draggable={false}
          priority={priority}
          unoptimized={imgSrc.startsWith("http")}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 25vw, 20vw"
          className="transition-all select-none duration-500 group-hover:scale-105 object-cover object-top"
          onError={() => setImgSrc(fallback)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* 2nd title sits directly under 1st; 1.5x role-height padding (~15px) on single-role cards keeps row height uniform */}
      <div className="px-3.5 pt-3 pb-3.5 flex flex-col justify-start">
        <h3
          className={`${
            isLongName ? "text-[12.5px] leading-snug" : "text-[14px] leading-tight"
          } font-semibold tracking-[0.04em] text-white mb-1 line-clamp-2`}
        >
          {member.name}
        </h3>

        <div className={`flex flex-col ${!hasMultipleRoles ? "pb-[15px]" : ""}`}>
          {roles.map((roleItem, idx) => (
            <p
              key={idx}
              className="text-[10px] tracking-widest leading-[1.4] font-medium uppercase text-primary/80"
            >
              {roleItem}
              {idx === 0 && hasMultipleRoles ? " ·" : ""}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function TeamClient({ members }: { members: TeamMember[] }) {
  const [activeFilter, setActiveFilter] = useState("Executive Board");
  const [showAllFilters, setShowAllFilters] = useState(false);

  const categories = [...new Set(members.map((m) => m.category))].filter(
    Boolean,
  );
  const displayFilters = categories.length > 0 ? categories : [];

  const FILTER_ORDER = [
    "Executive Board",
    "Mechanical",
    "Electrical",
    "Concept Class",
    "Driverless",
    "Treasury",
    "External Relations",
    "Internal Relations",
    "Supply Chain",
    "Web Development",
    "Media & Marketing",
  ];

  const defaultDescriptions: Record<string, string> = {
    "Executive Board":
      "Guiding the strategic vision, operations, and ultimate success of the racing team.",
    Mechanical:
      "Engineering, fabricating, and optimizing the chassis, powertrain, aero, suspension, and braking systems.",
    Electrical:
      "Designing custom wiring harnesses, high-voltage battery architecture, and telemetry sensors.",
    "Concept Class":
      "Developing early-stage vehicle concepts, engineering design studies, and competition proposals.",
    Driverless:
      "Building autonomous perception, planning, and control systems for driverless competition.",
    Treasury:
      "Overseeing team budgeting, financial planning, allocations, and monetary compliance.",
    "External Relations":
      "Managing industry sponsorships, corporate partnerships, and public relations.",
    "Internal Relations":
      "Managing team communications, recruitment, culture, and organizational operations.",
    "Supply Chain":
      "Procuring competition-grade materials, components, and managing logistics.",
    "Web Development":
      "Building the digital track: developing and maintaining our high-performance web platform.",
    "Media & Marketing":
      "Showcasing our builds, branding, and storytelling to the motorsport community.",
  };

  // Sort filters by the defined order
  const sortedFilters = [...displayFilters].sort(
    (a, b) => FILTER_ORDER.indexOf(a) - FILTER_ORDER.indexOf(b),
  );

  // Ensure activeFilter is valid
  const validFilter = sortedFilters.includes(activeFilter)
    ? activeFilter
    : sortedFilters[0] || "Executive Board";
  const displayMembers = members.filter((m) => m.category === validFilter);

  return (
    <div className="min-h-screen bg-background pt-7 pb-16 px-6">
      <div className="text-center max-w-6xl mx-auto mb-5">
        <h1 className="font-orbitron text-3xl font-semibold tracking-[0.12em] uppercase text-white mb-2 select-none cursor-default">
          Meet the <span className="text-primary">Team</span>
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-5"></div>

        <div className="flex flex-wrap justify-center items-center gap-2 w-full max-w-[1400px] mx-auto mb-3.5 px-4 select-none">
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

      {/* Bound to 1 line on desktop, stretching up to 80% of the 1300px row width (1040px) */}
      <div className="w-full max-w-[1040px] mx-auto mb-3 flex items-center justify-center px-4">
        <p className="w-full text-[13px] sm:text-[14px] text-white/60 text-center italic md:truncate transition-opacity duration-300">
          &quot;
          {defaultDescriptions[validFilter] ||
            "Pushing the absolute limits of collegiate motorsport engineering."}
          &quot;
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 lg:gap-5 max-w-[1300px] mx-auto">
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
          <p className="text-white/40 text-sm py-10">
            No members found for this category.
          </p>
        )}
      </div>
    </div>
  );
}