import {
  getNewsletterArticles,
  getNewsletterArticleBySlug,
} from "@/lib/queries";
import { sanityArticleToArticle } from "@/lib/newsletter";
import { notFound } from "next/navigation";
import BackButton from "@/components/newsletterinfo/BackButton";
import DownloadPdfButton from "@/components/newsletterinfo/DownloadPdfButton";
import FlipBookClient from "@/components/newsletterinfo/FlipBookClient";

export async function generateStaticParams() {
  const articles = await getNewsletterArticles();
  return articles.map((article) => ({
    slug: article.slug.current,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sanityArticle = await getNewsletterArticleBySlug(slug);

  if (!sanityArticle) return notFound();

  const article = sanityArticleToArticle(sanityArticle);

  return (
    <div className="fixed inset-0 z-[9999] w-screen h-dvh bg-zinc-950 text-white overflow-hidden overscroll-none select-none flex justify-center">
      <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center">
        <div className="absolute z-50 pointer-events-none flex justify-between items-start top-3 left-3 right-3 md:top-3 md:left-4 md:right-4 xl:top-6 xl:left-8 xl:right-8">
          <div className="pointer-events-auto shrink-0 w-[48%] md:w-auto">
            <BackButton />
          </div>
          <div className="pointer-events-auto shrink-0 w-[48%] md:w-auto flex justify-end">
            {article.pdfUrl && (
              <DownloadPdfButton
                pdfUrl={article.pdfUrl}
                issueName={article.title}
              />
            )}
          </div>
        </div>
        <div className="w-full h-full pt-16 pb-4 px-2 md:p-8 flex items-center justify-center">
          <div className="w-full h-full md:max-w-7xl md:aspect-[1400/950] m-auto flex items-center justify-center">
            <FlipBookClient sections={article.sections} />
          </div>
        </div>
      </div>
    </div>
  );
}
