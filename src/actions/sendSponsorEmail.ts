"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSponsorEmail(formData: FormData) {
  const companyName = formData.get("companyName") as string;
  const contactName = formData.get("contactName") as string;
  const role = formData.get("role") as string;
  const email = formData.get("email") as string;
  const meetingTime = formData.get("meetingTime") as string;

  if (!companyName || !contactName || !role || !email) {
    return { error: "Please fill in all required fields." };
  }

  // Pull from environment variables securely
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL || "AUS Racing <sponsors@ausracing.me>";
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL || "ausracing@aus.edu";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: `${contactName} <${email}>`,
      subject: `[Sponsor Lead - ER] Inquiry from ${companyName}`,
      text: `
New Partnership Inquiry:

Company Name: ${companyName}
Contact Name: ${contactName}
Role: ${role}
Email Address: ${email}
Preferred Meeting Time: ${meetingTime || "Not specified"}
      `,
    });

    if (error) {
      // Intercepts Resend's technical errors (like rate limits) and provides a graceful fallback
      console.error("Resend API Error:", error);
      return { 
        error: "Our system is experiencing high traffic. Please email us directly at ausracing@aus.edu to get in touch." 
      };
    }

    return { success: true };
  } catch (err) {
    // Renamed variable to 'err' and logged it to fix the ESLint "unused variable" warning
    console.error("Unexpected Error sending sponsor email:", err);
    return { 
      error: "An unexpected error occurred. Please email us directly at ausracing@aus.edu to get in touch." 
    };
  }
}