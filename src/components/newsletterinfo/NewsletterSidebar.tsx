"use client";

import { useState, useMemo } from "react";

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
}: any) {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState<"all" | "7" | "30" | "90">("7");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return articles
      .filter((a: any) => {
        // TIME FILTER
        if (range !== "all" && !isWithinDays(a.date, Number(range))) {
          return false;
        }

        // SEARCH FILTER
        return (
          a.title.toLowerCase().includes(q) ||
          a.shortDescription.toLowerCase().includes(q)
        );
      })
      .sort(
        (a: any, b: any) => parseDate(b.date) - parseDate(a.date)
      );
  }, [articles, query, range]);

  return (
    <div className="w-[280px] h-screen overflow-y-auto bg-zinc-900 border-r border-zinc-800 p-4">

      <h2 className="text-lg font-bold mb-3">Weekly News</h2>

      {/* SEARCH */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        className="w-full mb-3 px-3 py-2 rounded-lg bg-zinc-800 text-sm outline-none"
      />

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[
          { label: "7d", value: "7" },
          { label: "30d", value: "30" },
          { label: "90d", value: "90" },
          { label: "All", value: "all" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setRange(btn.value as any)}
            className={`text-xs px-2 py-1 rounded-md border transition ${
              range === btn.value
                ? "bg-white text-black"
                : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">No results found.</p>
        ) : (
          filtered.map((a: any) => (
            <button
              key={a.slug}
              onClick={() => onSelect(a)}
              className={`w-full text-left p-3 rounded-xl transition ${
                activeSlug === a.slug
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-800/60"
              }`}
            >
              <p className="font-semibold line-clamp-1">{a.title}</p>
              <p className="text-sm text-zinc-400 line-clamp-2">
                {a.shortDescription}
              </p>
            </button>
          ))
        )}
      </div>
    </div>
  );
}