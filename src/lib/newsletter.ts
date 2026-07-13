import { urlFor } from './sanity';
import type { SanityArticle, SanityArticleSection } from './queries';
import type { Article, ArticleSection } from '@/data/newsletter';

function buildPdfUrl(slug: string): string {
  const parts = slug.split('-');
  const year = parts[parts.length - 1];
  return `/newsletter/${year}/${slug}/${slug}.pdf`;
}

export function sanityArticleToArticle(sanity: SanityArticle): Article {
  const slug = sanity.slug.current;
  return {
    slug,
    title: sanity.title,
    shortDescription: sanity.shortDescription,
    image: urlFor(sanity.coverImage).url(),
    pdfUrl: buildPdfUrl(slug),
    date: sanity.date,
    sections: sanity.sections.map((sec: SanityArticleSection): ArticleSection => ({
      image: urlFor(sec.image).url(),
    })),
  };
}
