"use client";

import Image from "next/image";
import Link from "next/link";
import { newsletterArticles } from "./newsletter/data";
import Footer from "@/components/shared/Footer";

function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

export default function Home() {
  const sorted = [...newsletterArticles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  const latest = sorted[0];
  const rest = sorted.slice(1, 6);

  return (
    <div className="min-h-screen bg-black text-white px-10 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: SMALL LIST */}
        <div className="lg:col-span-1 space-y-3">
          <h2 className="text-lg font-semibold mb-2">
            Latest Updates
          </h2>

          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/newsletter/${post.slug}`}
              className="flex gap-3 p-3 border border-white/10 rounded-lg hover:bg-white/5 transition"
            >
              <div className="relative w-16 h-14 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-medium line-clamp-1">
                  {post.title}
                </h3>

                <p className="text-xs text-white/50">
                  {post.date}
                </p>

                <p className="text-xs text-white/40 line-clamp-2 mt-1">
                  {post.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT: BIG MAIN STORY */}
        <div className="lg:col-span-2 border border-white/10 rounded-xl p-5">

          <div className="relative w-full h-[320px] rounded-lg overflow-hidden mb-4">
            <Image
              src={latest.image}
              alt={latest.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-2xl font-bold">
            {latest.title}
          </h1>

          <p className="text-white/60 mt-2 text-sm leading-relaxed">
            {latest.shortDescription}
          </p>

          <Link
            href={`/newsletter/${latest.slug}`}
            className="inline-block mt-3 underline text-sm"
          >
            Read full article →
          </Link>

        </div>

      </div>

      <Footer />
    </div>
  );
}