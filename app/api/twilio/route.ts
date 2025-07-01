import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();
    
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    if (!accountSid || !authToken) {
      return NextResponse.json({
        success: false,
        error: 'Twilio credentials not configured'
      }, { status: 400 });
    }
    
    const client = twilio(accountSid, authToken);
    
    if (action === 'test-connection') {
      try {
        const account = await client.api.accounts(accountSid).fetch();
        return NextResponse.json({
          success: true,
          message: 'Twilio connected successfully!',
          accountName: account.friendlyName
        });
      } catch (error) {
        return NextResponse.json({
          success: false,
          error: 'Connection failed'
        }, { status: 400 });
      }
    }
    
    return NextResponse.json({
      success: false,
      error: 'Invalid action'
    }, { status: 400 });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Request failed'
    }, { status: 500 });
  }
}
