import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-14 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* COLUMN 1 — BRAND */}
        <div className="flex flex-col gap-4">
          <div className="relative w-32 aspect-[128/64] flex items-center justify-start overflow-visible">
            <Image
              src="/images/logo.webp"
              alt="AUS Racing logo"
              fill
              sizes="(max-width: 768px) 128px, 128px"
              className="object-contain object-left"
            />
          </div> {/* ✨ FIX: Added the missing closing div here */}

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-800 rounded-md" />
            <h3 className="text-lg font-medium text-gray-200">
              AUS Racing
            </h3>
          </div>

          <div className="text-base text-gray-400">
                🏎️ 🔥🔥
          </div>

          <p className="text-sm text-gray-400">
            Engineering the future of motorsport performance.
          </p>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-gray-300">
            Quick Links
          </h4>
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/car-concept" className="text-sm text-gray-400 hover:text-gray-300 transition">
            Car Concept
          </Link>
          <Link href="/media" className="text-sm text-gray-400 hover:text-gray-300 transition">
            Media
          </Link>
          <Link href="/team" className="text-sm text-gray-400 hover:text-gray-300 transition">
            Team
          </Link>
          <Link href="/newsletter" className="text-sm text-gray-400 hover:text-gray-300 transition">
            Newsletter
          </Link>
        </div>

        {/* COLUMN 3 — UAE INFO + SOCIALS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-gray-300">
            UAE Office
          </h4>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMail />
            <span>contact@ausracing.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiPhone />
            <span>+971 000 000 000</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMapPin />
            <span>United Arab Emirates</span>
          </div>
          <div className="flex gap-4 pt-2 text-gray-400">
            <Link href="https://www.instagram.com/ausracingfs" target="_blank" rel="noreferrer">
              <FaInstagram className="text-lg hover:text-gray-300 transition" />
            </Link>
            <Link href="https://www.linkedin.com/company/aus-racing-team/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-lg hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>

        {/* COLUMN 4 — NEWSLETTER */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-gray-300">
            Newsletter
          </h4>
          <p className="text-sm text-gray-400 mb-1">
            Stay updated with AUS Racing.
          </p>
          
          {/* ✨ FIX: Kept the actual component, removed the duplicate raw HTML input below it */}
          <NewsletterForm />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © 2026 AUS Racing. All rights reserved.
      </div>
    </footer>
  );
}