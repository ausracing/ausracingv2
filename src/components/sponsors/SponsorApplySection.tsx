import SponsorModal from "../sponsors/SponsorModal"

export default function SponsorApplySection() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[#0f1115] px-8 py-14 text-center md:px-12">
        
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fbb03a]">
          Ready to collaborate?
        </p>

        <h2 className="mt-5 text-3xl font-black uppercase md:text-5xl">
          Partner with <span className="text-[#fbb03a]">AUS Racing</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          Join us in building the next generation of engineering talent and innovation 
          through Formula Student competition.
        </p>

        <div className="mt-10 flex justify-center">
          <SponsorModal />
        </div>
      </div>
    </section>
  )
}