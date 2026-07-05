import { newsletterArticles } from "@/data/newsletter";
import NewsletterClient from "./NewsletterClient";

export default function NewslettersPage() {
  return (
    <>
      <NewsletterClient articles={newsletterArticles} />
    </>
  );
}