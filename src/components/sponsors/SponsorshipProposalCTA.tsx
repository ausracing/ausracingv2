import SponsorFormModal from "./SponsorFormModal";

export default function SponsorshipProposalCTA() {
  return (
    <section className="bg-[#0a0a0a] px-4 sm:px-6 pt-4 pb-16 sm:pt-6 sm:pb-20 text-white">
      <div className="mx-auto max-w-4xl rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#0f1115] px-5 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14 text-center">
        {/* Top Centered Header */}
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#fbb03a]">
          Ready to Collaborate?
        </p>

        {/* 1. Sponsorship Proposal Block */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center border-b border-white/10 pb-8 sm:pb-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-tight break-words max-w-full">
            Sponsorship <span className="text-[#fbb03a]">Proposal</span>
          </h2>

          <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-white/60">
            Explore our full sponsorship package, including tier breakdowns,
            car branding placements, event access, and team reach for the 2026 season.
          </p>

          <div className="mt-5 sm:mt-6 w-full sm:w-auto">
            <a
              href="/sponsorship-proposal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-[#fbb03a] px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#fbb03a] transition hover:bg-[#fbb03a]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fbb03a]"
            >
              <span>View Proposal (PDF)</span>
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 2. Partner With Us Block */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight break-words max-w-full">
            Partner with <span className="text-[#fbb03a]">AUS Racing</span>
          </h2>

          <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-6 sm:leading-7 text-white/60">
            Join us in building the next generation of engineering talent and
            innovation through Formula Student competition.
          </p>

          <div className="mt-6 sm:mt-8 w-full sm:w-auto">
            <SponsorFormModal />
          </div>
        </div>
      </div>
    </section>
  );
}