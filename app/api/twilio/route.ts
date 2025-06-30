import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();
    
    if (action === 'test-connection') {
      // Get environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log('AccountSid exists:', !!accountSid);
console.log('AuthToken exists:', !!authToken);
console.log('Environment variables:', Object.keys(process.env).filter(key => key.includes('TWILIO')));
      
      if (!accountSid || !authToken) {
        return NextResponse.json(
          { success: false, error: 'Twilio credentials not configured' },
          { status: 400 }
        );
      }
      
      // Test connection by fetching account info
      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}.json`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
          },
        }
      );
      
      if (response.ok) {
        const accountData = await response.json();
        return NextResponse.json({
          success: true,
          message: 'Connected to Twilio successfully!',
          accountName: accountData.friendly_name,
          status: accountData.status
        });
      } else {
        return NextResponse.json(
          { success: false, error: 'Invalid Twilio credentials' },
          { status: 401 }
        );
      }
    }
    
    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );
    
  } catch (error) {
    console.error('Twilio API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}