import { NextResponse } from 'next/server';
import { serviceFactory } from '../lib/services/factory';

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
