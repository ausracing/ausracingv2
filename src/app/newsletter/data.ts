export type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  content: string;
  date: string;
};

export const newsletterArticles: Article[] = [
  {
    slug: "POST 1",
    title: "post 1",
    shortDescription: "A new aerodynamic update has been revealed.",
    image: "/post1.jpg",
    content: "Full article about the new car launch goes here...",
     date: "16-04-2026",
  },
  {
    slug: "POST 2",
    title: "post 2",
    shortDescription: "Strong performance during testing sessions.",
    image:"/post2.jpg",
    content: "Full testing breakdown and analysis goes here...",
    date: "19-05-2026",
  },
{
    slug: "POST 3",
    title: "post 3",
    shortDescription: "A new aerodynamic update has been revealed.",
    image: "/post2.jpg",
    content: "Full article about the new car launch goes here...",
     date: "16-06-2026",
  },










];
