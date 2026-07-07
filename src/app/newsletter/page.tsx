import { getNewsletterArticles } from "@/lib/queries";
import { sanityArticleToArticle } from "@/lib/newsletter";
import NewsletterClient from "./NewsletterClient";

export default async function NewslettersPage() {
  const sanityArticles = await getNewsletterArticles();
  const articles = sanityArticles.map(sanityArticleToArticle);

  return (
    <>
      <NewsletterClient articles={articles} />
    </>
  );
}
