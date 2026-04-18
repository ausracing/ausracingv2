"use client";

import { useMemo, useState } from "react";

type Article = {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  date: string;
  sections: any[];
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
  onSelect: (a: Article) => void;
  activeSlug: string;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "7" | "30" | "90">("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return [...articles]
      .filter((a) => {
        const matchesSearch =
          a.title.toLowerCase().includes(q) ||
          a.shortDescription.toLowerCase().includes(q);

        const matchesFilter =
          filter === "all" || isWithinDays(a.date, Number(filter));

        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, [articles, query, filter]);

  return (
    <div className="w-[280px] h-screen bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col">

      {/* SEARCH */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="w-full mb-3 px-3 py-2 bg-zinc-800 rounded outline-none text-sm"
      />

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { label: "All", value: "all" },
          { label: "7D", value: "7" },
          { label: "30D", value: "30" },
          { label: "90D", value: "90" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value as any)}
            className={`text-xs px-2 py-1 rounded border transition ${
              filter === btn.value
                ? "bg-white text-black"
                : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* SCROLLABLE LIST */}
      <div className="flex-1 overflow-y-scroll pr-1 space-y-2 custom-scroll">

        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No articles found
          </p>
        ) : (
          filtered.map((a) => (
            <button
              key={a.slug}
              onClick={() => onSelect(a)}
              className={`w-full text-left p-3 rounded transition ${
                activeSlug === a.slug
                  ? "bg-zinc-700"
                  : "hover:bg-zinc-800"
              }`}
            >
              <p className="font-semibold line-clamp-1">
                {a.title}
              </p>

              <p className="text-xs text-zinc-400 line-clamp-2">
                {a.shortDescription}
              </p>

              <p className="text-[10px] text-zinc-500 mt-1">
                {a.date}
              </p>
            </button>
          ))
        )}

      </div>
    </div>
  );
}