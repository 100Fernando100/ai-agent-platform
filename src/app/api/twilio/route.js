// /app/api/twilio/call/route.js
import { NextResponse } from 'next/server';
import { serviceFactory } from '@/lib/services/factory';

export async function POST(request) {
  try {
    const { to, from, url } = await request.json();
    
    const twilioService = serviceFactory.getTwilioService();
    const call = await twilioService.makeCall(to, from, { url });
    
    return NextResponse.json({ 
      success: true, 
      call,
      demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
    });
  } catch (error) {
    console.error('Call error:', error);
    return NextResponse.json(
      { error: 'Failed to make call', details: error.message },
      { status: 500 }
    );
  }
}