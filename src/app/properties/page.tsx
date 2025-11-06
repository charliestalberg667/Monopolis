"use client";

import React, { useEffect, useMemo, useState } from "react";
import PropertyCard from "@/components/propertyCard/propertyCard";

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: "sale" | "rent";
  featured?: boolean;
};

const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Elegant Townhouse in Ixelles",
    location: "Ixelles, Brussels",
    price: 795000,
    bedrooms: 4,
    bathrooms: 2,
    area: 210,
    image: "/properties/immage1.jpeg",
    type: "sale",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Apartment near EU Quarter",
    location: "European Quarter, Brussels",
    price: 1850,
    bedrooms: 2,
    bathrooms: 1,
    area: 92,
    image: "/header/image1.jpg",
    type: "rent",
  },
  {
    id: "3",
    title: "Spacious Family Home",
    location: "Uccle, Brussels",
    price: 1245000,
    bedrooms: 5,
    bathrooms: 3,
    area: 320,
    image: "/header/image2.jpeg",
    type: "sale",
  },
  {
    id: "4",
    title: "City Loft with Skyline Views",
    location: "Antwerp Center",
    price: 1450,
    bedrooms: 1,
    bathrooms: 1,
    area: 68,
    image: "/header/image3.jpeg",
    type: "rent",
  },
];

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<"all" | "sale" | "rent">("all");
  const [bedrooms, setBedrooms] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000000);

  const [loaded, setLoaded] = useState<Property[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('/api/estates', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load estates');
        const data = await res.json();
        const estates = (data?.estates || []) as Property[];
        if (estates.length) setLoaded(estates);
      } catch {
        setError('Could not load live estates. Showing sample listings.');
      } finally {
        setLoading(false);
      }
    };
    fetchEstates();
  }, []);

  const properties = loaded ?? MOCK_PROPERTIES;

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== "all" && p.type !== type) return false;
      if (bedrooms && p.bedrooms < Number(bedrooms)) return false;
      if (location && !p.location.toLowerCase().includes(location.toLowerCase())) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      const price = p.price;
      if (p.type === "rent") {
        // Treat rental monthly prices on the same scale; keep numeric filter
      }
      if (price < minPrice || price > maxPrice) return false;
      return true;
    });
  }, [properties, type, bedrooms, location, search, minPrice, maxPrice]);

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Properties</h1>
          <p className="mt-3 text-gray-600">Browse our latest listings across Belgium.</p>
        </header>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-900 mb-1">Search</label>
              <input
                id="search"
                type="text"
                placeholder="e.g. townhouse, loft, villa"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-900 mb-1">Type</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value as "all" | "sale" | "rent")}
                className="border border-[#048542] rounded-md px-3 py-2 bg-white"
              >
                <option value="all">All</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>

            <div>
              <label htmlFor="beds" className="block text-sm font-medium text-gray-900 mb-1">Bedrooms</label>
              <select
                id="beds"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="border border-[#048542] rounded-md px-3 py-2 bg-white"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="loc" className="block text-sm font-medium text-gray-900 mb-1">Location</label>
              <input
                id="loc"
                type="text"
                placeholder="City, area, or region"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Price range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value || 0))}
                  placeholder="Min"
                  className="w-32"
                />
                <span className="text-gray-500">–</span>
                <input
                  type="number"
                  min={0}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value || 0))}
                  placeholder="Max"
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section>
          {loading && (
            <p className="text-gray-600">Loading listings…</p>
          )}
          {error && (
            <p className="text-sm text-red-600 mb-4">{error}</p>
          )}
          {filtered.length === 0 ? (
            <p className="text-gray-600">No properties match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((p) => (
                <PropertyCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  location={p.location}
                  price={p.price}
                  bedrooms={p.bedrooms}
                  bathrooms={p.bathrooms}
                  area={p.area}
                  image={p.image}
                  type={p.type}
                  featured={p.featured}
                />)
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

