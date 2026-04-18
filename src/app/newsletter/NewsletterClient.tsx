"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import NewsletterSidebar from "@/components/newsletterinfo/NewsletterSidebar";

function parseSlug(slug: string) {
  return Number(slug.split("-")[1]);
}

export default function NewsletterClient({ articles }: any) {
  const sorted = [...articles].sort(
    (a, b) => parseSlug(b.slug) - parseSlug(a.slug)
  );

  const [selected, setSelected] = useState(sorted[0]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* MAIN CONTENT */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <NewsletterSidebar
          articles={sorted}
          onSelect={setSelected}
          activeSlug={selected.slug}
        />

        {/* MAIN VIEW */}
        <div className="flex-1 flex items-center justify-center p-6">

          <Link
            href={`/newsletter/${selected.slug}`}
            className="w-full max-w-3xl border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:scale-[1.01] transition"
          >

            <div className="relative w-full h-[360px]">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold">{selected.title}</h1>

              <p className="text-white/60 mt-3 text-sm">
                {selected.shortDescription}
              </p>

              <p className="text-xs text-white/40 mt-3">
                {selected.date}
              </p>
            </div>

          </Link>

        </div>

      </div>

      {/* FOOTER */}
      {/* <Footer /> */}

    </div>
  );
}