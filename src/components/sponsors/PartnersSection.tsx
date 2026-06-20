import Image from "next/image";

const baseSponsors = [
  { name: "AGMC", src: "/logos/agmc2.webp", category: "sponsor", url: "https://www.agmc.com" },
  { name: "Juma Al Majid", src: "/logos/juma.webp", category: "sponsor", url: "https://www.al-majid.com/" },
  { name: "Ansys", src: "/logos/ansys1.webp", category: "partner", url: "https://www.ansys.com" },
  { name: "Automech", src: "/logos/automech2.webp", category: "partner", url: "https://automechgroup.com/" },
  { name: "DEWESoft", src: "/logos/dewesoft.webp", category: "partner", url: "https://www.dewesoft.com" },
  // { name: "Fluid Codes", src: "/logos/fluidcodes1.webp", category: "partner", url: "https://www.fluidcodes.com" },
  { name: "SRTI Park SoiLab", src: "/logos/soilab.webp", category: "partner", url: "https://srtip.ae/soilab/" },
  { name: "Bender", src: "/logos/bender.webp", category: "partner", url: "https://www.bender.de/en/" },
];

export default function PartnersSection() {
  const sponsors = baseSponsors.filter((s) => s.category === "sponsor");
  const partners = baseSponsors.filter((s) => s.category === "partner");

  return (
    <section className="bg-[#0a0a0a] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight md:whitespace-nowrap">
            <span className="text-white">Our </span>
            <span className="text-[#fbb03a]">Partners</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400">
            Every partner is recognised on the car, at events, and across our platforms.
          </p>
        </div>

        {/* Official Sponsors Section */}
        {sponsors.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold text-[#fbb03a] border-l-4 border-[#fbb03a] pl-4">
              Official Sponsors
            </h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-items-center">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative w-40 h-28 md:w-56 md:h-36 flex items-center justify-center bg-white/5 rounded-lg p-3 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#fbb03a]/40">
                    <Image
                      src={sponsor.src}
                      alt={sponsor.name}
                      width={180}
                      height={90}
                      className="object-contain max-h-full w-auto transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-400 font-medium group-hover:text-[#fbb03a] transition">
                    {sponsor.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Partners Section */}
        {partners.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl md:text-2xl font-semibold text-[#fbb03a] border-l-4 border-[#fbb03a] pl-4">
              Partners
            </h3>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-items-center">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative w-40 h-28 md:w-56 md:h-36 flex items-center justify-center bg-white/5 rounded-lg p-3 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#fbb03a]/40">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={180}
                      height={90}
                      className="object-contain max-h-full w-auto transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-400 font-medium group-hover:text-[#fbb03a] transition">
                    {partner.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}