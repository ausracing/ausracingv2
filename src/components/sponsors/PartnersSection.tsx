import Image from "next/image";
import { sponsors, type Sponsor } from "@/data/sponsors";

// Shared card style with group, relative positioning, and overflow-hidden for the hover effect
const CARD =
  "group relative overflow-hidden rounded-[24px] border border-[#fbb03a]/25 bg-[#0f1115] transition-all hover:border-[#fbb03a]/40";

function SponsorLogo({
  sponsor,
  className,
}: {
  sponsor: Sponsor;
  className: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-white/5 p-3 ${className}`}
    >
      <div className="relative h-full w-full">
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          fill
          sizes="(min-width: 768px) 288px, 100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

function TitleCard({ sponsor }: { sponsor: Sponsor }) {
  const isExternal = sponsor.url !== "#";
  const Wrapper = isExternal ? "a" : "div";
  const linkProps = isExternal
    ? { href: sponsor.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`${CARD} flex flex-col gap-6 p-6 md:flex-row md:items-center md:gap-8 md:p-7`}
    >
      <SponsorLogo
        sponsor={sponsor}
        className="h-40 w-full md:h-44 md:w-72 md:shrink-0"
      />
      <div className="flex-1 pb-4">
        <h4 className="flex items-center text-xl font-semibold tracking-wide text-white md:text-2xl">
          {sponsor.name}
          {isExternal && (
            <svg
              className="ml-2 h-5 w-5 text-[#fbb03a] opacity-70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
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
          )}
        </h4>
        <div className="mt-3 h-[3px] w-8 bg-[#fbb03a]" />
        {/* line-clamp-2 forces the text to gracefully truncate after 2 lines */}
        <p className="mt-4 line-clamp-6 text-sm leading-7 text-gray-400 md:text-base">
          {sponsor.description}
        </p>
      </div>

      {isExternal && (
        <div className="absolute inset-x-0 bottom-0 flex h-16 items-end justify-center bg-gradient-to-t from-[#fbb03a]/20 via-[#fbb03a]/5 to-transparent pb-3 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#fbb03a]">
            Know More
          </span>
        </div>
      )}
    </Wrapper>
  );
}

function VerticalCard({
  sponsor,
  compact = false,
}: {
  sponsor: Sponsor;
  compact?: boolean;
}) {
  const isExternal = sponsor.url !== "#";
  const Wrapper = isExternal ? "a" : "div";
  const linkProps = isExternal
    ? { href: sponsor.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`${CARD} flex h-full flex-col ${
        compact ? "p-5" : "p-6 md:p-7"
      }`}
    >
      <SponsorLogo
        sponsor={sponsor}
        className={compact ? "h-24 w-full" : "h-32 w-full md:h-36"}
      />
      <h4
        className={`mt-5 flex items-center font-semibold tracking-wide text-white ${
          compact ? "text-lg" : "text-xl md:text-2xl"
        }`}
      >
        {sponsor.name}
        {isExternal && (
          <svg
            className={`ml-2 text-[#fbb03a] opacity-70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 ${
              compact ? "h-4 w-4" : "h-5 w-5"
            }`}
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
        )}
      </h4>
      {/* line-clamp-6 ensures the boxes don't resize unevenly due to text */}
      <p
        className={`mb-6 mt-3 line-clamp-6 text-gray-400 ${
          compact ? "text-sm leading-6" : "text-sm leading-7 md:text-base"
        }`}
      >
        {sponsor.description}
      </p>

      {isExternal && (
        <div className="absolute inset-x-0 bottom-0 flex h-20 items-end justify-center bg-gradient-to-t from-[#fbb03a]/20 via-[#fbb03a]/5 to-transparent pb-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#fbb03a]">
            Know More
          </span>
        </div>
      )}
    </Wrapper>
  );
}

function TierHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="border-l-4 border-[#fbb03a] pl-4 text-xl font-semibold text-[#fbb03a] md:text-2xl">
      {children}
    </h3>
  );
}

export default function PartnersSection() {
  const titleSponsors = sponsors.filter((s) => s.tier === "title");
  const officialSponsors = sponsors.filter((s) => s.tier === "official");
  const partners = sponsors.filter((s) => s.tier === "partner");

  return (
    <section id="partners" className="scroll-mt-20 bg-[#0a0a0a] pb-16 pt-4 text-white md:pt-6">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black uppercase leading-tight md:whitespace-nowrap md:text-5xl">
            <span className="text-white">Our </span>
            <span className="text-[#fbb03a]">Partners</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 md:text-base">
            Every partner is recognised on the car, at events, and across our
            platforms.
          </p>
        </div>

        {/* Title Sponsor */}
        {titleSponsors.length > 0 && (
          <div className="mt-12">
            <TierHeading>Title Sponsor</TierHeading>
            <div className="mt-8 space-y-6">
              {titleSponsors.map((s) => (
                <TitleCard key={s.name} sponsor={s} />
              ))}
            </div>
          </div>
        )}

        {/* Official Sponsors */}
        {officialSponsors.length > 0 && (
          <div className="mt-16">
            <TierHeading>Official Sponsors</TierHeading>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {officialSponsors.map((s) => (
                <VerticalCard key={s.name} sponsor={s} />
              ))}
            </div>
          </div>
        )}

        {/* Partners */}
        {partners.length > 0 && (
          <div className="mt-16">
            <TierHeading>Partners</TierHeading>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((s) => (
                <VerticalCard key={s.name} sponsor={s} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}