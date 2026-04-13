// Header.tsx
// OWNER: Hashir
// Server component — sticky top navigation bar.
// Contains: AUS Racing logo/name, nav links, gold "Sponsor" CTA button (right aligned).
// Tailwind: sticky top-0 z-50, black background, yellow accents.
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 h-[68px] bg-background/90 backdrop-blur-md border-b border-white/10 select-none">
      
      {/* LOGO BLOCK */}
      <Link href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
        <Image 
          src="/images/logo.webp" 
          alt="AUS Racing Logo" 
          width={150} 
          height={50} 
          className="object-contain w-auto h-[40px]"
          priority
        />
      </Link>

      {/* NAVIGATION LINKS */}
      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-6 list-none m-0 p-0">
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-foreground pb-0.5 border-b-[1.5px] border-white/50 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-colors cursor-pointer">
          <Link href="/">Our Car</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-colors cursor-pointer">
          <Link href="/">Team</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-colors cursor-pointer">
          <Link href="/">Newsletter</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-colors cursor-pointer">
          <Link href="/">Contact Us</Link>
        </li>
      </ul>

      {/* CTA BUTTON */}
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase px-5 py-2.5 bg-primary text-background font-bold rounded hover:opacity-90 transition-opacity cursor-pointer">
        Partner With Us &rarr;
      </div>
      
    </nav>
  );
}