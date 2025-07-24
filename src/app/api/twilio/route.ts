import { NextResponse } from 'next/server';
import { getTwilioConfig } from '@/config/twilio';
import twilio from 'twilio';

export async function POST(request: Request) {
  try {
    const { action } = await request.json();

    if (action === 'test_connection') {
      // Test Twilio connection using environment variables
      try {
        const config = getTwilioConfig();
        const client = twilio(config.accountSid, config.authToken);
        
        // Test by fetching account info (lightweight operation)
        const account = await client.api.accounts(config.accountSid).fetch();
        
        return NextResponse.json({ 
          success: true, 
          message: 'Twilio connection successful',
          accountName: account.friendlyName,
          status: account.status
        });
      } catch (error) {
        console.error('Twilio connection test failed:', error);
        return NextResponse.json(
          { 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error',
            details: 'Check your Twilio credentials in environment variables'
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}