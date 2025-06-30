import { NextResponse } from 'next/server';

export async function GET() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  
  return NextResponse.json({
    accountSidExists: !!accountSid,
    authTokenExists: !!authToken,
    accountSidLength: accountSid?.length || 0,
    authTokenLength: authToken?.length || 0,
    allTwilioVars: Object.keys(process.env).filter(key => key.includes('TWILIO'))
  });
}