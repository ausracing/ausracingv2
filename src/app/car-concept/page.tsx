import type { Metadata } from "next";
import CarConceptClient from "@/components/car-concept/CarConceptClient";

export const metadata: Metadata = {
  title: "Our Car | AUS Racing",
  description: "Discover the engineering behind the AUS Racing Formula Student car.",
};

export default function CarConceptPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Ghost headline */}
      <div className="relative pt-10">
        <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
          <p className="text-[clamp(3rem,10vw,8rem)] font-black uppercase tracking-[0.25em] text-white/[0.05]">
            THE CAR
          </p>
        </div>

        <CarConceptClient modelUrl="/models/FINAL_3MB.glb" />
      </div>
    </main>
  );
}