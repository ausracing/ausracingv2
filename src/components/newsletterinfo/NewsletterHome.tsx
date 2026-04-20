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
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      
      {/* MAIN LATEST NEWS CARD */}
      <div className="w-full max-w-2xl border border-white/10 rounded-xl overflow-hidden bg-white/5">
  <div className="relative w-full h-64">
    <Image
      src={latest.image}
      alt={latest.title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  </div>

  <div className="p-5">
    <h1 className="text-2xl font-bold">{latest.title}</h1>
  

          <p className="text-white/60 mt-2 text-sm leading-relaxed">
            {latest.shortDescription}
          </p>

          <p className="text-xs text-white/40 mt-2">{latest.date}</p>

          <Link
            href={`/newsletter/${latest.slug}`}
            className="inline-block mt-4 underline text-sm"
          >
            Read full article →
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
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