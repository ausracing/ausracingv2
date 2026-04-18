"use client"

import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel"

const sponsors = [
  "SPONSOR 1",
  "SPONSOR 2",
  "SPONSOR 3",
  "SPONSOR 4",
  "SPONSOR 5",
  "SPONSOR 6",
  "SPONSOR 7",
  "SPONSOR 8",
  "SPONSOR 9",
  "SPONSOR 10",
  "SPONSOR 11",
  "SPONSOR 12",
  "SPONSOR 13",
  "SPONSOR 14",
  "SPONSOR 15",
  "SPONSOR 16",
  "SPONSOR 17",
  "SPONSOR 18",
]

export default function SponsorsStrip() {
  const autoScroll = React.useRef(
    AutoScroll({
      speed: 0.8,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    })
  )

  return (
    <section className="w-full overflow-hidden bg-black py-5">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <Carousel
          plugins={[autoScroll.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {sponsors.map((sponsor) => (
              <CarouselItem
                key={sponsor}
                className="pl-3 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-[#121316] px-3 text-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 transition-all duration-300 hover:border-brand/30 hover:text-zinc-200">
                  {sponsor}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}