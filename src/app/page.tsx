"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsletterArticles } from "./newsletter/data";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const [tab, setTab] = useState("news");

  const latest = newsletterArticles[0];

  return (
    <div className="min-h-screen bg-black text-white px-10 py-10">

      {/* HERO */}
      <div className="mb-10 border border-white/10 rounded-xl p-6">
        <h1 className="text-4xl font-bold">
          AUS Racing Hub
        </h1>

        <p className="text-white/60 mt-2">
          Latest updates, news, and insights
        </p>

        {/* HERO IMAGE */}
        <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden">
          <Image
            src="/post1.jpg"
            alt="hero"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-4 border-b border-white/10 mb-6">
        <button
          onClick={() => setTab("news")}
          className={`pb-2 ${tab === "news" ? "border-b-2" : ""}`}
        >
          News
        </button>

        <button
          onClick={() => setTab("updates")}
          className={`pb-2 ${tab === "updates" ? "border-b-2" : ""}`}
        >
          Updates
        </button>

        <button
          onClick={() => setTab("about")}
          className={`pb-2 ${tab === "about" ? "border-b-2" : ""}`}
        >
          About
        </button>
      </div>

      {/* TAB CONTENT */}
      {tab === "news" && (
        <div className="grid gap-4">
          {newsletterArticles.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              href={`/newsletter/${a.slug}`}
              className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition"
            >
              <h3 className="font-medium">{a.title}</h3>
              <p className="text-white/50 text-sm mt-1">
                {a.content.slice(0, 100)}...
              </p>
            </Link>
          ))}
        </div>
      )}

      {tab === "updates" && (
        <div className="text-white/60">
          No updates yet.
        </div>
      )}

      {tab === "about" && (
        <div className="text-white/60">
          AUS Racing is a media hub for motorsport updates.
        </div>
      )}
      {/* FOOTER */}
<Footer>

</Footer>
    </div>
  );
}
