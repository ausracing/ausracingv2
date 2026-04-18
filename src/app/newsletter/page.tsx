import { newsletterArticles } from "./data";
import NewsletterClient from "./NewsletterClient";
import Footer from "@/components/shared/Footer";

export default function NewsletterPage() {
  return (
    <>
      <NewsletterClient articles={newsletterArticles} />
    </>
  );
}