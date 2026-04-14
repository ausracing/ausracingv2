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
  { name: "Contact Us", href: "/#footer" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[68px] bg-background/90 backdrop-blur-md border-b border-white/10 select-none">
      
      {/* LEFT SECTION: Logo Anchor */}
      <div className="flex-1 flex items-center justify-start">
        <Link href="/" className="ml-6 hover:opacity-80 transition-opacity flex items-center translate-y-[2px]">
          <Image
            src="/images/logo.webp"
            alt="AUS Racing Logo"
            width={150}
            height={42}
            priority
            className="h-[42px] w-auto block"
          />
        </Link>
      </div>

      {/* NAVIGATION LINKS */}
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

      {/* CTA BUTTON */}
      <Link 
        href="/sponsors" 
        className="font-mono text-[10px] tracking-[0.1em] uppercase px-5 py-2.5 bg-primary text-background font-bold rounded hover:opacity-90 transition-opacity cursor-pointer">
        Partner With Us &rarr;
      </Link>
      
    </nav>
  );
}