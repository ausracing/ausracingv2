# AUS Racing Website v2

Next.js 15 · TypeScript · Tailwind CSS v4 · shadcn/ui · Motion

## Prerequisites
- Node.js v22+
- npm

## Getting Started
```bash
git clone https://github.com/ausracing/ausracingv2.git
cd ausracingv2
npm install
npm run dev
```

---

## Branch Workflow

1. Branch off main: `git checkout -b feature/your-feature`
2. Commit clearly: `git commit -m "component-name: what you did"`
3. Push and open a PR — at least one review before merging
4. **Never push directly to main**

---

## How the App Directory Works

This project uses the **Next.js App Router**. Every folder inside `src/app/` that has a `page.tsx` becomes a route automatically.

```bash
src/app/
├── page.tsx              → /           (homepage)
├── layout.tsx            → wraps every page (Header + Footer live here)
├── car-concept/
│   └── page.tsx          → /car-concept
├── team/
│   └── page.tsx          → /team
├── sponsors/
│   └── page.tsx          → /sponsors
└── media/
└── page.tsx          → /media
```
**layout.tsx** is the global wrapper. Hashir owns this file — it imports Header and Footer so they appear on every page automatically. Do not add page-specific content here.

---

## Server vs Client Components

| Type | When to use | How |
|------|-------------|-----|
| Server component | Default. Static layout, cards, grids, pages | Nothing — just write your component normally |
| Client component | Needs state, onClick, animations, hooks | Add `"use client"` as the very first line |
| Dynamic import | Heavy client components (carousel, modal) | `const X = dynamic(() => import(...), { ssr: false })` |

**Rule of thumb:** if it doesn't need interactivity, keep it a server component.

---

## Folder Structure & Ownership
```bash
src/
├── app/
│   ├── layout.tsx                         ← Hashir (global layout)
│   ├── page.tsx                           ← Everyone adds their section here
│   ├── car-concept/page.tsx               ← Yusuf
│   ├── team/page.tsx                      ← Hashir
│   ├── sponsors/page.tsx                  ← Yasmeen
│   └── media/page.tsx                     ← Adam
│
├── components/
│   ├── car-concept/                       ← Yusuf
│   │   ├── CarTeaser.tsx
│   │   ├── DepartmentCard.tsx
│   │   └── DepartmentModal.tsx
│   ├── hero/                              ← Hashir
│   │   ├── HeroVideo.tsx
│   │   ├── Loader.tsx
│   │   └── AUSParagraph.tsx
│   ├── sponsors/                          ← Yasmeen
│   │   ├── SponsorSlider.tsx
│   │   ├── FundingBar.tsx
│   │   ├── QuoteSection.tsx
│   │   └── SponsorTiers.tsx
│   ├── newsletter/                        ← Adam
│   │   ├── NewsletterSignup.tsx
│   │   └── NewsletterCard.tsx
│   ├── shared/                            ← Hashir (Header), Adam (Footer)
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                               ← shadcn auto-generated. Do not edit manually.
│
public/
├── images/
│   ├── car/                              ← car photos (WebP)
│   ├── team/                             ← team member photos (WebP)
│   └── sponsors/                         ← sponsor logos (WebP)
└── fonts/
```
**Stick to your folder.** Only edit files in your assigned component folder and your assigned page. If you need something from another section, ask on the WhatsApp GC first.

---

## Colors

Defined in `src/app/globals.css`. The site is always dark themed.

| Utility class | Value | Use for |
|---------------|-------|---------|
| `bg-background` | `#000000` | page backgrounds |
| `text-foreground` | white | body text |
| `text-primary` | `#F5B041` | gold accents, headings |
| `bg-primary` | `#F5B041` | gold buttons, highlights |
| `text-brand-primary` | `#F5B041` | same gold via brand token |

---

## shadcn Components

Check what's already installed:
```bash
ls src/components/ui/
```

Add a new component if it's not there:
```bash
npx shadcn@latest add <component-name>
# examples:
npx shadcn@latest add carousel
npx shadcn@latest add input
npx shadcn@latest add sonner
```

Full list: https://ui.shadcn.com/docs/components  
**Commit the generated file** in `src/components/ui/` — do not gitignore it.

---

## Images

- Format: **WebP only**. Convert before adding to `public/`.
- Always use `next/image`, never `<img>` tags.
- Hero/above-fold images: add `priority` prop.
- Everything else: add `loading="lazy"` (default in next/image).
- Always include `alt` text — no exceptions.

---

## Assignments

| Name | Branch | Owns |
|------|--------|------|
| Yusuf | `feature/car-concept` | CarTeaser, DepartmentCard, DepartmentModal, /car-concept page |
| Hashir | `feature/hero` | HeroVideo, Loader, AUSParagraph, Header, layout.tsx, /team page |
| Yasmeen | `feature/sponsors` | SponsorSlider, FundingBar, QuoteSection, SponsorTiers, /sponsors page |
| Adam | `feature/newsletter` | NewsletterSignup, NewsletterCard, Footer, /media page, performance |

---

## Deployment

Deploys to Vercel on merge to main. Test your build locally before opening a PR:
```bash
npm run build
npm run start
```
