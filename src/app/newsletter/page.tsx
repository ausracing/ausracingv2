import { newsletterArticles } from "./data";
import FeaturedNews from "@/components/newsletterinfo/FeaturedNews";
import NewsletterSidebar from "@/components/newsletterinfo/NewsletterSidebar";

export default function NewsletterPage() {

  // Sort by POST number (POST-3 > POST-2 > POST-1)
  const sorted = [...newsletterArticles].sort((a, b) => {
    const numA = Number(a.slug.split("-")[1]);
    const numB = Number(b.slug.split("-")[1]);
    return numB - numA;
  });

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* LEFT SIDEBAR (ALSO SORTED) */}
      <NewsletterSidebar articles={sorted} />

      {/* RIGHT FEATURED (LATEST) */}
      <div className="flex-1 p-6">
        <FeaturedNews article={sorted[0]} />
      </div>

    </div>
  );
}