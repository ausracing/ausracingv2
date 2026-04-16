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
    image: "/public/ausracing.jpg",
    content: "Full article about the new car launch goes here...",
  },
  {
    slug: "weekly-testing",
    title: "Weekly Testing Results",
    shortDescription: "Strong performance during testing sessions.",
    image:"/public/ausracing.jpg",
    content: "Full testing breakdown and analysis goes here...",
  },
];
export const newsletterArticle = [
  {
    slug: "latest-news",
    title: "Latest News Title",
    content: "This is the latest news content...",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  },

  // 👇 NEW POST
  {
    slug: "new-post-1",
    title: "My New Post",
    content: "This is my new article content...",
    image: "/public/ausracing.jpg",

  },
];