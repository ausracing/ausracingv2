// src/components/newsletterinfo/NewsletterSidebar.tsx

"use client";

import { useMemo, useState } from "react";
import { Article } from "@/data/newsletter";

function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
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

  const filteredAndGrouped = useMemo(() => {
    const q = query.toLowerCase();

    // UPGRADE: Unified filter scanning title, description, and date
    const filtered = [...articles]
      .filter((a) => {
        return (
          a.title.toLowerCase().includes(q) ||
          a.shortDescription.toLowerCase().includes(q) ||
          a.date.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    // Dynamically group the filtered results by Year
    return filtered.reduce(
      (acc, article) => {
        const year = article.date.split("-")[2];
        if (!acc[year]) acc[year] = [];
        acc[year].push(article);
        return acc;
      },
      {} as Record<string, Article[]>,
    );
  }, [articles, query]);

  // Sort years in descending order (e.g., 2026, 2025, 2024)
  const years = Object.keys(filteredAndGrouped).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <div className="w-70 h-full bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col overflow-hidden select-none">
      {/* UPGRADE: Instructional placeholder */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search 'May', 'battery', or '2025'..."
        className="w-full mb-6 px-3 py-2 bg-zinc-800 rounded outline-none text-sm text-white placeholder:text-zinc-500"
      />

      {/* SCROLLABLE LIST WITH DYNAMIC YEAR GROUPING */}
      <div
        className="
          flex-1
          min-h-0
          overflow-y-auto
          overflow-x-hidden
          pr-1
          space-y-6

          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-zinc-700
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-zinc-600
        "
      >
        {years.length === 0 ? (
          <p className="text-sm text-zinc-500">No articles found</p>
        ) : (
          years.map((year) => (
            <div key={year} className="flex flex-col">
              <h3 className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-2">
                {year}
              </h3>
              <div className="w-full border-b border-zinc-800 mb-3" />

              <div className="space-y-2">
                {filteredAndGrouped[year].map((a) => (
                  <button
                    key={a.slug}
                    onClick={() => onSelect(a)}
                    className={`w-full text-left p-3 rounded transition ${
                      activeSlug === a.slug
                        ? "bg-zinc-700"
                        : "hover:bg-zinc-800"
                    }`}
                  >
                    <p className="font-semibold line-clamp-1 text-white">
                      {a.title}
                    </p>

                    <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                      {a.shortDescription}
                    </p>

                    <p className="text-[10px] text-zinc-500 mt-1">{a.date}</p>
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
