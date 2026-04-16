"use client";

import Image from "next/image";
import Link from "next/link";
import { newsletterArticles } from "./newsletter/data";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const sorted = [...newsletterArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latest = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="min-h-screen bg-black text-white px-10 py-10">

      {/* HERO (LATEST POST) */}
      <div className="mb-10 border border-white/10 rounded-xl p-6">

        <div className="relative w-full h-72 rounded-lg overflow-hidden mb-4">
          <Image
            src={latest.image}
            alt={latest.title}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold">
          {latest.title}
        </h1>

        {/* use shortDescription (NOT slicing content anymore) */}
        <p className="text-white/60 mt-3">
          {latest.shortDescription}
        </p>

        <Link
          href={`/newsletter/${latest.slug}`}
          className="inline-block mt-4 underline"
        >
          Read more →
        </Link>
      </div>

      {/* REST OF POSTS */}
      <div className="grid gap-4">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/newsletter/${post.slug}`}
            className="flex gap-4 p-4 border border-white/10 rounded-lg hover:bg-white/5 transition"
          >

            <div className="relative w-24 h-20 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-medium">{post.title}</h3>

              <p className="text-sm text-white/50">
                {post.shortDescription}
              </p>
            </div>

          </Link>
        ))}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}