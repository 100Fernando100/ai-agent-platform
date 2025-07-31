cd C:\Users\ferna\OneDrive\Attachments\Desktop\ai-agent-platform

# Create Airtable Records Route
@'
import { NextResponse } from 'next/server';
import { serviceFactory } from '@/lib/services/factory';

// GET records
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const baseId = searchParams.get('baseId');
    const tableId = searchParams.get('tableId');
    
    const airtableService = serviceFactory.getAirtableService();
    const records = await airtableService.getRecords(baseId, tableId);
    
    return NextResponse.json({ 
      success: true, 
      records,
      demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
    });
  } catch (error) {
    console.error('Airtable error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch records', details: error.message },
      { status: 500 }
    );
  }
}

// POST new record
export async function POST(request) {
  try {
    const { baseId, tableId, fields } = await request.json();
    
    const airtableService = serviceFactory.getAirtableService();
    const record = await airtableService.createRecord(baseId, tableId, fields);
    
    return NextResponse.json({ 
      success: true, 
      record,
      demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
    });
  } catch (error) {
    console.error('Airtable error:', error);
    return NextResponse.json(
      { error: 'Failed to create record', details: error.message },
      { status: 500 }
    );
  }
}
'@ | Out-File -FilePath "app\api\airtable\records\route.js" -Encoding UTF8

# Create HeyGen Avatar Route
@'
import { NextResponse } from 'next/server';
import { serviceFactory } from '@/lib/services/factory';

export async function POST(request) {
  try {
    const { text, avatarId, voice } = await request.json();
    
    const heygenService = serviceFactory.getHeyGenService();
    const avatar = await heygenService.createAvatar({
      text,
      avatarId,
      voice
    });
    
    return NextResponse.json({ 
      success: true, 
      avatar,
      demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
    });
  } catch (error) {
    console.error('HeyGen error:', error);
    return NextResponse.json(
      { error: 'Failed to create avatar', details: error.message },
      { status: 500 }
    );
  }
}
'@ | Out-File -FilePath "app\api\heygen\avatar\route.js" -Encoding UTF8

# Create SendGrid Email Route
@'
import { NextResponse } from 'next/server';
import { serviceFactory } from '@/lib/services/factory';

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
'@ | Out-File -FilePath "app\api\sendgrid\email\route.js" -Encoding UTF8

# Create VAPI Assistant Route
@'
import { NextResponse } from 'next/server';
import { serviceFactory } from '@/lib/services/factory';

export async function POST(request) {
  try {
    const { phoneNumber, assistantId, metadata } = await request.json();
    
    const vapiService = serviceFactory.getVAPIService();
    const call = await vapiService.createPhoneCall({
      phoneNumber,
      assistantId,
      metadata
    });
    
    return NextResponse.json({ 
      success: true, 
      call,
      demoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
    });
  } catch (error) {
    console.error('VAPI error:', error);
    return NextResponse.json(
      { error: 'Failed to create call', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const callId = searchParams.get('callId');
    
    const vapiService = serviceFactory.getVAPIService();
    
    if (callId) {
      const call = await vapiService.getCall(callId);
      return NextResponse.json({ success: true, call });
    } else {
      const assistants = await vapiService.listAssistants();
      return NextResponse.json({ success: true, assistants });
    }
  } catch (error) {
    console.error('VAPI error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data', details: error.message },
      { status: 500 }
    );
  }
}
'@ | Out-File -FilePath "app\api\vapi\assistant\route.js" -Encoding UTF8

Write-Host "✅ All route files created successfully!" -ForegroundColor Green