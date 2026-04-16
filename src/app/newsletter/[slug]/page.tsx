import Image from "next/image";
import { notFound } from "next/navigation";
import { newsletterArticles } from "../data";
import Footer from "@/components/shared/Footer";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = newsletterArticles.find(
    (p) => p.slug === slug
  );

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-10 py-10">
      <div className="max-w-3xl mx-auto">

        <div className="relative w-full h-[380px] rounded-xl overflow-hidden mb-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h1 className="text-3xl font-bold">{article.title}</h1>

        <p className="text-white/50 mt-2 text-sm">
          {article.date}
        </p>

        <p className="mt-6 text-white/70 leading-relaxed">
          {article.shortDescription}
        </p>

      </div>

      <Footer/>
    </div>
  );
}