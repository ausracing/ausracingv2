export type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  content: string;
};

export const newsletterArticles: Article[] = [
  {
    slug: "new-car-launch",
    title: "New Car Launch",
    shortDescription: "A new aerodynamic update has been revealed.",
    image: "/images/news/car.jpg",
    content: "Full article about the new car launch goes here...",
  },
  {
    slug: "weekly-testing",
    title: "Weekly Testing Results",
    shortDescription: "Strong performance during testing sessions.",
    image: "/images/news/testing.jpg",
    content: "Full testing breakdown and analysis goes here...",
  },
];
export type NewsletterArticle = {
  slug: "testing slug";
  title: "testing title";
  content: "testing content";
};