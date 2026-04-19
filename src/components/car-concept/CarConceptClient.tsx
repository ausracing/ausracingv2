"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { departments, type Department } from "./departmentData";
import DepartmentCard from "./DepartmentCard";
import DepartmentModal from "./DepartmentModal";

const CarModel = dynamic(() => import("./CarModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-44 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-primary rounded-full animate-pulse" />
      </div>
    </div>
  ),
});

// ─── Placeholder gallery images ───────────────────────────────────────────────
const GALLERY = [
  { src: "https://placehold.co/600x400/111/333?text=Testing+Day", alt: "Testing day" },
  { src: "https://placehold.co/600x900/111/333?text=Build+Shop", alt: "Build shop" },
  { src: "https://placehold.co/600x400/111/333?text=FSG+2024", alt: "FSG 2024" },
  { src: "https://placehold.co/600x700/111/333?text=Aero+Dev", alt: "Aero development" },
  { src: "https://placehold.co/600x400/111/333?text=Chassis+Fab", alt: "Chassis fabrication" },
  { src: "https://placehold.co/600x500/111/333?text=Driver+Brief", alt: "Driver briefing" },
  { src: "https://placehold.co/600x800/111/333?text=Endurance+Run", alt: "Endurance run" },
  { src: "https://placehold.co/600x400/111/333?text=Team+Photo", alt: "Team photo" },
  { src: "https://placehold.co/600x600/111/333?text=Suspension+Rig", alt: "Suspension rig" },
];

// ─── Masonry gallery ──────────────────────────────────────────────────────────
function MasonryGallery() {
  const cols: typeof GALLERY[] = [[], [], []];
  GALLERY.forEach((img, i) => cols[i % 3].push(img));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-3">
          {col.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-xl border border-card-line bg-card group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Glowing scroll CTA — fixed to viewport, fades out past hero ──────────────
function ScrollCTA({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setVisible(heroBottom > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-50"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
          />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="relative text-[11px] font-mono tracking-[0.35em] uppercase text-primary"
            style={{ textShadow: "0 0 12px rgba(245,176,65,0.6), 0 0 30px rgba(245,176,65,0.3)" }}
          >
            Scroll for details
          </motion.span>
          <motion.div
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.2 }}
            style={{ transformOrigin: "top" }}
            className="w-px h-6 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main client component ────────────────────────────────────────────────────
export default function CarConceptClient({ modelUrl }: { modelUrl: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  return (
    <>
      {/* Fixed scroll CTA — viewport-anchored, hides once past hero */}
      <ScrollCTA heroRef={heroRef} />

      {/* Department modal with AnimatePresence fade */}
      <AnimatePresence>
        {selectedDept && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <DepartmentModal
              dept={selectedDept}
              onClose={() => setSelectedDept(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero: two-column split ───────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#F5B041 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* LEFT — text, vertically centred */}
          <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 pt-24 pb-16 lg:py-0">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary mb-5">
              AUS Racing · Formula Student
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-foreground leading-[0.92] tracking-tight mb-7">
              Built by<br />
              <span className="text-primary">students.</span><br />
              Engineered<br />
              to race.
            </h1>
           <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-md mb-4">
  AUS Racing is the American University of Sharjah's Formula Student
  team. Every component — from the spaceframe steel chassis to the
  custom accumulator — is designed, analysed, manufactured, and tested by
  our students. We compete at Formula Student UK.
</p>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm mb-10">
              Hover the annotation dots on the model to explore key car systems.
              Scroll down to meet the departments behind the build.
            </p>
            <div className="flex gap-10">
              {[
                { value: "EV", label: "Powertrain" },
  { value: "7", label: "Departments" },
  { value: "FSUK", label: "Competition" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-primary">{s.value}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/35">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D car, vertically centred */}
          <div className="relative flex items-center justify-center min-h-[60vh] lg:min-h-screen">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-2/3 bg-primary/6 rounded-full blur-[100px]" />
            </div>
            <div className="w-full h-[60vh] lg:h-[85vh] max-w-3xl pointer-events-auto px-4 lg:px-0">
              <CarModel modelUrl={modelUrl} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────a──────────────────────────────── */}
      <div className="mx-6 md:mx-12 lg:mx-20 my-20 h-px bg-white/[0.07]" />

      {/* ── Department cards ─────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary mb-3">
              The team
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground tracking-tight">
              Pillars of <span className="text-primary">Excellence</span>
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-lg leading-relaxed">
              Organised into specialised departments, each bringing unique expertise to the build.
              Click any card to learn more.
            </p>
          </div>

          {/* Faster stagger — 40ms not 70ms, shorter y travel */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {departments.map((dept) => (
              <motion.div
                key={dept.id}
                className="h-full"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
                }}
              >
                <DepartmentCard dept={dept} onClick={setSelectedDept} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="mx-6 md:mx-12 lg:mx-20 mb-20 h-px bg-white/[0.07]" />

      {/* ── Gallery ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-primary mb-3">
              Behind the scenes
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground tracking-tight">
              The <span className="text-primary">Build</span>
            </h2>
            <p className="mt-3 text-white/40 text-sm max-w-lg leading-relaxed">
              From the workshop floor to the competition paddock.
            </p>
          </div>
          <MasonryGallery />
        </div>
      </section>
    </>
  );
}