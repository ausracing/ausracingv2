import MediaHero from "./MediaComponents/MediaHero";
import MediaGallery from "./MediaComponents/MediaGallery";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-10">
      <MediaHero />
      <MediaGallery />
    </div>
  );
}