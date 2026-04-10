// page.tsx — /media route
// OWNER: Adam
// Server component — press/media kit page.
// Contains: downloadable logos, hi-res images, car specs sheet, press contact info.

import MediaHero from "./MediaComponents/MediaHero";
import MediaGrid from "./MediaComponents/MediaGrid";

export default function Media() {
  return (
    <div className="min-h-screen flex flex-col">
      <MediaHero />
      <MediaGrid />
    </div>
  );
}