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

  // Fix: Bypasse es lint error, the feature is intentional
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(getTimeLeft())
    
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 md:py-12">
        <div className="flex items-start md:font-orbitron lg:font-orbitron justify-between">
          <h2 className="text-[3rem] font-black uppercase space-x-2 tracking-[-0.06em] sm:text-[5rem] md:text-[7rem]">
            Silverstone
          </h2>

          <h2 className="text-[3rem] font-black uppercase space-x-2 tracking-[-0.06em] sm:text-[5rem] md:text-[7rem]">
            UK
          </h2>
        </div>

        <div className="hidden md:flex items-end justify-center gap-2 mt-10">
          <span className="text-[3.5rem] font-black leading-none tracking-[-0.08em] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            {timeLeft.days}
          </span>

          <span className="px-1 pb-2 text-[#fbb03a] text-[3.5rem] font-black sm:px-2 sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            :
          </span>

          <span className="text-[3.5rem] font-black leading-none tracking-[-0.08em] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            {timeLeft.hours}
          </span>

          <span className="px-1 pb-2 text-[#fbb03a] text-[3.5rem] font-black sm:px-2 sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            :
          </span>

          <span className="text-[3.5rem] font-black leading-none tracking-[-0.08em] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            {timeLeft.minutes}
          </span>

          <span className="px-1 pb-2 text-[#fbb03a] text-[3.5rem] font-black sm:px-2 sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            :
          </span>

          <span className="text-[3.5rem] font-black leading-none tracking-[-0.08em] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
            {timeLeft.seconds}
          </span>
        </div>

        <div className="hidden md:grid mt-3 grid-cols-4 text-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <p key={label} className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/50 md:text-xs">
              {label}
            </p>
          ))}
        </div>

        <div className="md:hidden text-center mt-10">

          <h2 className="text-[clamp(2rem,8vw,3.5rem)] font-black uppercase">
            Silverstone UK
          </h2>

          <div className="mt-6 flex justify-center gap-2">

            {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[clamp(2.5rem,10vw,4rem)] font-black">
                  {val}
                </span>

                {i !== 3 && (
                  <span className="text-[#fbb03a] text-[clamp(2.5rem,10vw,4rem)] font-black">
                    :
                  </span>
                )}
              </div>
            ))}

          </div>

          <div className="mt-3 flex justify-center gap-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <p key={label} className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                {label}
              </p>
            ))}
          </div>

        </div>

     
        <div className="mt-10 border-t border-white/10 pt-6">
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