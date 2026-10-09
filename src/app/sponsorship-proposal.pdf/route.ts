import { getSponsorshipProposalUrl } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const sanityUrl = await getSponsorshipProposalUrl();
    
    // Fallback if no PDF is uploaded in Sanity yet
    const targetUrl = sanityUrl || "https://ausracing.me/documents/AUS_Racing_Sponsorship_Proposal.pdf";

    const response = await fetch(targetUrl);
    if (!response.ok) {
      return new NextResponse("PDF not found", { status: 404 });
    }

    const pdfBuffer = await response.arrayBuffer();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="AUS_Racing_Sponsorship_Proposal.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving proposal PDF:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}