// src/data/newsletter.ts

export type ArticleSection = {
  image: string;
};

export type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  pdfUrl: string;
  date: string;
  sections: ArticleSection[];
};

// Enforces the zero-padded, kebab-case pathing architecture
const generatePages = (
  year: string,
  month: string,
  count: number,
): ArticleSection[] => {
  return Array.from({ length: count }, (_, i) => {
    const pageNum = String(i + 1).padStart(2, "0");
    return {
      image: `/newsletter/${year}/${month}-${year}/${month}-${year}-page-${pageNum}.webp`,
    };
  });
};

export const newsletterArticles: Article[] = [
  {
    slug: "June-2024",
    title: "June News",
    shortDescription:
      "In our first installment, you can read about our choice of wheels and tires or learn about how a suspension and steering system are designed!",
    image: "/newsletter/2024/June-2024/June-2024-page-01.webp",
    pdfUrl: "/newsletter/2024/June-2024/June-2024.pdf",
    date: "01-07-2024",
    sections: generatePages("2024", "June", 11),
  },
  {
    slug: "July-2024",
    title: "July News",
    shortDescription:
      "In our second installment, you can read about our choice of wheels and tires or learn about battery design or how suspension geometries are tuned.",
    image: "/newsletter/2024/July-2024/July-2024-page-01.webp",
    pdfUrl: "/newsletter/2024/July-2024/July-2024.pdf",
    date: "01-08-2024",
    sections: generatePages("2024", "July", 10),
  },
  {
    slug: "August-2024",
    title: "August News",
    shortDescription:
      "In our August 2024 edition, we dive deeper into the dynamics of our car, and introduce a new and rather unexpected dimension to it- environmental conscience.",
    image: "/newsletter/2024/August-2024/August-2024-page-01.webp",
    pdfUrl: "/newsletter/2024/August-2024/August-2024.pdf",
    date: "01-09-2024",
    sections: generatePages("2024", "August", 9),
  },
  {
    slug: "September-2024",
    title: "September News",
    shortDescription:
      "In the September 2024 edition, AUS Racing is shaking things up with cell management, high-stakes meetings, and a game-changing new team.",
    image: "/newsletter/2024/September-2024/September-2024-page-01.webp",
    pdfUrl: "/newsletter/2024/September-2024/September-2024.pdf",
    date: "01-10-2024",
    sections: generatePages("2024", "September", 11),
  },
  {
    slug: "October-2024",
    title: "October News",
    shortDescription:
      "Our October roundup is here! Take a closer look at our engineering insights, like stress analysis on control arms and optimized braking.",
    image: "/newsletter/2024/October-2024/October-2024-page-01.webp",
    pdfUrl: "/newsletter/2024/October-2024/October-2024.pdf",
    date: "01-11-2024",
    sections: generatePages("2024", "October", 9),
  },
  {
    slug: "November-2024",
    title: "November News",
    shortDescription:
      "November newsletter out now! Check out our DIY testing rigs, how we plan for longevity, and more.",
    image: "/newsletter/2024/November-2024/November-2024-page-01.webp",
    pdfUrl: "/newsletter/2024/November-2024/November-2024.pdf",
    date: "01-12-2024",
    sections: generatePages("2024", "November", 9),
  },
  {
    slug: "February-2025",
    title: "February News",
    shortDescription:
      "February newsletter out now! Check out our battery cooling technology and brake system innovation!",
    image: "/newsletter/2025/February-2025/February-2025-page-01.webp",
    pdfUrl: "/newsletter/2025/February-2025/February-2025.pdf",
    date: "01-03-2025",
    sections: generatePages("2025", "February", 9),
  },
  {
    slug: "March-2025",
    title: "March News",
    shortDescription:
      "March newsletter out now! Learn about battery cooling, axles or simply meet our latest sponsor!",
    image: "/newsletter/2025/March-2025/March-2025-page-01.webp",
    pdfUrl: "/newsletter/2025/March-2025/March-2025.pdf",
    date: "01-04-2025",
    sections: generatePages("2025", "March", 10),
  },
  {
    slug: "April-2025",
    title: "April News",
    shortDescription:
      "April newsletter out now! Join us as we celebrate one year of AUS Racing!",
    image: "/newsletter/2025/April-2025/April-2025-page-01.webp",
    pdfUrl: "/newsletter/2025/April-2025/April-2025.pdf",
    date: "01-05-2025",
    sections: generatePages("2025", "April", 9),
  },
  {
    slug: "May-2025",
    title: "May News",
    shortDescription:
      "Think a bolt is just a bolt? Think again. In high‑performance racing from Formula Student cars to Formula 1, the humble fastener is a critical engineering component. A single bolt can mean the difference between a car that stays together under extreme loads and one that fails at 200 km/h. May newsletter out now! Curious about the complexity of a simple bolt in F1 cars? Learn More!",
    image: "/newsletter/2025/May-2025/May-2025-page-01.webp",
    pdfUrl: "/newsletter/2025/May-2025/May-2025.pdf",
    date: "01-06-2025",
    sections: generatePages("2025", "May", 7),
  },
];
