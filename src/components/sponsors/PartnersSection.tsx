import Image from "next/image"

export default function PartnersSection() {
  return (
    <section className="bg-[#0a0a0a] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight md:whitespace-nowrap">
            <span className="text-white">Our </span>
            <span className="text-[#fbb03a]">Partners</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-400">
            Every partner is recognised on the car, at events, and across our platforms.
          </p>
        </div>


        <div className="mt-10 flex justify-center">
          <Image
            src="/Logos_sponsors.png"
            alt="Main Sponsors"
            width={900}
            height={400}
            className="h-auto max-w-full object-contain"
          />
        </div>


      </div>
    </section>
  )
}