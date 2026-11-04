import type { Metadata } from "next";
import RulesFrame from "@/components/rules/RulesFrame";

export const metadata: Metadata = {
  title: "FSUK Rules Search | AUS Racing",
  description: "Search every rule in the FSUK 2026 rulebook.",
};

export default function RulesPage() {
  return <RulesFrame />;
}
