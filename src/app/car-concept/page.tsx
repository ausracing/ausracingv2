import type { Metadata } from "next";
import CarConceptClient from "@/components/car-concept/CarConceptClient";

export const metadata: Metadata = {
  title: "Our Car | AUS Racing",
  description: "Discover the engineering behind the AUS Racing Formula Student car.",
};

export default function CarConceptPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <CarConceptClient />
    </main>
  );
}