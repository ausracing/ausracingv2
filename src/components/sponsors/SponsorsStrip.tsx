"use client"

import * as React from "react"
import Image from "next/image"
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel"

const baseSponsors = [
  { name: "AGMC", src: "/logos/agmc.png" },
  { name: "Ansys", src: "/logos/ansys1.png" },
  { name: "Automech", src: "/logos/automech2.png" },
  { name: "DEWESoft", src: "/logos/dewesoft.png" },
  { name: "Fluid Codes", src: "/logos/fluidcodes1.png" },
  { name: "Juma Al Majid", src: "/logos/juma.png" },
  { name: "SRTI Park", src: "/logos/srti.png" },
]

const sponsors = [...baseSponsors, ...baseSponsors, ...baseSponsors]

export default function SponsorsStrip() {
  const plugin = React.useRef(
    AutoScroll({
      speed: 0.9,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    })
  )

  return (
    <section className="w-full overflow-hidden bg-[#0a0a0a] py-4">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          {sponsors.map((sponsor, index) => (
            <CarouselItem
              key={`${sponsor.name}-${index}`}
              className="pl-3 md:pl-4 basis-[65%] sm:basis-[40%] md:basis-[28%] lg:basis-[20%] xl:basis-[15%]"
            >
              <div className="flex h-20 w-full items-center justify-center rounded-xl border border-white/10 bg-[#0f0f10] px-6 transition-all duration-300 hover:border-[#fbb03a]/40 hover:bg-[#141414] hover:shadow-[0_0_20px_rgba(251,176,58,0.2)]">
                <div className="relative h-16 w-full">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    fill
            sizes="200rem"
                    className="object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}