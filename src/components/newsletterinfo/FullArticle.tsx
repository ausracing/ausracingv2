import Link from "next/link";

// Fixes "Any" Type Error
interface FeaturedArticle {
  image: string;
  title: string;
  content: string;
  slug: string;
}

export default function FullArticle({ article }: { article: FeaturedArticle }) {
  return (
    <div className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[450px] object-cover rounded-2xl"
        />

        <h1 className="text-4xl font-bold mt-6">
          {article.title}
        </h1>

        <p className="text-zinc-300 mt-4 leading-7">
          {article.content}
        </p>

        <Link
          href="/newsletter"
          className="inline-block mt-6 text-sm text-blue-400"
        >
          ← Back to Newsletter
        </Link>
      </div>
    </div>
  );
}