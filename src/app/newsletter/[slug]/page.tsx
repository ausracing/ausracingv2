import { newsletterArticles } from "../data";
import { notFound } from "next/navigation";
import BackButton from "@/components/newsletterinfo/BackButton";
import FlipBookClient from "@/components/newsletterinfo/FlipBookClient";

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
      fixed inset-0 z-[9999]  {/* FIX 1: Absurdly high z-index to bury the Back To Top button */}
      w-screen h-[100dvh]     {/* FIX 2: 100dvh stops mobile browsers from creating fake scroll space */}
      bg-zinc-900
      text-white 
      overflow-hidden 
      overscroll-none         {/* FIX 3: Kills the rubber-band bounce effect on iOS */}
      flex flex-col
    ">
      
      {/* Responsive wrapper for the button */}
      <div className="p-3 md:absolute md:top-6 md:left-12 z-50">
        <BackButton />
      </div>

      {/* Main Flipbook Content - Kept your exact sizing! */}
      <div className="
        flex-1 w-full 
        px-3 py-2 md:px-12 md:py-4 
        flex items-center justify-center 
        overflow-hidden
      ">
        <div className="
          w-full h-full 
          md:max-w-[1500px] md:max-h-full 
          md:aspect-[1400/950] 
          m-auto flex items-center justify-center
        ">
          <FlipBookClient sections={article.sections} />
        </div>
      </div>
      
    </div>
  );
}