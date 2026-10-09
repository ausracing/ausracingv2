import SponsorFormModal from "./SponsorFormModal";

export default function SponsorHero() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-8 md:px-10 md:pb-8 md:pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-brand/40 text-brand-500/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
            Partnership Opportunities
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            <span className="block text-white md:inline">AGMC</span>{" "}
            <span className="block text-brand md:inline">AUS Racing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            Join the companies powering one of the UAE&apos;s top Formula
            Student programs. Your support goes directly into the car, the
            competition, and the engineers of tomorrow.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <SponsorFormModal />
            <a
              href="#partners"
              className="border border-[#fbb03a] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#fbb03a] transition hover:bg-[#fbb03a]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fbb03a]"
            >
              Meet Our Partners ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}