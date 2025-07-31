import { NextResponse } from 'next/server';
import { serviceFactory } from '../lib/services/factory';

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
