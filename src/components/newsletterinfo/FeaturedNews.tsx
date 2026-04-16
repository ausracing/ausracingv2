import Link from "next/link";

export default function FeaturedNews({ article }: any) {
  if (!article) return null;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
        <img
          src={article.image}
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