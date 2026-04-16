import { newsletterArticles } from "./data";
import FeaturedNews from "@/components/newsletterinfo/FeaturedNews";
import NewsletterSidebar from "@/components/newsletterinfo/NewsletterSidebar";

export default function NewsletterPage() {
  const latest = newsletterArticles[0];

  return (
    <div className="min-h-screen bg-black text-white flex">
      <NewsletterSidebar articles={newsletterArticles} />

      <div className="flex-1 p-6">
        <FeaturedNews article={latest} />
      </div>
    </div>
  );
}