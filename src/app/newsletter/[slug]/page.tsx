import { newsletterArticles } from "../data";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const article = newsletterArticles.find(
    (a) => a.slug === params.slug
  );

  if (!article) return notFound();

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

