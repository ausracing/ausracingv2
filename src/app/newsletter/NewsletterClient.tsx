"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterSidebar from "@/components/newsletterinfo/NewsletterSidebar";

type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  date: string;
  sections: {
    heading?: string;
    text?: string;
    image?: string;
  }[];
};

function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

export default function NewsletterClient({
  articles,
}: {
  articles: Article[];
}) {
  const sorted = [...articles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const [selected, setSelected] = useState<Article>(sorted[0]);

  // Mobile-only search + pagination
  const [search, setSearch] = useState("");
  const [mobilePage, setMobilePage] = useState(0);

  const filtered = sorted.filter((article) =>
    article.date.toLowerCase().includes(search.toLowerCase())
  );

  const itemsPerPage = 5;

  const mobileArticles = useMemo(() => {
    const start = mobilePage * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, mobilePage]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / itemsPerPage)
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-x-hidden">
      {/* MOBILE TOP BAR */}
      <div className="md:hidden border-b border-white/10 bg-black sticky top-0 z-20">
        {/* Search */}
        <div className="px-4 pt-4 pb-3">
          <input
            type="text"
            placeholder="Search date (01-09-2024)"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setMobilePage(0);
            }}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none"
          />
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-between px-4 pb-3">
          <button
            onClick={() => setMobilePage((p) => Math.max(0, p - 1))}
            disabled={mobilePage === 0}
            className="rounded-xl border border-white/10 px-3 py-1 text-sm disabled:opacity-30"
          >
            Prev
          </button>

          <p className="text-xs text-white/50">
            {mobilePage + 1} / {totalPages}
          </p>

          <button
            onClick={() =>
              setMobilePage((p) =>
                Math.min(totalPages - 1, p + 1)
              )
            }
            disabled={mobilePage >= totalPages - 1}
            className="rounded-xl border border-white/10 px-3 py-1 text-sm disabled:opacity-30"
          >
            Next
          </button>
        </div>

    {/* Horizontal scrollable article list */}
<div className="overflow-x-auto pb-4">
  <div className="flex gap-2 px-4 min-w-max">
    {mobileArticles.map((article) => (
      <button
        key={article.slug}
        onClick={() => setSelected(article)}
        className={`shrink-0 w-[140px] rounded-lg border px-3 py-3 text-left transition ${
          selected.slug === article.slug
            ? "border-white bg-white text-black"
            : "border-white/10 bg-white/5 text-white"
        }`}
      >
        <p className="text-xs font-medium leading-tight truncate">
          {article.title}
        </p>

        <p className="mt-1 text-[10px] opacity-60">
          {article.date}
        </p>
      </button>
    ))}
  </div>
</div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block">
        <NewsletterSidebar
          articles={sorted}
          onSelect={setSelected}
          activeSlug={selected.slug}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <Link
          href={`/newsletter/${selected.slug}`}
          className="w-full max-w-3xl border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:scale-[1.01] transition"
        >
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[360px]">
            <Image
              src={selected.image}
              alt={selected.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              {selected.title}
            </h1>

            <p className="mt-3 text-sm text-white/60 sm:text-base">
              {selected.shortDescription}
            </p>

            <p className="mt-3 text-xs text-white/40">
              {selected.date}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}