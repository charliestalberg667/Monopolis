import { NextResponse } from 'next/server';
import { fetchEstates, getValidClientToken } from '@/lib/whise-api';

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
  pictures?: Array<{
    urlLarge: string;
    urlSmall: string;
    urlXXL: string;
    order: number;
  }>;
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
    pictures: estate.pictures ? estate.pictures.map(pic => ({
      urlLarge: pic.urlLarge,
      urlSmall: pic.urlSmall,
      urlXXL: pic.urlXXL,
      order: pic.order,
    })) : undefined,
  };
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limitParam = url.searchParams.get('limit');
    const target = Math.max(1, Math.min(50, Number(limitParam) || 8));
    let estates: WhiseEstate[] = [];

    // Try direct Whise call using LIMIT/OFFSET as query parameters
    try {
      const bearer = await getValidClientToken();
      const directUrl = `https://api.whise.eu/v1/estates/list?limit=${target}&offset=0`;
      const resp = await fetch(directUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${bearer}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      if (resp.ok) {
        const json = await resp.json();
        estates = (json?.estates || []).slice(0, target);
      }
    } catch {}

    // Fallback to wrapper call without params
    if (!estates.length) {
      const data = await fetchEstates();
      estates = (data?.estates || []).slice(0, target);
    }

    const properties = estates.map(transformEstate);
    return NextResponse.json({ properties });
  } catch (error) {
    console.error('API route error:', error);
    const message = error instanceof Error ? error.message : 'Failed to fetch estates';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
