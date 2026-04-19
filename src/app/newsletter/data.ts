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
      "In our first installment, you can read about our choice of wheels and tires or learn about how a suspension and steering system are designed!",
    image: "/newsletter/June24/June_news_page-0001.jpg",
    date: "01-07-2024",
    sections: [
      {
        image: "/newsletter/June24/June_news_page-0002.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0003.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0004.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0005.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0006.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0007.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0008.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0009.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0010.jpg",
      },
      {
        image: "/newsletter/June24/June_news_page-0011.jpg",
      }
    ]
  },

 {
    slug: "July-News",
    title: "July News",
    shortDescription:
      "In our second installment, you can read about our choice of wheels and tires or learn about battery design or how suspension geometries are tuned.",
    image: "/newsletter/July24/July_news_page-0001.jpg",
    date: "01-08-2024",
    sections: [
      {
        image: "/newsletter/July24/July_news_page-0002.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0003.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0004.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0005.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0006.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0007.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0008.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0009.jpg",
      },
      {
        image: "/newsletter/July24/July_news_page-0010.jpg",
      }
    ]
  },
{
    slug: "Aug-News",
    title: "August News",
    shortDescription:
      "In our August 2024 edition, we dive deeper into the dynamics of our car, and introduce a new and rather unexpected dimension to it environmental conscience.",
    image: "/newsletter/Aug24/Aug_news_page-0001.jpg",
    date: "01-09-2024",
    sections: [
      {
        image: "/newsletter/Aug24/Aug_news_page-0002.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0003.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0004.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0005.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0006.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0007.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0008.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0009.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0010.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0011.jpg",
      },
      {
        image: "/newsletter/Aug24/Aug_news_page-0012.jpg",
      }
    ]
    slug: "POST-1",
    title: "post 1",
    shortDescription: "A new aerodynamic update has been revealed.",
    image: "/images/team/placeholder.webp",
    content: "Full article about the new car launch goes here...",
     date: "16-04-2026",
  },
  {
    slug: "POST-2",
    title: "post 2",
    shortDescription: "Strong performance during testing sessions.",
    image:"/images/team/placeholder.webp",
    content: "Full testing breakdown and analysis goes here...",
    date: "19-05-2026",
  },
{
    slug: "POST-3",
    title: "post 3",
    shortDescription: "A new aerodynamic update has been revealed.",
    image: "/images/team/placeholder.webp",
    content: "Full article about the new car launch goes here...",
     date: "16-06-2026",
  },
  {
    slug: "Sept-News",
    title: "September News",
    shortDescription:
      "In the September 2024 edition, AUS Racing is shaking things up with cell management, high-stakes meetings, and a game-changing new team.",
    image: "/newsletter/Sep24/Sep_news_page-0001.jpg",
    date: "01-10-2024",
    sections: [
      {
        image: "/newsletter/Sep24/Sep_news_page-0002.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0003.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0004.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0005.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0006.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0007.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0008.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0009.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0010.jpg",
      },
      {
        image: "/newsletter/Sep24/Sep_news_page-0011.jpg",
      }
    ]
  }

];