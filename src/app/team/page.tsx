import { getTeamMembers } from "@/lib/queries";
import TeamClient from "./TeamClient";

export default async function TeamPage() {
  let members = await getTeamMembers().catch((e: unknown) => {
    console.error("Failed to fetch team members from Sanity", e);
    return [] as Awaited<ReturnType<typeof getTeamMembers>>;
  });

  return <TeamClient members={members} />;
}
