"use client"

import { useEffect, useState } from "react"

function getTimeLeft() {
  const target = new Date("2026-07-15T09:00:00")
  const now = new Date()
  const diff = target.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  }
}

export default function CompetitionCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" })

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(getTimeLeft())
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 md:py-12">
        
        
        {/* DESKTOP HEADER: Silverstone UK */}
        <div className="hidden md:flex items-start justify-between">
          <h2 className="text-[4.5rem] lg:text-[6.5rem] xl:text-[8.5rem] font-black uppercase tracking-[-0.02em] md:font-orbitron leading-none">
            Silverstone
          </h2>
          <h2 className="text-[4.5rem] lg:text-[6.5rem] xl:text-[8.5rem] font-black uppercase tracking-[-0.02em] md:font-orbitron text-[#fbb03a] leading-none">
            UK
          </h2>
        </div>

        {/* DESKTOP COUNTDOWN (md and up) */}
        <div className="hidden md:flex items-end justify-center gap-4 lg:gap-8 xl:gap-10 mt-6 lg:mt-10">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <span className="text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none tracking-normal">
              {timeLeft.days}
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              Days
            </span>
          </div>
          <span className="text-[#fbb03a] text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none pb-4">
            :
          </span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <span className="text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none tracking-normal">
              {timeLeft.hours}
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              Hours
            </span>
          </div>
          <span className="text-[#fbb03a] text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none pb-4">
            :
          </span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none tracking-normal">
              {timeLeft.minutes}
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              Minutes
            </span>
          </div>
          <span className="text-[#fbb03a] text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none pb-4">
            :
          </span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <span className="text-[5rem] lg:text-[8rem] xl:text-[12rem] font-black leading-none tracking-normal">
              {timeLeft.seconds}
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
              Seconds
            </span>
          </div>
        </div>

        {/* MOBILE COUNTDOWN (Unchanged) */}
        <div className="md:hidden text-center mt-10">
          <h2 className="text-[clamp(2rem,8vw,3.5rem)] font-black uppercase">
            Silverstone UK
          </h2>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-[clamp(3rem,12vw,5rem)] font-black leading-none">
                  {val}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {["Days", "Hours", "Minutes", "Seconds"][i]}
                </span>
                {i !== 3 && <span className="hidden">:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Event info */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70 md:text-base">
              Formula Student UK
            </p>
            <p className="mt-2 text-sm text-white/60 md:text-base">
              July 15–19, 2026 · Silverstone Circuit, Northamptonshire
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}