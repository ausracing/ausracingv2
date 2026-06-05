// src/app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = body.email;

    // 1. SANITIZE & VALIDATE
    // Check if it exists and matches a standard email format
    if (!rawEmail || !/^\S+@\S+\.\S+$/.test(rawEmail)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    
    // Trim whitespace and convert to lowercase for clean storage
    const sanitizedEmail = rawEmail.trim().toLowerCase();

    // 2. DEFINE SAVE LOCATION
    // This will save to src/data/emails.json
    const filePath = path.join(process.cwd(), 'src', 'data', 'emails.json');

    // 3. READ EXISTING DATA
    let emails: string[] = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      emails = JSON.parse(fileData);
    } catch {
      // If the file doesn't exist yet, we just start with an empty array. No big deal.
    }

    // 4. PREVENT DUPLICATES
    if (emails.includes(sanitizedEmail)) {
      // We return 200 Success even if it's a duplicate so the UI still looks good
      return NextResponse.json({ message: 'Already on the list' }, { status: 200 });
    }

    // 5. SAVE NEW EMAIL
    emails.push(sanitizedEmail);
    await fs.writeFile(filePath, JSON.stringify(emails, null, 2));

    return NextResponse.json({ message: 'Successfully added' }, { status: 200 });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}