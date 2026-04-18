import SponsorModal from "./SponsorModal"
export default function SponsorHero() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-brand/40 text-brand-500/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
            Partnership Opportunities
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            <span className="block text-white">Partner With</span>
            <span className="block text-brand">AUS Racing</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            Join the companies powering one of the UAE&apos;s top Formula Student
            programs. Your support goes directly into the car, the competition,
            and the engineers of tomorrow.
          </p>
          <div className="mt-8">
            <SponsorModal />
          </div>
        </div>
      </div>
    </section>
  )
}