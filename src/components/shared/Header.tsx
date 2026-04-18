// Header.tsx
// OWNER: Hashir
// Client component — sticky top navigation bar.

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the links in an array to keep the JSX clean
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Car", href: "/car-concept" },
  { name: "Team", href: "/team" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Media", href: "/media" },
  { name: "Contact Us", href: "/#footer" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center px-12 h-[68px] bg-background/90 backdrop-blur-md border-b border-white/10 select-none">

      {/* LEFT SECTION: Logo Anchor */}
      <div className="flex-1 flex items-center justify-start">
        <Link href="/" className="ml-6 hover:opacity-80 transition-opacity flex items-center translate-y-[2px]">
          <Image
            src="/images/logo.webp"
            alt="AUS Racing Logo"
            width={150}
            height={42}
            priority
            className="block"
            // Moving sizing here silences the console warning for good
            style={{ height: '42px', width: 'auto' }}
          />
        </Link>
      </div>

      {/* CENTER SECTION: Navigation Links */}
      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6 list-none m-0 p-0 hidden md:flex">
        {navLinks.map((link) => {
          // Logic: Does the current path match the link?
          const isActive = pathname === link.href;

          return (
            <li
              key={link.name}
              className={`font-mono text-[11px] tracking-[0.06em] uppercase transition-all duration-300 pb-0.5 border-b-[1.5px] cursor-pointer ${
                isActive
                  ? "text-foreground border-white/50"
                  : "text-white/60 border-transparent hover:text-primary hover:border-primary"
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      {/* RIGHT SECTION: CTA Button */}
      <div className="flex-1 flex items-center justify-end">
        <Link
          href="/sponsors"
          className="font-mono text-[10px] tracking-[0.1em] uppercase px-6 py-2.5 bg-primary text-background font-bold rounded-[4px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,170,0,0.5)] cursor-pointer"
        >
          Partner With Us &rarr;
        </Link>
      </div>

    </nav>
  );
}