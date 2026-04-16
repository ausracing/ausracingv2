import Image from "next/image";

export default function MediaHero() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-zinc-900 mb-10">
      <Image
        src="/media1.jpg"
        alt="AUS Racing Hero"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-end p-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
          <p className="text-white/70 text-sm mt-1">
            AUS Racing Media Collection
          </p>
        </div>
      </div>
    </div>
  );
}