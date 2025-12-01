import { NextResponse } from 'next/server';
import { fetchEstates } from '@/lib/whise-api';

interface WhisePicture {
  id: number;
  urlLarge: string;
  urlSmall: string;
  urlXXL: string;
  order: number;
}

interface WhiseEstate {
  id: number;
  name: string;
  address: string;
  city: string;
  zip: string;
  price: number;
  rooms: number;
  bathRooms: number;
  area: number;
  pictures?: WhisePicture[];
  purpose?: { id: number };
  displayStatusId?: number;
}

interface TransformedProperty {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: 'sale' | 'rent';
  featured: boolean;
}

function getFirstImageUrl(pictures?: WhisePicture[]): string {
  if (!pictures || pictures.length === 0) {
    return '/properties/immage1.jpeg';
  }
  const sorted = [...pictures].sort((a, b) => a.order - b.order);
  return sorted[0].urlLarge || sorted[0].urlXXL || '/properties/immage1.jpeg';
}

function transformEstate(estate: WhiseEstate): TransformedProperty {
  return {
    id: String(estate.id),
    title: estate.name || 'Untitled Property',
    location: estate.city ? `${estate.zip} ${estate.city}` : estate.address || 'Unknown Location',
    price: estate.price || 0,
    bedrooms: estate.rooms || 0,
    bathrooms: estate.bathRooms || 0,
    area: estate.area || 0,
    image: getFirstImageUrl(estate.pictures),
    type: estate.purpose?.id === 2 ? 'rent' : 'sale',
    featured: estate.displayStatusId === 1,
  };
}

export async function GET() {
  try {
    const data = await fetchEstates();
    const estates = data.estates || [];
    const properties = estates.map(transformEstate);
    
    return NextResponse.json({ properties });
  } catch (error) {
    console.error('API route error:', error);
    
    const message = error instanceof Error ? error.message : 'Failed to fetch estates';
    
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
