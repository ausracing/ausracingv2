import Link from "next/link";

// Fixes "Any" Type Error
interface FeaturedArticle {
  image: string;
  title: string;
  shortDescription: string;
  slug: string;
}

export default function FeaturedNews({ article }: { article: FeaturedArticle }) {
  if (!article) return null;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold">{article.title}</h1>
          <p className="text-zinc-400 mt-2">{article.shortDescription}</p>

          <Link
            href={`/newsletter/${article.slug}`}
            className="inline-block mt-4 px-4 py-2 bg-white text-black rounded-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}