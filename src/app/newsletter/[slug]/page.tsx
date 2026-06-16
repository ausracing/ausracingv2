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
    <div className="
      min-h-screen 
      bg-[rgb(10,10,10)] 
      text-white 
      px-4 sm:px-6 
      py-4 sm:py-8 md:py-12
      overflow-x-hidden
    ">
      <div className="
        max-w-7xl 
        mx-auto 
        space-y-4 sm:space-y-6
      ">
        <BackButton />

        <div className="w-full">
          <FlipBookClient sections={article.sections} />
        </div>
      </div>
    </div>
  );
}