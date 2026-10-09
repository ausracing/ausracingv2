export type Tier = "title" | "official" | "partner";

export type Sponsor = {
  name: string;
  logo: string;
  description: string;
  url: string; // use "#" until a real URL is supplied
  tier: Tier;
};

export type StripSponsor = {
  name: string;
  src: string;
};

// Partners page: to add a sponsor, add one entry here.
export const sponsors: Sponsor[] = [
  {
    name: "AGMC",
    logo: "/logos/agmc2.webp",
    description:
      "AGMC is one of the UAE's leading mobility providers, with 45+ locations and 2,500+ people across the Emirates. Its portfolio spans luxury and accessible mobility, with brands including BMW, MINI, Rolls-Royce, Geely, Riddara, INEOS Grenadier, Lotus, Budget, AGMC Prime and Pitstop360. As our title sponsor, AGMC backs the team's push to compete at the highest level.",
    url: "https://www.agmc.com",
    tier: "title",
  },
  {
    name: "Juma Al Majid",
    logo: "/logos/juma.webp",
    description:
      "Founded in Dubai in 1950, Juma Al Majid Holding Group is one of the UAE's leading business conglomerates. Its interests span automotive, heavy equipment, trading and manufacturing, contracting and services, real estate, hospitality and FMCG. Built on honesty, integrity and service excellence, the group has partnered with international brands for over seven decades and played a key role in the UAE's growth.",
    url: "https://www.al-majid.com/",
    tier: "official",
  },
  {
    name: "Ansys",
    logo: "/logos/ansys1.webp",
    description:
      "Ansys, now part of Synopsys, is a global leader in engineering simulation software. Its tools let engineers model structures, fluids, electromagnetics and more before anything is built, cutting development time and cost. Used across automotive, aerospace, energy and electronics, Ansys software helps our team analyse and optimise vehicle performance virtually, long before it reaches the track.",
    url: "https://www.ansys.com",
    tier: "partner",
  },
  {
    name: "Automech",
    logo: "/logos/automech2.webp",
    description:
      "Founded in 1991 as a small repair workshop serving Dubai's shipping industry, Automech Group has grown into a diversified UAE engineering and industrial solutions provider. Operating from Dubai, Abu Dhabi and Dammam, its capabilities include precision machining, steel fabrication, marine engineering, dewatering equipment and manufacturing of components for the oil and gas sector, delivering complete engineering solutions across industries.",
    url: "https://automechgroup.com/",
    tier: "partner",
  },
  {
    name: "DEWESoft",
    logo: "/logos/dewesoft.webp",
    description:
      "DEWESoft is a Slovenian leader in data acquisition and test and measurement technology. Its modular hardware and intuitive software let engineers capture, synchronise and analyse data from sensors, vehicle buses, video and more in a single system. Trusted across automotive, aerospace, energy and research, DEWESoft equips our team to measure and understand vehicle behaviour with precision.",
    url: "https://www.dewesoft.com",
    tier: "partner",
  },
  // { name: "Fluid Codes", ... } kept commented out as before
  {
    name: "SRTI Park SoiLab",
    logo: "/logos/soilab.webp",
    description:
      "SoiLab, the Sharjah Open Innovation Lab, is the prototyping and manufacturing hub of the Sharjah Research, Technology and Innovation Park. It offers workshops and advanced facilities, including 3D printing and smart materials, where startups, researchers and industry can design, build and test new ideas. SoiLab gives our team access to world-class rapid prototyping right here in Sharjah.",
    url: "https://srtip.ae/soilab/",
    tier: "partner",
  },
  {
    name: "Bender",
    logo: "/logos/bender.webp",
    description:
      "Bender is a German family-owned company and a world leader in electrical safety. Since 1936 it has developed insulation monitoring, residual current monitoring and fault location systems that protect people and equipment from electrical hazards. Its solutions also support EV charging infrastructure and high-voltage systems, a vital area of expertise as our team works with electric powertrains.",
    url: "https://www.bender.de/en/",
    tier: "partner",
  },
];

// Scrolling logo strip (unchanged)
export const stripSponsors: StripSponsor[] = [
  { name: "AGMC", src: "/logos/agmc2.webp" },
  { name: "Ansys", src: "/logos/ansys1.webp" },
  { name: "Automech", src: "/logos/automech2.webp" },
  { name: "DEWESoft", src: "/logos/dewesoft.webp" },
  { name: "Fluid Codes", src: "/logos/fluidcodes1.webp" },
  { name: "Juma Al Majid", src: "/logos/juma.webp" },
  { name: "SRTI Park SoiLab", src: "/logos/soilab.webp" },
  { name: "American University of Sharjah", src: "/logos/aus.webp" },
  { name: "Bender", src: "/logos/bender.webp" },
];