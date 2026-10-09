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

// Placeholder descriptions, replace with real copy
const DESC_LONG =
  "AGMC is one of the UAE's leading mobility providers, with 45+ locations and 2,500+ people across the Emirates. Our portfolio spans luxury and accessible mobility with brands including BMW, MINI, Rolls-Royce, Geely, Riddara, INEOS Grenadier, Lotus, Budget, AGMC Prime and Pitstop360..";
const DESC_MEDIUM =
  "We are guided by our founder’s simple yet highly effective philosophy of satisfying and exceeding the expectations of our customers, both small or big, through service excellence, honesty, integrity, and social awareness. This principle has become ingrained in all aspects of the business and is truly responsible for the group’s unrivalled success.";
const DESC_SHORT =
  "[Description: 1 sentence about the company and its role in the team]";

// Partners page: to add a sponsor, add one entry here.
export const sponsors: Sponsor[] = [
  {
    name: "AGMC",
    logo: "/logos/agmc2.webp",
    description: DESC_LONG,
    url: "https://www.agmc.com",
    tier: "title",
  },
  {
    name: "Juma Al Majid",
    logo: "/logos/juma.webp",
    description: DESC_MEDIUM,
    url: "https://www.al-majid.com/",
    tier: "official",
  },
  {
    name: "Ansys",
    logo: "/logos/ansys1.webp",
    description: "ANSYS, Inc. is the leader in multiphysics simulation software. For more than 50 years, Ansys software has enabled innovators across industries to push boundaries by using the predictive power of simulation.",
    url: "https://www.ansys.com",
    tier: "partner",
  },
  {
    name: "Automech",
    logo: "/logos/automech2.webp",
    description: DESC_SHORT,
    url: "https://automechgroup.com/",
    tier: "partner",
  },
  {
    name: "DEWESoft",
    logo: "/logos/dewesoft.webp",
    description: DESC_SHORT,
    url: "https://www.dewesoft.com",
    tier: "partner",
  },
  // { name: "Fluid Codes", logo: "/logos/fluidcodes1.webp", description: DESC_SHORT, url: "https://www.fluidcodes.com", tier: "partner" },
  {
    name: "SRTI Park SoiLab",
    logo: "/logos/soilab.webp",
    description: DESC_SHORT,
    url: "https://srtip.ae/soilab/",
    tier: "partner",
  },
  {
    name: "Bender",
    logo: "/logos/bender.webp",
    description: DESC_SHORT,
    url: "https://www.bender.de/en/",
    tier: "partner",
  },
];

// Scrolling logo strip (kept separate: it includes Fluid Codes and AUS)
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