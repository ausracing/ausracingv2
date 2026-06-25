"use client";

import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

interface Section {
  image?: string;
  text?: string;
  heading?: string;
}

interface PageFlipMethods {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    flip: (index: number) => void;
  };
}

export default function FlipBook({
  sections,
}: {
  sections: Section[];
}) {
  const bookRef = useRef<PageFlipMethods | null>(null);
  
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // NEW: Track the current page instead of using a timer
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Delays the update to the next event loop tick, clearing the lint error safely
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    
    window.addEventListener("resize", checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const goNext = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipNext();
  };

  const goPrev = () => {
    if (bookRef.current) bookRef.current.pageFlip().flipPrev();
  };

  // NEW: Update state whenever the user flips a page
  const onPageFlip = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  const paddedSections = [...sections]; 
  if (paddedSections.length % 2 !== 0) {
    paddedSections.push({}); 
  }

  if (!mounted) return null;

  return (
    <div className="w-full h-full flex justify-center items-center relative group">
      
      {/* LEFT BUTTON */}
      <button
        onClick={goPrev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-40 h-[60%] w-14 items-center justify-center bg-transparent hover:bg-white/5 transition-all duration-300 rounded-r-2xl text-white/20 hover:text-white"
        aria-label="Previous Page"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* FLIP INDICATOR - Now responsive to current page and positioned bottom-right */}
      <div 
        className={`
          absolute bottom-6 right-6 md:bottom-12 md:right-12 z-50 pointer-events-none 
          transition-opacity duration-700 ease-in-out
          ${currentPage === 0 ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className="
          bg-black/80 backdrop-blur-md 
          px-4 py-2 md:px-6 md:py-3 rounded-full 
          flex items-center gap-2 md:gap-3 
          animate-pulse 
          border border-amber-500/30 shadow-2xl shadow-black
        ">
          <span className="text-xs md:text-sm font-medium tracking-wide text-white">
            {isMobile ? "Swipe to flip" : "Click to flip"}
          </span>
          <svg 
            className="w-4 h-4 md:w-5 md:h-5 text-amber-500" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <HTMLFlipBook
        key={isMobile ? "mobile-book" : "desktop-book"} 
        ref={bookRef}
        width={isMobile ? 400 : 700}
        height={isMobile ? 600 : 950}
        size="stretch"
        minWidth={300}
        maxWidth={isMobile ? 600 : 1000}
        minHeight={400}
        maxHeight={1600}
        showCover={isMobile} 
        mobileScrollSupport={true}
        maxShadowOpacity={0.5}
        drawShadow={true}
        flippingTime={800}
        usePortrait={true} 
        startPage={0}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className="flipbook drop-shadow-2xl"
        style={{ width: "100%", height: "100%" }}
        onFlip={onPageFlip} // NEW: Hooked up the event listener
      >
        {paddedSections.map((section, index) => (
          <div
            key={index}
            className="bg-black text-white h-full w-full flex flex-col overflow-hidden border border-white/5 relative"
          >
            {section.image && (
              <div className="flex-1 w-full h-full relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.image}
                  alt={`Page ${index + 1}`}
                  className="w-full h-full object-contain absolute inset-0"
                />
              </div>
            )}

            {/* Back to Start Button on the very last page */}
            {index === paddedSections.length - 1 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                <button 
                  onClick={() => bookRef.current?.pageFlip().flip(0)}
                  className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all"
                >
                  Back to Start
                </button>
              </div>
            )}

            {(section.heading || section.text) && (
              <div className="p-6 bg-black z-10 flex-1 flex flex-col">
                {section.heading && <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>}
                {section.text && <p className="text-zinc-400 leading-relaxed">{section.text}</p>}
              </div>
            )}
          </div>
        ))}
      </HTMLFlipBook>

      {/* RIGHT BUTTON */}
      <button
        onClick={goNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-40 h-[60%] w-14 items-center justify-center bg-transparent hover:bg-white/5 transition-all duration-300 rounded-l-2xl text-white/20 hover:text-white"
        aria-label="Next Page"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}