import Image from "next/image";
import Link from "next/link";
import { newsletterArticles } from "../../app/newsletter/data";

function parseDate(dateStr: string) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

export default function NewsletterHome() {
  const sorted = [...newsletterArticles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const latest = sorted[0];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      {/* MAIN LATEST NEWS CARD - Full width, two-column, taller layout */}
      <div className="w-full border border-white/10 rounded-xl overflow-hidden bg-white/5">
        <div className="flex flex-col md:flex-row md:min-h-[450px]">
          {/* Left side: Image - taller on desktop */}
          <div className="relative w-full md:w-1/2 h-64 md:h-[450px]">
            <Image
              src={latest.image}
              alt={latest.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right side: Content - increased vertical padding */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
              {latest.title}
            </h1>
            <p className="text-white/60 mt-4 text-base md:text-lg leading-relaxed font-light italic">
              {latest.shortDescription}
            </p>
            <p className="text-xs text-white/40 mt-4">{latest.date}</p>
            <Link
              href={`/newsletter/${latest.slug}`}
              className="inline-block mt-6 underline text-sm md:text-base self-start"
            >
              Read full article →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA - unchanged */}
      <div className="w-full mt-12 text-center">
        <p className="text-white/70 text-sm">
          Interested? Check out our newsletter for more updates.
        </p>
        <Link
          href="/newsletter"
          className="mt-3 inline-block px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition text-sm"
        >
          Go to Newsletter
        </Link>
      </div>
    </div>
  );
}