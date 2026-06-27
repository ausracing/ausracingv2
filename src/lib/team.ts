// lib/team.ts — Fetch team members from Pocketbase with static fallback
import { useEffect, useState } from "react";
import { 
  FILTERS as STATIC_FILTERS, 
  TEAM_MEMBERS as STATIC_MEMBERS, 
  TEAM_DESCRIPTIONS as STATIC_DESCRIPTIONS 
} from "@/data/team";

// Re-export static data (unchanged)
export const FILTERS = STATIC_FILTERS;
export const TEAM_DESCRIPTIONS = STATIC_DESCRIPTIONS;

export interface TeamMember {
  name: string;
  role: string;
  isLeader: boolean;
  category: string;
  hasPhoto: boolean;
  gender: string;
  /** Pocketbase file URL — set when a photo is uploaded via the CMS */
  photoUrl: string | null;
}

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || "";

// Add photoUrl to static members for type compatibility
const STATIC_MEMBERS_WITH_PHOTO: TeamMember[] = STATIC_MEMBERS.map((m) => ({
  ...m,
  photoUrl: null,
}));

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  if (!PB_URL) return STATIC_MEMBERS_WITH_PHOTO;

  try {
    const res = await fetch(`${PB_URL}/api/collections/team_members/records?perPage=200`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    return (data.items || []).map((item: Record<string, unknown>) => {
      const photoFile = (item.photo as string) || "";
      const photoUrl = photoFile
        ? `${PB_URL}/api/files/team_members/${item.id}/${photoFile}`
        : null;

      return {
        name: (item.name as string) || "",
        role: (item.role as string) || "",
        isLeader: Boolean(item.is_leader ?? false),
        category: (item.category as string) || "",
        hasPhoto: Boolean(item.has_photo ?? false),
        gender: (item.gender as string) || "",
        photoUrl,
      };
    });
  } catch {
    return STATIC_MEMBERS_WITH_PHOTO;
  }
}

export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>(STATIC_MEMBERS_WITH_PHOTO);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers().then((data) => {
      setMembers(data);
      setLoading(false);
    });
  }, []);

  return { members, loading };
}
