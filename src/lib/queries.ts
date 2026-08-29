import { sanityFetch } from "./sanity";
import type { SanityImageSource } from "@sanity/image-url";

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc, isLeader desc, name asc) {
  _id,
  name,
  role,
  isLeader,
  category,
  gender,
  photo,
  order
}`;

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  isLeader: boolean;
  category: string;
  gender: string;
  photo: Record<string, unknown> | null;
  order?: number;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return sanityFetch<TeamMember[]>({ query: teamMembersQuery });
}

export interface SanityArticleSection {
  _key: string;
  heading?: string;
  text?: string;
  image: SanityImageSource;
}

export interface SanityArticle {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  coverImage: SanityImageSource;
  date: string;
  sections: SanityArticleSection[];
}

export const newsletterArticlesQuery = `*[_type == "newsletterArticle"] | order(date desc) {
  _id,
  title,
  slug,
  shortDescription,
  coverImage,
  date,
  sections
}`;

export async function getNewsletterArticles(): Promise<SanityArticle[]> {
  return sanityFetch<SanityArticle[]>({ query: newsletterArticlesQuery });
}

export const newsletterArticleBySlugQuery = `*[_type == "newsletterArticle" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  coverImage,
  date,
  sections
}`;

export async function getNewsletterArticleBySlug(
  slug: string,
): Promise<SanityArticle | null> {
  return sanityFetch<SanityArticle | null>({
    query: newsletterArticleBySlugQuery,
    params: { slug },
  });
}
