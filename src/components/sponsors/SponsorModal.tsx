"use client"

import { useState } from "react"

const calendlyLink = process.env.NEXT_PUBLIC_CALENDLY_LINK

export default function SponsorModal() {
  const [open, setOpen] = useState(false)

  if (!calendlyLink) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-[#fbb03a] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(251,176,58,0.35)] active:scale-95"
      >
        Become a Partner
      </button>

      {open && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 px-4 py-6">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#111214] p-5 text-white md:p-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-5 z-10 cursor-pointer text-3xl text-gray-400 transition hover:text-white"
            >
              ×
            </button>

            <div className="pr-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fbb03a]">
                Scheduling Service
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase md:text-4xl">
                Book a Meeting With{" "}
                <span className="text-[#fbb03a]">AUS Racing</span>
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60">
                Choose a time to speak with the team about sponsorship
                opportunities and partnership options.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] border border-white/10 bg-white">
              <iframe
                src={calendlyLink}
                title="Book a meeting with AUS Racing"
                className="h-[560px] w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}