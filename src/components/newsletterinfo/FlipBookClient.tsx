"use client";

import dynamic from "next/dynamic";

const FlipBook = dynamic(
  () => import("./FlipBook"),
  { ssr: false }
);

export default function FlipBookClient({
  sections,
}: {
  sections: any[];
}) {
  return <FlipBook sections={sections} />;
}
