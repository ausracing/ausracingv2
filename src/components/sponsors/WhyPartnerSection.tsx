type BenefitCardProps = {
  title: string
  description: string
}

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
  )
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
            description="Formula Student competitions attract global automotive companies, engineers, and media, giving sponsors valuable brand visibility in an international engineering environment."
          />

          <BenefitCard
            title="Access to Top Talent"
            description="Sponsors connect with highly motivated engineering and business students gaining real-world experience in design, manufacturing, and racing."
          />

          <BenefitCard
            title="Industry Networking"
            description="Sponsors can build relationships with companies, engineers, and innovators across the Formula Student community and motorsport ecosystem."
          />

          <BenefitCard
            title="Innovation & CSR Impact"
            description="Supporting AUS Racing demonstrates commitment to education, innovation, and developing the next generation of engineers in the UAE."
          />
        </div>

      </div>
    </section>
  )
}