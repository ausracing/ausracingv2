const timeline = [
  {
    date: "SEPTEMBER 2023",
    title: "Team Formation",
  },
  {
    date: "AUGUST 2024",
    title: "Car Design & Team Formation",
  },
  {
    date: "OCTOBER 2024",
    title: "Car Mechanics & Engineering",
  },
  {
    date: "JANUARY 2025",
    title: "Car Build Initiation",
  },
  {
    date: "MAY 2025",
    title: "Dynamic Testing & Shakedown",
  },
  {
    date: "JULY 2026",
    title: "Formula Student UK, Silverstone",
  },
]

export default function TimelineSection() {
  return (
    <section id="our-car" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        

   
        <h2 className="text-center text-3xl font-bold md:text-5xl font-orbitron uppercase">
          Our <span className="text-[#fbb03a]">Progress</span>
        </h2>

   
        <div className="relative mt-16 hidden md:block">
          <div className="absolute left-0 top-3 h-[1px] w-full bg-white/10" />

          <div className="flex justify-between">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className="relative flex w-full flex-col items-center text-center"
              >
  
                <div
                  className={`relative z-10 h-4 w-4 rounded-full border ${
                    index < timeline.length - 1
                      ? "border-[#fbb03a] bg-[#fbb03a] shadow-[0_0_12px_rgba(251,176,58,0.8)]"
                      : "border-white/30 bg-black"
                  }`}
                />

     
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  {item.date}
                </p>

                
                <p className="mt-1 max-w-[140px] text-xs font-medium  text-white/70 md:text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

   
        <div className="relative mt-12 md:hidden">
          
       
          <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/10" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={item.title}
                  className={`relative flex ${
                    isLeft ? "justify-start pr-8" : "justify-end pl-8"
                  }`}
                >
               
                  <div className="absolute left-1/2 top-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border border-[#fbb03a] bg-[#fbb03a] shadow-[0_0_12px_rgba(251,176,58,0.8)]" />

                
                  <div className="w-[44%] rounded-[20px] border border-[#fbb03a]/25 bg-[#0f1115] p-4 text-left transition hover:border-[#fbb03a]/60 hover:shadow-[0_0_20px_rgba(251,176,58,0.15)]">
                    
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fbb03a]">
                      {item.date}
                    </p>

                    <h3 className="mt-2 text-base font-bold leading-6 text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}