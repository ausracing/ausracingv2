import type { Metadata } from "next";
import CarTeaser from "@/components/car-concept/CarTeaser";

export const metadata: Metadata = {
  title: "AUS Racing",
  description: "AUS Racing — Formula Student team at the American University of Sharjah.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <CarTeaser />
    </main>
  );
}