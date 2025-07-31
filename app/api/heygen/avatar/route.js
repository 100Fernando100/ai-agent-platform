import { NextResponse } from 'next/server';
import { serviceFactory } from '../lib/services/factory';

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
