import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* COLUMN 1 — BRAND */}
        <div className="flex flex-col gap-4">

          <div className="relative w-32 h-16 flex items-center justify-start overflow-visible">
            <Image
              src="/images/logo.webp"
              alt="AUS Racing logo"
              width={128}
              height={64}
              className="object-contain object-left"
              style={{ width: 'auto', height: '100%' }}
            />
          </div> 
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Engineering the future of motorsport performance from AUS.
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
            <span>ausracing@aus.edu</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiPhone />
            <span>+971 56 945 6746</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMapPin />
            <span>American University of Sharjah, UAE</span>
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
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium text-gray-300">
            Newsletter
          </h4>
          <p className="text-sm text-gray-400">
            Sign up to our newsletter to stay updated with AUS Racing.
          </p>

          {/* Branded Gold Status Indicator */}
          <div className="mt-1">
            <span className="inline-block rounded bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-500 border border-yellow-500/20">
              Coming Soon
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © 2026 AUS Racing. All rights reserved.
      </div>
    </footer>
  );
}