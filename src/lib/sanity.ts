import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

/**
 * Build a Sanity image URL from an image reference.
 *
 * @param source - A Sanity image reference (asset object, ref string, etc.)
 * @returns An ImageUrlBuilder instance for chaining .width(), .url(), etc.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Execute a GROQ query against the Sanity content lake.
 *
 * @param query - GROQ query string
 * @param params - Optional query parameters
 * @returns The query result
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params);
}
