type BenefitCardProps = {
  title: string;
  description: string;
};

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="rounded-[24px] border border-[#fbb03a]/25 bg-[#0f1115] p-6 md:p-7 transition hover:border-[#fbb03a]/40">
      <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
        {title}
      </h3>

      <div className="mt-3 h-[3px] w-8 bg-[#fbb03a]" />

      <p className="mt-4 text-sm md:text-base leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default function WhyPartnerSection() {
  return (
    <section className="bg-[#0a0a0a] py-14 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight md:whitespace-nowrap">
            <span className="text-white">Why </span>
            <span className="text-[#fbb03a]">Partner With Us</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <BenefitCard
            title="International Exposure"
            description="AUS Racing competes at Formula Student UK, Silverstone alongside 100+ university teams from 30+ countries, in front of industry names like Mercedes-AMG HPP, McLaren Applied, and Aston Martin Cognizant F1. Sponsor branding travels with the car from Sharjah to one of motorsport's most iconic circuits."
          />

          <BenefitCard
            title="Access to Top Talent"
            description="A 40+ member, 6-discipline engineering team (mechanical, electrical, business, and more)  the same caliber of student engineers UK sponsors like Cosworth, Accu, and MAHLE Powertrain actively scout for graduate roles and internships."
          />

          <BenefitCard
            title="Industry Networking"
            description="Past and current partners already include AGMC (BMW/MINI/Rolls-Royce importer, UAE), Ansys, DEWESoft and Fluid Codes; sponsors join a proven network, not a first-time pitch."
          />

          <BenefitCard
            title="Innovation & CSR Impact"
            description="Now in its 2nd season, AUS Racing gives sponsors a direct stake in developing the next generation of UAE engineers, with a visible presence at one of Europe's most established engineering competitions."
          />
        </div>
      </div>
    </section>
  );
}