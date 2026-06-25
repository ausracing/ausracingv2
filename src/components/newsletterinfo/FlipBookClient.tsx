"use client";

import dynamic from "next/dynamic";

const FlipBook = dynamic(
  () => import("./FlipBook"),
  { ssr: false }
);

interface Section {
  image?: string;
  text?: string;
  heading?: string;
}

export default function FlipBookClient({
  sections,
}: {
  sections: Section[];
}) {
  return <FlipBook sections={sections} />;
}