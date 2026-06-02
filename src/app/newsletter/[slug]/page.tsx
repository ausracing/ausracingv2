import Image from "next/image";
import { newsletterArticles } from "../data";
import { notFound } from "next/navigation";
import BackButton from "@/components/newsletterinfo/BackButton";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = newsletterArticles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 md:px-6 md:py-12">
      <div className="max-w-4xl mx-auto">
        <BackButton />

        <div className="space-y-6 md:space-y-12">
          {article.sections.map((section, i) => (
            <div key={i} className="space-y-3 md:space-y-4">
              {section.image && (
                <div className="relative w-full h-[500px] sm:h-[800px] md:h-[1250px] rounded-xl overflow-hidden bg-black">
                  <Image
                    src={section.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              )}

              {section.text && (
                <p className="text-zinc-300 leading-relaxed">
                  {section.text}
                </p>
              )}

              {section.heading && (
                <h2 className="text-xl md:text-2xl font-semibold">
                  {section.heading}
                </h2>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}