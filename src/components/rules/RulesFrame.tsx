"use client";

import { useEffect, useRef } from "react";

// Sizes the iframe to its content so the page scrolls once (the site footer sits below it).
export default function RulesFrame() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = ref.current;
    if (!frame) return;
    let observer: ResizeObserver | undefined;

    // documentElement.offsetHeight is the content height; scrollHeight can't go below the frame's own height.
    const fit = () => {
      const doc = frame.contentDocument;
      if (!doc?.body) return;
      const resize = () => {
        frame.style.height = `${doc.documentElement.offsetHeight}px`;
      };
      observer?.disconnect();
      resize();
      observer = new ResizeObserver(resize);
      observer.observe(doc.body);
    };

    // The iframe can finish loading before hydration, so fit now if it already has.
    if (frame.contentDocument?.readyState === "complete") fit();
    frame.addEventListener("load", fit);
    return () => {
      frame.removeEventListener("load", fit);
      observer?.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={ref}
      src="/fsuk-rules.html"
      title="FSUK 2026 rules search"
      scrolling="no"
      className="block w-full min-h-[calc(100dvh-68px)] border-0 bg-[#0b0b0c]"
    />
  );
}
