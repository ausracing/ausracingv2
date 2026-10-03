import type { Metadata } from "next";
import CarConceptClient from "@/components/car-concept/CarConceptClient";

export const metadata: Metadata = {
  title: "Our Car | AUS Racing",
  description:
    "Explore the AUS Racing Formula Student car in 3D — built by students, engineered to race. Switch between braking system, electronics, aero, steering, chassis, and drivetrain.",
};

export default function CarConceptPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <link
        rel="preload"
        href="/models/CAR.glb"
        as="fetch"
        crossOrigin="anonymous"
      />
      <CarConceptClient />
    </main>
  );
}