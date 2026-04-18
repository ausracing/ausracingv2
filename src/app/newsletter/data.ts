export type ArticleSection = {
  heading?: string;
  text?: string;
  image?: string;
};

export type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  date: string;
  sections: ArticleSection[];
};

export const newsletterArticles: Article[] = [
  {
    slug: "June-News",
    title: "June News",
    shortDescription:
      "Wheel selection, suspension design, and early development work.",
    image: "/newsletter/June_news_page/June_news_page-0001.jpg",
    date: "01-07-2024",
    sections: [
      {
        heading: "Wheel & Tire Selection",
        text: "We carefully selected performance-focused wheels and tires based on grip, durability, and track performance."
      },
      {
        image: "/newsletter/June_news_page/tires.jpg",
        text: "Multiple simulations were run to determine optimal tire compounds."
      },
      {
        heading: "Suspension System",
        text: "The suspension geometry was designed to improve stability during high-speed cornering."
      },
      {
        image: "/newsletter/June_news_page/suspension.jpg"
      }
    ]
  },

  {
    slug: "July-News",
    title: "July News",
    shortDescription:
      "Battery systems, tuning, and mechanical refinement updates.",
    image: "/newsletter/July_news_page/July_news_page-0001.jpg",
    date: "01-08-2024",
    sections: [
      {
        heading: "Battery Design",
        text: "We optimized the battery layout for weight distribution and efficiency."
      },
      {
        image: "/newsletter/July_news_page/battery.jpg"
      },
      {
        heading: "Suspension Tuning",
        text: "Fine adjustments were made to improve handling response."
      }
    ]
  }
];