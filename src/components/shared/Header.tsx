// Header.tsx
// OWNER: Hashir
// Client component — static top navigation bar.

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Our Car", href: "/#our-car" },
  { name: "Newsletter", href: "/newsletter" },
  // { name: "Media", href: "/media" },
  { name: "Contact Us", href: "/sponsors" }
];

export default function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. SCROLL OBSERVER FOR HOMEPAGE SECTIONS
  useEffect(() => {
    // If we aren't on the homepage, let the pathname handle active states exclusively
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveHash("");
      return;
    }

    // UPDATE 1: Removed [id] from footer so it catches it regardless of its attributes
    const elements = document.querySelectorAll("section[id], footer");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // UPDATE 2: If the user hits the footer, clear the hash so "Home" highlights
            if (entry.target.tagName.toLowerCase() === "footer") {
              setActiveHash("");
            } else {
              setActiveHash(`#${entry.target.id}`);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" } // Focused viewport window
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const isAtTop = window.scrollY < 100;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtTop || isAtBottom) {
        setActiveHash(""); // Reset to Home at the very top
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // 2. WATERPROOF CLICK HANDLER (Prevents Double Hashes)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string, isMobile: boolean) => {
    if (isMobile) setIsMobileMenuOpen(false);

    // CASE A: On the dedicated page, clicking "Our Car" scrolls to top
    if (pathname === "/car-concept" && name === "Our Car") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // CASE B: Universal Scroll-to-Top for any standard active page (Home, Newsletter, Sponsors, etc.)
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (href === "/") window.history.pushState(null, "", "/"); // Keeps the homepage URL clean
      return;
    }

    // CASE C: Already on the homepage, clicking a homepage anchor link
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href); // Sets clean URL without doubling up
        setActiveHash(`#${targetId}`);
      }
    }
  };

  // 3. LOCK BODY SCROLL ON MOBILE MENU
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => { 
      document.body.style.overflow = "unset"; 
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 h-17 bg-background/90 backdrop-blur-md border-b border-white/10 select-none">

        {/* 1. MOBILE LEFT: Burger Menu */}
        <div className="order-1 lg:hidden flex-none flex justify-start">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 text-white hover:text-primary transition-colors translate-y-[1px]"
            aria-label="Open Mobile Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 2. MOBILE CENTER | DESKTOP LEFT: Logo */}
        <div className="order-2 lg:order-1 flex-none lg:flex-1 flex justify-center lg:justify-start">
          <Link href="/" className="hover:opacity-80 transition-opacity flex items-center translate-y-0.5">
            <div className="relative w-[130px] sm:w-[130px] lg:w-[150px] aspect-[150/42]">
              <Image
                src="/images/logo.webp"
                alt="AUS Racing Logo"
                fill
                priority
                sizes="(max-width: 1024px) 100px, 120px"
                className="object-contain block"
              />
            </div>
          </Link>
        </div>

        {/* 3. DESKTOP CENTER: Links */}
        <ul className="order-none hidden lg:flex lg:flex-[2] justify-center items-center gap-6 xl:gap-8 list-none m-0 p-0 lg:order-2">
          {navLinks.map((link) => {
            let isActive = false;

            // Strict Active Tab Mapping Rules
            if (pathname === "/car-concept" && link.name === "Our Car") {
              isActive = true;
            } else if (pathname === "/") {
              if (link.href === "/") {
                isActive = activeHash === "";
              } else if (link.href.startsWith("/#")) {
                isActive = activeHash === link.href.replace("/", "");
              }
            } else {
              isActive = pathname === link.href;
            }

            return (
              <li
                key={link.name}
                className={`text-[11px] whitespace-nowrap tracking-[0.06em] uppercase transition-all duration-300 pb-0.5 border-b-[1.5px] cursor-pointer ${
                  isActive
                    ? "text-foreground border-white/50 font-bold"
                    : "text-white/60 border-transparent hover:text-primary hover:border-primary"
                }`}
              >
                <Link 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name, false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

        </ul>

        {/* 4. ALL SCREENS RIGHT: CTA Button */}
        <div className="order-3 flex-none lg:flex-1 flex items-center justify-end">
          <Link
            href="/sponsors"
            className={`text-[8px] sm:text-[9px] md:text-[11px] whitespace-nowrap tracking-widest uppercase px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 font-bold rounded-lg transition-all duration-300 cursor-pointer ${
              pathname === "/sponsors"
                ? "bg-transparent text-primary border border-primary hover:bg-primary/10" 
                : "bg-primary text-background hover:scale-105 hover:shadow-[0_0_20px_rgba(255,170,0,0.5)]"
            }`}
          >
            Partner With Us &rarr;
          </Link>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-6 md:right-8 p-2 text-white/60 hover:text-white transition-colors"
          aria-label="Close Mobile Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => {
            let isActive = false;

            if (pathname === "/car-concept" && link.name === "Our Car") {
              isActive = true;
            } else if (pathname === "/") {
              if (link.href === "/") {
                isActive = activeHash === "";
              } else if (link.href.startsWith("/#")) {
                isActive = activeHash === link.href.replace("/", "");
              }
            } else {
              isActive = pathname === link.href;
            }

            return (
              <li key={link.name} className="py-1">
                <Link 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name, true)}
                  className={`inline-block text-3xl font-mono tracking-widest uppercase transition-all duration-300 hover:scale-110 ${
                    isActive ? "text-primary font-bold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 font-mono">
            The Official Formula Student Team of the American University of Sharjah
          </p>
        </div>
      </div>
    </>
  );
}