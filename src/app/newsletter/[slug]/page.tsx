import { newsletterArticles } from "../data";
import { notFound } from "next/navigation";
import BackButton from "@/components/newsletterinfo/BackButton";
import FlipBookClient from "@/components/newsletterinfo/FlipBookClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = newsletterArticles.find(
    (a) => a.slug === slug
  );

  if (!article) return notFound();

  return (
<div className="min-h-screen bg-[rgb(10,10,10)] text-white px-4 py-6 md:px-6 md:py-12">
  
        <div className="max-w-7xl mx-auto space-y-6">
        <BackButton />

        <FlipBookClient sections={article.sections} />
      </div>
    </div>
  );
}