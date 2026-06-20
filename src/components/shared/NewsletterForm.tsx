"use client";

import { useState } from "react";

export default function NewsletterForm() {
  // 1. Added "error" to the state
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "exists" | "error">("idle");

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

      const data = await response.json();

      if (response.ok) {
        if (data.alreadySubscribed) {
          setStatus("exists");
          setEmail(""); // FIX: Clear email if already subscribed
        } else {
          setStatus("success");
          setEmail(""); // FIX: Clear email on success
        }
        
        setTimeout(() => setStatus("idle"), 3000);

      } else {
        // FIX: Trigger the error state if Resend blocks the email (like in testing mode)
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Failed to submit", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
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
          
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
          
          <div className="relative bg-[#18181b]/70 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl flex flex-col items-center justify-center max-w-sm w-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform scale-100 animate-in zoom-in-95 duration-300">
            
            {/* DYNAMIC ICON */}
            {status === "loading" && (
              <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
              </div>
            )}
            
            {status === "success" && (
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/20 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                <svg className="w-8 h-8 animate-in zoom-in duration-300 delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            {status === "exists" && (
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-white border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <svg className="w-8 h-8 animate-in zoom-in duration-300 delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}

            {/* FIX: Red Error Icon */}
            {status === "error" && (
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <svg className="w-8 h-8 animate-in zoom-in duration-300 delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}

            {/* DYNAMIC TEXT */}
            <h3 className="text-white font-mono text-lg font-semibold tracking-widest uppercase mb-2 text-center drop-shadow-md">
              {status === "loading" && "Initializing..."}
              {status === "success" && "Success"}
              {status === "exists" && "Already Registered"}
              {status === "error" && "Connection Error"}
            </h3>
            
            <p className="text-white/70 text-sm text-center drop-shadow-sm">
              {status === "loading" && "Connecting to the AUS Racing grid."}
              {status === "success" && "Subscribed to newsletter. Welcome to the team."}
              {status === "exists" && "This email is already on the grid. We'll keep you posted."}
              {status === "error" && "Transmission failed. Are you using an unverified testing email?"}
            </p>

          </div>
        </div>
      )}
    </>
  );
}