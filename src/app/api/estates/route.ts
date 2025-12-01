import { NextResponse } from 'next/server';
import { fetchEstates } from '@/lib/whise-api';

export async function GET() {
  try {
    const estates = await fetchEstates();
    return NextResponse.json(estates);
  } catch (error) {
    console.error('API route error:', error);
    
    const message = error instanceof Error ? error.message : 'Failed to fetch estates';
    
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
