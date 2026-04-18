"use client";

import { useMemo, useState } from "react";

type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  content: string;
  date: string;
};

function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

function isWithinDays(dateStr: string, days: number) {
  const now = Date.now();
  const time = parseDate(dateStr);
  return now - time <= days * 24 * 60 * 60 * 1000;
}

export default function NewsletterSidebar({
  articles,
  onSelect,
  activeSlug,
}: {
  articles: Article[];
  onSelect: (article: Article) => void;
  activeSlug: string;
}) {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState<"all" | "7" | "30" | "90">("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return [...articles]
      .filter((article) => {
        // Search
        const matchesSearch =
          article.title.toLowerCase().includes(q) ||
          article.shortDescription.toLowerCase().includes(q);

        // Date range
        const matchesRange =
          range === "all" || isWithinDays(article.date, Number(range));

        return matchesSearch && matchesRange;
      })
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, [articles, query, range]);

  return (
    <div className="w-[280px] h-screen overflow-y-auto bg-zinc-900 border-r border-zinc-800 p-4 shrink-0">
      <h2 className="text-lg font-bold mb-3">Weekly News</h2>

      {/* Search */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        className="w-full mb-3 px-3 py-2 rounded-lg bg-zinc-800 text-sm outline-none border border-zinc-700"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { label: "All", value: "all" },
          { label: "7d", value: "7" },
          { label: "30d", value: "30" },
          { label: "90d", value: "90" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setRange(btn.value as "all" | "7" | "30" | "90")}
            className={`text-xs px-2 py-1 rounded-md border transition ${
              range === btn.value
                ? "bg-white text-black border-white"
                : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">No results found.</p>
        ) : (
          filtered.map((article) => (
            <button
              key={article.slug}
              onClick={() => onSelect(article)}
              className={`w-full text-left p-3 rounded-xl transition border ${
                activeSlug === article.slug
                  ? "bg-zinc-800 border-zinc-600"
                  : "border-transparent hover:bg-zinc-800/60"
              }`}
            >
              <p className="font-semibold line-clamp-1">{article.title}</p>

              <p className="text-sm text-zinc-400 line-clamp-2 mt-1">
                {article.shortDescription}
              </p>

              <p className="text-xs text-zinc-500 mt-2">{article.date}</p>
            </button>
          ))
        )}
      </div>
    </div>
  );
}