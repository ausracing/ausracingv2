import Image from "next/image";
import Link from "next/link";
import { newsletterArticles } from "../../app/newsletter/data";
import Footer from "@/components/shared/Footer";

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
    <div className="min-h-full bg-black text-white flex flex-col items-center px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-center text-3xl font-bold md:text-5xl font-orbitron uppercase">
          Latest <span className="text-[#fbb03a]">Newsletter</span>
        </h2>
      {/* MAIN LATEST NEWS CARD */}
      <div className="w-full border mt-10 border-white/10 rounded-xl overflow-hidden bg-white/5 flex flex-col md:flex-row">
        
        {/* IMAGE - Left side on desktop, top on mobile */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-96">
          <Image
            src={latest.image}
            alt={latest.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* TEXT - Right side on desktop, bottom on mobile */}
        <div className="p-5 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-bold">{latest.title}</h1>

          <p className="text-white/60 mt-4 text-sm md:text-base leading-relaxed">
            {latest.shortDescription}
          </p>

          <p className="text-xs text-white/40 mt-4 md:mt-6">{latest.date}</p>

          <Link
            href={`/newsletter/${latest.slug}`}
            className="inline-block mt-6 md:mt-8 underline text-sm md:text-base hover:text-yellow-400 transition"
          >
            Read full article →
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5 md:mt-8 text-center">
        <p className="text-white/70 text-sm md:text-base">
          Interested? Check out our newsletter for more updates.
        </p>

        <Link
          href="/newsletter"
          className="mt-4 md:mt-6 inline-block px-5 py-2 border border-white/20 rounded-lg text-sm md:text-base hover:bg-white/10 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/10 transition duration-300"
        >
          Go to Newsletter
        </Link>
      </div>
    </div>
  );
}