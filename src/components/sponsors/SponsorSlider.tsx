// SponsorSlider.tsx
// OWNER: Yasmeen
// Client component — horizontal auto-scrolling carousel of sponsor logos.
// Uses: shadcn Carousel (dynamic import)
// Logos: grayscale by default, color on hover

"use client";

export default function SponsorsSlider() {
  // The exact sponsor list from your HTML wireframe
  const sponsors = [
    "Sponsor A", "Partner B", "Corp C", "Brand D", 
    "Firm E", "Group F", "Tech G", "Sponsor H"
  ];

  return (
    <>
      {/* Injecting the custom animation directly here so you don't 
        have to mess with tailwind.config.ts before your class. 
      */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 25s linear infinite;
        }
        /* Optional: Pauses the scroll when someone hovers over it */
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="w-full h-14 bg-black border-y border-white/10 flex items-center overflow-hidden relative z-10">
        
        {/* FIXED LEFT LABEL */}
        <div className="h-full flex items-center px-6 lg:px-8 border-r border-white/10 bg-black relative z-20 shrink-0">
          <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-white/50">
            Our Partners
          </span>
        </div>

        {/* SCROLLING TRACK WRAPPER */}
        <div className="flex-1 h-full overflow-hidden relative flex items-center">
          
          {/* Gradients updated to blend into pure black */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* THE MOVING TRACK */}
          <div className="flex animate-ticker w-max">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div 
                key={index} 
                className="h-14 px-8 flex items-center justify-center border-r border-white/5 shrink-0"
              >
                {/* Updated Pill: Solid White BG, Black Text */}
                <div className="h-[22px] px-3.5 bg-white rounded-[3px] flex items-center justify-center">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.08em] text-black">
                    {sponsor}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}