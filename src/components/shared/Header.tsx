// Header.tsx
// OWNER: Hashir
// Server component — sticky top navigation bar.
import Image from "next/image";
import Link from "next/link";

export default function Header() {
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

      {/* CENTER SECTION: Absolute Centered Navigation */}
      <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 list-none m-0 p-0">
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-foreground pb-0.5 border-b-[1.5px] border-white/50 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-all cursor-pointer">
          <Link href="/car-concept">Our Car</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-all cursor-pointer">
          <Link href="/team">Team</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-all cursor-pointer">
          <Link href="/#newsletter">Newsletter</Link>
        </li>
        <li className="font-mono text-[11px] tracking-[0.06em] uppercase text-white/60 pb-0.5 border-b-[1.5px] border-transparent hover:text-primary hover:border-primary transition-all cursor-pointer">
          <Link href="/#footer">Contact Us</Link>
        </li>
      </ul>

      {/* RIGHT SECTION: CTA Anchor */}
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