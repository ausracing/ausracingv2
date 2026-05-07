"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail(""); 
        
        setTimeout(() => {
          setStatus("idle");
        }, 2500);

      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error("Failed to submit", error);
      setStatus("idle");
    }
  };

  return (
    <>
      {/* THE INPUT FORM */}
      <div className="w-full max-w-md relative">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="email"
            required
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status !== "idle"}
            className="w-full bg-[#18181b] border border-white/10 text-white text-[11px] font-mono tracking-widest px-4 py-3 rounded-lg outline-none focus:border-primary transition-colors disabled:opacity-50"
          />
          
          <button
            type="submit"
            disabled={status !== "idle"}
            className="absolute right-1.5 px-4 py-1.5 bg-primary text-black text-[10px] font-bold font-mono tracking-widest uppercase rounded disabled:opacity-50 hover:bg-primary/90 transition-colors"
          >
            Join
          </button>
        </form>
      </div>

      {/* THE HOVERING FROSTED GLASS POPUP */}
      {status !== "idle" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          
          {/* ✨ FIX: The Frosted Glass Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
          
          {/* ✨ FIX: The Frosted Modal Card */}
          <div className="relative bg-[#18181b]/70 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col items-center justify-center max-w-sm w-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform scale-100 animate-in zoom-in-95 duration-300">
            
            {/* DYNAMIC ICON: Spinner vs Checkmark */}
            {status === "loading" ? (
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
              </div>
            ) : (
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/20 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                <svg className="w-8 h-8 animate-in zoom-in duration-300 delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            {/* DYNAMIC TEXT */}
            <h3 className="text-white font-mono text-lg font-semibold tracking-widest uppercase mb-2 text-center drop-shadow-md">
              {status === "loading" ? "Initializing..." : "Success"}
            </h3>
            
            <p className="text-white/70 text-sm text-center drop-shadow-sm">
              {status === "loading" 
                ? "Connecting to the AUS Racing grid." 
                : "Subscribed to newsletter. Welcome to the team."}
            </p>

          </div>
        </div>
      )}
    </>
  );
}