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

export async function GET(_request: Request) {
  try {
    const pageSize = 50; // Fetch 50 properties at a time
    let allEstates: WhiseEstate[] = [];
    let offset = 0;
    let hasMore = true;

    // Try direct Whise call using LIMIT/OFFSET as query parameters
    try {
      const bearer = await getValidClientToken();

      // Loop through all pages until we get all properties
      while (hasMore) {
        const directUrl = `https://api.whise.eu/v1/estates/list?limit=${pageSize}&offset=${offset}`;

        const resp = await fetch(directUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${bearer}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        if (!resp.ok) {
          console.error('Whise direct fetch failed with status', resp.status);
          // Stop trying direct fetch on HTTP error and fall back to wrapper
          break;
        }

        const json = await resp.json();
        const pageEstates: WhiseEstate[] = (json?.estates || []);

        if (pageEstates.length === 0) {
          // No more estates
          hasMore = false;
          break;
        }

        allEstates.push(...pageEstates);
        offset += pageSize;

        // If we got fewer properties than pageSize, we've reached the end
        if (pageEstates.length < pageSize) {
          hasMore = false;
        }
      }
    } catch (err) {
      console.error('Direct Whise fetch failed:', err);
    }

    // Fallback to wrapper call without params
    if (!allEstates.length) {
      const data = await fetchEstates();
      allEstates = (data?.estates || [])
    }

    const properties = allEstates.map(transformEstate);
    return NextResponse.json({ properties });
  } catch (error) {
    console.error('API route error:', error);
    const message = error instanceof Error ? error.message : 'Failed to fetch estates';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
