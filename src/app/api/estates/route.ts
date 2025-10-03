import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type EstatePicture = {
  urlLarge?: string;
  url?: string;
};

type WhiseEstate = {
  id: number;
  name?: string;
  city?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  livingArea?: number;
  pictures?: EstatePicture[];
  purposeId?: number; // 1 = sale, 2 = rent (example per docs)
};

function mapEstateToCard(estate: WhiseEstate) {
  const firstImage = estate.pictures?.[0]?.urlLarge || estate.pictures?.[0]?.url || '/properties/immage1.jpeg';
  const type = estate.purposeId === 2 ? 'rent' : 'sale';
  return {
    id: String(estate.id),
    title: estate.name || 'Untitled',
    location: estate.city || 'Belgium',
    price: typeof estate.price === 'number' ? estate.price : 0,
    bedrooms: estate.bedrooms ?? 0,
    bathrooms: estate.bathrooms ?? 0,
    area: estate.livingArea ?? 0,
    image: firstImage,
    type,
    featured: false,
  };
}

export async function GET() {
  try {
    // Lazy import to avoid ESM/CJS issues on edge
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const WhiseClient = require('whise-api-client');

    const username = process.env.WHISE_USERNAME;
    const password = process.env.WHISE_PASSWORD;
    const clientId = process.env.WHISE_CLIENT_ID ? Number(process.env.WHISE_CLIENT_ID) : undefined;
    const officeId = process.env.WHISE_OFFICE_ID ? Number(process.env.WHISE_OFFICE_ID) : undefined;

    if (!username || !password) {
      return NextResponse.json({ error: 'Missing WHISE credentials' }, { status: 500 });
    }

    const whise = new WhiseClient({ username, password });

    if (clientId && officeId) {
      await whise.setClient(clientId, officeId);
    }

    const estatesResp = await whise.estates.list({
      Page: { Limit: 30, Offset: 0 },
      Filter: {
        ShowDetails: true,
        ShowRepresentatives: false,
        WithRefDescriptions: true,
      },
      Sort: [
        { Field: 'price', Ascending: true },
      ],
    });

    const estates: WhiseEstate[] = estatesResp?.estates || [];
    const mapped = estates.map(mapEstateToCard);
    return NextResponse.json({ totalCount: estatesResp?.totalCount ?? mapped.length, estates: mapped }, { status: 200 });
  } catch (error) {
    console.error('Whise estates error', error);
    return NextResponse.json({ error: 'Failed to fetch estates' }, { status: 500 });
  }
}



