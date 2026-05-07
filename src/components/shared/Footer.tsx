import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm"; 

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black text-gray-400 pt-14 pb-6 px-6 border-t border-gray-800">

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
          </div>

          <p className="text-sm text-gray-400 mt-2">
            Engineering the future of motorsport performance from AUS.
          </p>

        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div className="flex flex-col gap-3">

          <h4 className="text-sm font-medium text-gray-300">
            Quick Links
          </h4>

          <a href="/" className="text-sm text-gray-400 hover:text-gray-300 transition">Home</a>
          <a href="/car-concept" className="text-sm text-gray-400 hover:text-gray-300 transition">Car Concept</a>
          <a href="/media" className="text-sm text-gray-400 hover:text-gray-300 transition">Media</a>
          <a href="/team" className="text-sm text-gray-400 hover:text-gray-300 transition">Team</a>
          <a href="/newsletter" className="text-sm text-gray-400 hover:text-gray-300 transition">Newsletter</a>

        </div>

        {/* COLUMN 3 — CONTACT */}
        <div className="flex flex-col gap-3">

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMail />
            <span>ausracing@aus.edu</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiPhone />
            <span>+971 50 000 6767</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMapPin />
            <span>American University of Sharjah, UAE</span>
          </div>

          <div className="flex gap-4 pt-2 text-gray-400">

            <a href="https://www.instagram.com/ausracingfs" target="_blank" rel="noreferrer">
              <FaInstagram className="text-lg hover:text-gray-300 transition" />
            </a>

            <a href="https://www.linkedin.com/company/aus-racing-team/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-lg hover:text-gray-300 transition" />
            </a>
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

          {/* ✨ FIX: Dropped the reusable form component right here */}
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