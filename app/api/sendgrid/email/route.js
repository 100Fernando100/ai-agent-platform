import { NextResponse } from 'next/server';
import { serviceFactory } from '../lib/services/factory';

export async function POST(request) {
  try {
    const { to, from, subject, text, html, templateId } = await request.json();
    
    const sendgridService = serviceFactory.getSendGridService();
    const email = await sendgridService.sendEmail({
      to,
      from: from || process.env.SENDGRID_FROM_EMAIL,
      subject,
      text,
      html,
      templateId
    });
    
    return NextResponse.json({ 
      success: true, 
      messageId: email.messageId,
      demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
    });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
