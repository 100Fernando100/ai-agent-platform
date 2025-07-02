// /app/api/calendly/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const eventType = body.event;
  const payload = body.payload;

  console.log("📆 Calendly Webhook Received:", eventType);
  console.log("👤 Invitee:", payload?.invitee?.name, payload?.invitee?.email);
  console.log("🕒 Event Start Time:", payload?.event?.start_time);

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ message: "Calendly Webhook Ready" });
}
