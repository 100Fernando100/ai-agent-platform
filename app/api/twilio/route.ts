import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: NextRequest) {
  try {
    const { action, phoneNumber, message } = await request.json();
    
    // Get Twilio credentials from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
    
    if (!accountSid || !authToken) {
      return NextResponse.json({
        success: false,
        error: 'Twilio credentials not configured. Please add TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN to your environment variables.'
      }, { status: 400 });
    }
    
    const client = twilio(accountSid, authToken);
    
    switch (action) {
      case 'test-connection':
        try {
          // Test connection by fetching account info
          const account = await client.api.accounts(accountSid).fetch();
          
          return NextResponse.json({
            success: true,
            message: 'Twilio connected successfully!',
            accountName: account.friendlyName,
            status: account.status,
            type: account.type
          });
        } catch (error) {
          return NextResponse.json({
            success: false,
            error: `Twilio connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`
          }, { status: 400 });
        }
        
      default:
        return NextResponse.json({
          success: false,
          error: 'Invalid action'
        }, { status: 400 });
    }
    
  } catch (error) {
    console.error('Twilio API error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 });
  }
}
