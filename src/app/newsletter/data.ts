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
  slug: "Jun-News",
  title: "WIP News",
  shortDescription: "...",
  image: "/newsletter/June24/june_news-1.webp",
  date: "01-07-2024",

  sections: Array.from({ length: 9 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/June24/june_news-${page}.webp`,
    };
  }),
},

 {
  slug: "Jul-News",
  title: "WIP News",
  shortDescription: "...",
  image: "/newsletter/July24/july_news-1.webp",
  date: "01-08-2024",

  sections: Array.from({ length: 9 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/July24/july_news-${page}.webp`,
    };
  }),
},

 {
  slug: "Aug-News",
  title: "WIP News",
  shortDescription: "...",
  image: "/newsletter/Mar25/march_news-1.webp",
  date: "01-09-2024",

  sections: Array.from({ length: 9 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Mar25/march_news-${page}.webp`,
    };
  }),
},

 {
  slug: "Sep-News",
  title: "September News",
  shortDescription: "In the September 2024 edition, AUS Racing is shaking things up with cell management, high-stakes meetings, and a game-changing new team.",
  image: "/newsletter/Sep24/sep_news-1.webp",
  date: "01-10-2024",

  sections: Array.from({ length: 10 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Sep24/sep_news-${page}.webp`,
    };
  }),
},

 {
  slug: "Oct-News",
  title: "October News",
  shortDescription: "Our October roundup is here! Take a closer look at our engineering insights, like stress analysis on control arms and optimized braking.",
  image: "/newsletter/Oct24/october_news-1.webp",
  date: "01-11-2024",

  sections: Array.from({ length: 8 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Oct24/october_news-${page}.webp`,
    };
  }),


},
 {
  slug: "Nov-News",
  title: "November News",
  shortDescription: "November newsletter out now! Check out our DIY testing rigs, how we plan for longevity, and more.",
  image: "/newsletter/Nov24/nov_news-1.webp",
  date: "01-12-2024",

  sections: Array.from({ length: 8 }, (_, i) => {
    const page = String(i + 2);

  
    return {
      image: `/newsletter/Nov24/nov_news-${page}.webp`,
    };
  }),
},


////
////                    2025 
////
  /*
 {
  slug: "Jan-News",
  title: "January News",
  shortDescription: "...",
  image: "/newsletter/Jan25/jan_news-1.webp",
  date: "01-02-2025",

  sections: Array.from({ length: 9 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Jan25/jan_news-${page}.webp`,
    };
  }),
},
*/
      

 {
  slug: "Feb-News",
  title: "February News",
  shortDescription: "February newsletter out now! Check out our battery cooling technology and brake system innovation!",
  image: "/newsletter/Feb25/feb_news-1.webp",
  date: "01-03-2025",

  sections: Array.from({ length: 8 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Feb25/feb_news-${page}.webp`,
    };
  }),
},
 {
  slug: "Mar-News",
  title: "March News",
  shortDescription: "March newsletter out now! Learn about battery cooling, axles or simply meet our latest sponsor!",
  image: "/newsletter/Mar25/march_news-1.webp",
  date: "01-04-2025",

  sections: Array.from({ length: 9 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Mar25/march_news-${page}.webp`,
    };
  }),
},


 {
  slug: "Apr-News",
  title: "April News",
  shortDescription: "April newsletter out now! Join us as we celebrate one year of AUS Racing!",
  image: "/newsletter/Apr25/april_2025-1.webp",
  date: "01-05-2025",

  sections: Array.from({ length: 8 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/Apr25/april_2025-${page}.webp`,
    };
  }),
},




  {
  slug: "May-News",
  title: "May News",
  shortDescription: "May newsletter out now! Curious about the complexity of a simple bolt in F1 cars? Learn More!",
  image: "/newsletter/May25/may_2025_news-1.webp",
  date: "01-06-2025",

  sections: Array.from({ length: 6 }, (_, i) => {
    const page = String(i + 2);


    return {
      image: `/newsletter/May25/may_2025_news-${page}.webp`,
    };
  }),
}
  

];