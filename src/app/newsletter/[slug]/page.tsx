import { newsletterArticles } from "../data";
import { notFound } from "next/navigation";
import BackButton from "@/components/newsletterinfo/BackButton";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = newsletterArticles.find(
    (a) => a.slug === slug
  );

  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* BACK BUTTON (NEW STYLE) */}
        <BackButton />

       

        {/* CONTENT SECTIONS */}
        <div className="space-y-12">
          {article.sections.map((section, i) => (
            <div key={i} className="space-y-4">

              {/* IMAGE */}
              {section.image && (
                <div className="relative w-full h-[1250px] rounded-xl overflow-hidden bg-black">
                  <img
                    src={section.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* TEXT */}
              {section.text && (
                <p className="text-zinc-300 leading-relaxed">
                  {section.text}
                </p>
              )}

              {/* HEADING */}
              {section.heading && (
                <h2 className="text-2xl font-semibold">
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