// src/app/newsletter/[slug]/page.tsx

import { newsletterArticles } from "@/data/newsletter";
import { notFound } from "next/navigation";
import BackButton from "@/components/newsletterinfo/BackButton";
import DownloadPdfButton from "@/components/newsletterinfo/DownloadPdfButton";
import FlipBookClient from "@/components/newsletterinfo/FlipBookClient";

export async function generateStaticParams() {
  return newsletterArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsletterArticles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="
      fixed inset-0 z-[9999] 
      w-screen h-dvh 
      bg-zinc-950 
      text-white 
      overflow-hidden 
      overscroll-none 
      select-none 
      flex justify-center /* Centers the 4K anchor */
    ">
      
      {/* 
        THE 4K ANCHOR ("If" Case for Ultra-Wide Screens): 
        This relative container stops the absolute buttons from expanding past 1600px wide. 
      */}
      <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center">

        {/* ABSOLUTE ACTION BAR */}
        <div className="
          absolute z-50 pointer-events-none flex justify-between items-start
          top-3 left-3 right-3         /* Mobile: Tight to the edges */
          md:top-3 md:left-4 md:right-4 /* Tablet/1024px: Pushed HIGHER to clear the flipbook corners */
          xl:top-6 xl:left-8 xl:right-8 /* Desktop: Natural breathing room */
        ">
          <div className="pointer-events-auto shrink-0 w-[48%] md:w-auto">
            <BackButton />
          </div>
          <div className="pointer-events-auto shrink-0 w-[48%] md:w-auto flex justify-end">
            {article.pdfUrl && (
              <DownloadPdfButton pdfUrl={article.pdfUrl} issueName={article.title} />
            )}
          </div>
        </div>

        {/* 
          MAIN FLIPBOOK WRAPPER:
          Takes up 100% of the available space. 
          pt-16 on mobile ensures the top of the flipbook doesn't clip underneath the absolute buttons.
        */}
        <div className="w-full h-full pt-16 pb-4 px-2 md:p-8 flex items-center justify-center">
          <div className="
            w-full h-full 
            md:max-w-7xl md:aspect-[1400/950] 
            m-auto flex items-center justify-center
          ">
            <FlipBookClient sections={article.sections} />
          </div>
        </div>

      </div>
    </div>
  );
}