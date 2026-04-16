import Link from "next/link";

export default function NewsletterSidebar({ articles }: any) {
  return (
    <div className="w-[280px] h-screen overflow-y-auto bg-zinc-900 border-r border-zinc-800 p-4">
      <h2 className="text-lg font-bold mb-4">Weekly News</h2>

      <div className="space-y-3">
        {articles.map((a: any) => (
          <Link
            key={a.slug}
            href={`/newsletter/${a.slug}`}
            className="block p-3 rounded-xl hover:bg-zinc-800 transition"
          >
            <p className="font-semibold">{a.title}</p>
            <p className="text-sm text-zinc-400">{a.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}