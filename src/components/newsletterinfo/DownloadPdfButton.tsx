// src/components/newsletterinfo/DownloadPdfButton.tsx

"use client";

interface DownloadPdfButtonProps {
  pdfUrl: string;
  issueName: string;
}

export default function DownloadPdfButton({
  pdfUrl,
  issueName,
}: DownloadPdfButtonProps) {
  const cleanMonth = issueName
    .replace(/news/i, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
  const fileName = `ausracing-${cleanMonth}-newsletter.pdf`;

  return (
    <a
      href={pdfUrl}
      download={fileName}
      className="
        group 
        flex items-center justify-center gap-1.5 sm:gap-2
        w-full h-10 sm:h-12 px-2 sm:px-4 py-2 rounded-lg 
        md:w-auto md:px-5 md:py-2.5 md:rounded-full
        bg-black text-white
        border border-zinc-800
        hover:bg-zinc-900 hover:border-amber-500/50 hover:text-amber-500
        active:scale-95
        transition-all duration-200
        touch-manipulation select-none
      "
      aria-label={`Download full PDF for ${issueName}`}
    >
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      {/* Scaled down to text-xs on mobile for 320px support */}
      <span className="text-xs sm:text-sm font-medium whitespace-nowrap truncate">
        Download PDF
      </span>
    </a>
  );
}
