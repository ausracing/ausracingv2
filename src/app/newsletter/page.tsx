import { newsletterArticles } from "./data";
import Footer from "@/components/shared/Footer";

import NewsletterClient from "./NewsletterClient";

export default function NewsletterPage() {
  return <NewsletterClient articles={newsletterArticles} />;
}
<Footer/>