"use client"

const timeline = [
  {
    date: "SEPT 2023",
    title: "Team Formation",
    active: true,
  },
  {
    date: "AUG 2024",
    title: "Car Design & Team Formation",
    active: true,
  },
  {
    date: "OCT 2024",
    title: "Car Mechanics & Engineering",
    active: true,
  },
  {
    date: "JAN 2025",
    title: "Car Build Initiation",
    active: true,
  },
  {
    date: "MAY 2026",
    title: "Dynamic Testing & Shakedown",
    active: true,
  },
  {
    date: "JULY 2026",
    title: "Formula Student UK, Silverstone",
    active: false,
  },
]

export default function TimelineSection() {
  return (
    <section className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">

   
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our <span className="text-[#fbb03a]">Progress</span>
        </h2>

       
        <div className="relative mt-16">

        
          <div className="absolute top-3 left-0 w-full h-[1px] bg-white/10" />

        
          <div className="flex justify-between">

            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex w-full flex-col items-center text-center"
              >
              
                <div
                  className={`
                    relative z-10 h-4 w-4 rounded-full border
                    ${item.active
                      ? "bg-[#fbb03a] border-[#fbb03a] shadow-[0_0_12px_#fbb03a]"
                      : "bg-black border-white/30"}
                  `}
                />

              
                <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/50 md:text-xs">
                  {item.date}
                </p>

                
                <p className="mt-1 max-w-[140px] text-xs font-medium text-white/80 md:text-sm">
                  {item.title}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}