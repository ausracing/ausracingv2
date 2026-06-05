import { newsletterArticles } from "./data";
import NewsletterClient from "./NewsletterClient";

export default function NewsletterPage() {
  return (
    <>
      <NewsletterClient articles={newsletterArticles} />
    </>
  );
}