"use client";

import HTMLFlipBook from "react-pageflip";

interface Section {
  image?: string;
  text?: string;
  heading?: string;
}

export default function FlipBook({
  sections,
}: {
  sections: Section[];
}) {
  return (
    <div className="flex justify-center">
     <HTMLFlipBook
  width={700}
  height={950}
  size="stretch"
  minWidth={320}
  maxWidth={1200}
  minHeight={450}
  maxHeight={1600}
  showCover
  mobileScrollSupport
  maxShadowOpacity={0.5}
  drawShadow
  flippingTime={800}
  usePortrait
  startPage={0}

  startZIndex={0}
  autoSize={true}
  clickEventForward={true}
  useMouseEvents={true}
  swipeDistance={30}
  showPageCorners={true}
  disableFlipByClick={false}

  // ✅ THESE FIX YOUR ERROR
  className="flipbook"
  style={{}}
>
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white text-black h-full flex flex-col overflow-hidden"
          >
            {section.image && (
              <div className="flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.image}
                  alt={`Page ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {(section.heading || section.text) && (
              <div className="p-6">
                {section.heading && (
                  <h2 className="text-2xl font-bold mb-3">
                    {section.heading}
                  </h2>
                )}

                {section.text && (
                  <p className="text-zinc-700 leading-relaxed">
                    {section.text}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}