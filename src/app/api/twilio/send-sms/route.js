import { sendSMS } from '@/utils/twilioClient';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { to, message } = await request.json();
    
    const response = await sendSMS(to, message);
    return NextResponse.json({ success: true, messageId: response.sid });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}