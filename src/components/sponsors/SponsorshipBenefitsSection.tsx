const benefits = [
  {
    name: "Company logo on bodywork",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Acknowledgement on publications like newsletters",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Company logo on website",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Invitation to team events",
    bronze: true,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Featured article on website",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "VIP access to team events",
    bronze: false,
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Access to team members and car for promotional content",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Featured advertisement on team social media",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Access to car for company events",
    bronze: false,
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Sponsor branded car livery",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "Customized branding across all team platforms",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "High visibility in all team promotional material",
    bronze: false,
    silver: false,
    gold: false,
    platinum: true,
  },
]

function CheckMark({ active }: { active: boolean }) {
  return (
    <div className="flex justify-center">
      {active ? (
        <span className="text-lg font-bold text-[#fbb03a]">✓</span>
      ) : (
        <span className="text-sm text-white/15">—</span>
      )}
    </div>
  )
}

export default function SponsorshipBenefitsSection() {
  return (
    <section className="bg-[#0a0a0a] py-14 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black uppercase leading-tight md:text-5xl">
            <span className="text-white">Sponsorship </span>
            <span className="text-[#fbb03a] md:whitespace-nowrap">
              Benefits
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 md:text-base">
            Explore what each partnership tier includes across visibility,
            access, and promotional opportunities.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-[24px] border border-white/8 bg-[#0f1115]">
          <table className="min-w-[760px] w-full border-collapse">
            <thead>
              <tr className="border-b border-white/8">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Benefits
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#cd8a21]">
                  Bronze
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#c0c0c0]">
                  Silver
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#fbb03a]">
                  Gold
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Platinum
                </th>
              </tr>
            </thead>

            <tbody>
              {benefits.map((benefit, index) => (
                <tr
                  key={benefit.name}
                  className={index !== benefits.length - 1 ? "border-b border-white/6" : ""}
                >
                  <td className="px-5 py-4 text-sm leading-6 text-gray-300">
                    {benefit.name}
                  </td>
                  <td className="px-4 py-4">
                    <CheckMark active={benefit.bronze} />
                  </td>
                  <td className="px-4 py-4">
                    <CheckMark active={benefit.silver} />
                  </td>
                  <td className="px-4 py-4">
                    <CheckMark active={benefit.gold} />
                  </td>
                  <td className="px-4 py-4">
                    <CheckMark active={benefit.platinum} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    
      </div>
    </section>
  )
}