// AUSParagraph.tsx
// OWNER: Hashir
// Server component — short description block about AUS Racing.
// Placed after hero, before funding bar on homepage.

export default function AUSParagraph() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] w-full border-t border-white/10 relative z-10">
      
      {/* LEFT COLUMN: Text & Stats */}
      <div className="flex flex-col justify-center p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 bg-black">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-7">
          <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-white/50">
            Who We Are
          </span>
          <div className="h-px bg-white/10 flex-1 max-w-[100px]"></div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-[26px] font-semibold font-orbitron text-white leading-[1.2] tracking-[-0.01em] mb-4">
          Student engineers.<br />
          Real competition.<br />
          Real results.
        </h2>

        {/* Body Paragraph */}
        <p className="text-[14px] text-white/70 leading-[1.75] mb-6 max-w-lg">
          AUS Racing is the Formula Student team of the American University of Sharjah. Every year, a cross-disciplinary team of engineers designs, builds, and races a single-seat formula car from scratch — competing against universities worldwide.
        </p>

        {/* Stats Row */}
        <div className="flex gap-8">
          <div>
            <div className="text-[26px] font-semibold font-mono text-white leading-none mb-1">40+</div>
            <div className="text-[8px] font-mono uppercase tracking-[0.1em] text-white/50">Team Members</div>
          </div>
          <div>
            <div className="text-[26px] font-semibold font-mono text-white leading-none mb-1">8</div>
            <div className="text-[8px] font-mono uppercase tracking-[0.1em] text-white/50">Seasons</div>
          </div>
          <div>
            <div className="text-[26px] font-semibold font-mono text-white leading-none mb-1">6</div>
            <div className="text-[8px] font-mono uppercase tracking-[0.1em] text-white/50">Disciplines</div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Photo Placeholder */}
      <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-auto bg-[#1c1c1a] overflow-hidden">
        
        {/* CSS Grid Pattern translated from your HTML */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Placeholder Badge */}
        <div className="relative z-10 border border-white/20 bg-black/50 px-5 py-2 rounded-[3px]">
          <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-white/70">
            Team working — photo placeholder
          </span>
        </div>
        
      </div>

    </section>
  );
}