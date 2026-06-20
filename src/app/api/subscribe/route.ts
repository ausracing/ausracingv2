// src/app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. EXPLICIT CHECK: Ask Resend if this email already exists
    const { data: existingContact } = await resend.contacts.get({ 
      email: email 
    });

    // 2. If data comes back, they are already on the roster. Stop here.
    if (existingContact) {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    // 3. If they don't exist, create the new contact
    await resend.contacts.create({
      email: email,
      unsubscribed: false,
    });

    // 4. Fire the welcome email off to Resend
    const { error: emailError } = await resend.emails.send({
      from: 'AUS Racing <onboarding@resend.dev>',
      to: email, 
      subject: 'Welcome to the Grid | AUS Racing',
      html: `
        <div style="font-family: monospace; background-color: #18181b; color: #ffffff; padding: 40px; border-radius: 8px;">
          <h1 style="color: #eab308; text-transform: uppercase; letter-spacing: 2px;">Welcome to the Team</h1>
          <p style="color: #a1a1aa; font-size: 14px;">You are now subscribed to the AUS Racing newsletter.</p>
          <p style="color: #a1a1aa; font-size: 14px;">We'll keep you updated on our latest concepts, track days, and engineering breakthroughs.</p>
        </div>
      `,
    });

    if (emailError) throw new Error(emailError.message);

    // 5. Tell the frontend it's a brand new subscriber
    return NextResponse.json({ success: true, alreadySubscribed: false });
    
  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}