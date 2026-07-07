// src/lib/sanity.mutations.ts

import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN!,
});

/**
 * Subscribe a visitor email to the newsletter audience list.
 *
 * @param email - Subscriber email address
 * @returns The created document or mutation result
 */
export async function subscribeToNewsletter(
  email: string
): Promise<{ _id: string } | null> {
  if (!email) {
    throw new Error("Email is required");
  }

  try {
    const doc = await writeClient.create({
      _type: "newsletterSubscription",
      email,
      subscribedAt: new Date().toISOString(),
    });
    return { _id: doc._id };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown mutation error";
    throw new Error(`Failed to subscribe: ${message}`);
  }
}

/**
 * Submit a sponsor inquiry from the sponsorship form.
 *
 * @param data - Sponsor application fields
 * @returns The created document ID
 */
export async function submitSponsorInquiry(data: {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<{ _id: string } | null> {
  try {
    const doc = await writeClient.create({
      _type: "sponsorInquiry",
      ...data,
      submittedAt: new Date().toISOString(),
    });
    return { _id: doc._id };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown mutation error";
    throw new Error(`Failed to submit sponsor inquiry: ${message}`);
  }
}
