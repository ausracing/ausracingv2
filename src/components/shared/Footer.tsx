import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-14 px-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* COLUMN 1 — BRAND */}
        <div className="flex flex-col gap-4">

          {/* LOGO BOX */}
      <div className="relative w-12 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-md border border-gray-700 flex items-center justify-center overflow-visible">

  <div className="absolute w-14 h-14">
    <Image
      src="/ausracinglogo.jpg"
      alt="AUS Racing logo"
      fill
      className="object-contain scale-110"
    />
  </div>

</div>

          <h3 className="text-lg font-medium text-gray-200">
            AUS Racing
          </h3>

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

          <a href="/" className="text-sm text-gray-400 hover:text-gray-300 transition">Home</a>
          <a href="/media" className="text-sm text-gray-400 hover:text-gray-300 transition">Media</a>
          <a href="/team" className="text-sm text-gray-400 hover:text-gray-300 transition">Team</a>
          <a href="/newsletter" className="text-sm text-gray-400 hover:text-gray-300 transition">Newsletter</a>

        </div>

        {/* COLUMN 3 — CONTACT */}
        <div className="flex flex-col gap-3">

          <h4 className="text-sm font-medium text-gray-300">
            American Univesity of Sharjah
          </h4>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMail />
            <span>contact@ausracing.com</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiPhone />
            <span>+971 50 000 6767</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiMapPin />
            <span>United Arab Emirates</span>
          </div>

          <div className="flex gap-4 pt-2 text-gray-400">

            <a href="https://instagram.com" target="_blank">
              <FaInstagram className="text-lg hover:text-gray-300 transition" />
            </a>

            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-lg hover:text-gray-300 transition" />
            </a>

          </div>

        </div>

        {/* COLUMN 4 — NEWSLETTER */}
        <div className="flex flex-col gap-3">

          <h4 className="text-sm font-medium text-gray-300">
            Newsletter
          </h4>

          <p className="text-sm text-gray-400">
            Stay updated with AUS Racing.
          </p>

          <div className="flex items-center w-full rounded-md border border-gray-800 bg-gray-900 overflow-hidden">

            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 bg-transparent text-sm text-gray-200 placeholder-gray-600 outline-none"
            />

            <button className="px-5 py-2 text-sm text-gray-300 hover:bg-gray-800 transition border-l border-gray-800">
              Subscribe
            </button>

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