import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  const payload = await req.json();

  const email = payload?.payload?.invitee?.email;
  const name = payload?.payload?.invitee?.name;
  const event = payload?.event;

  if (!email || !name) {
    return NextResponse.json({ success: false, error: "Missing data" }, { status: 400 });
  }

  try {
    await sgMail.send({
      to: email,
      from: 'your-email@yourdomain.com', // Cambiá esto por tu remitente verificado en SendGrid
      subject: 'Thanks for booking with us!',
      html: `<p>Hi ${name},</p><p>Thanks for scheduling a call! We'll see you soon.</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
