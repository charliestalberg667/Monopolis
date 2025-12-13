"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
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
};

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
    const loadProperties = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/estates", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load estates");
        const data = await res.json();
        const properties = (data?.properties || []) as Property[];
        if (properties.length) setLoaded(properties);
      } catch {
        setError("Could not load live estates. Showing sample listings.");
      } finally {
        setLoading(false);
      }
    };
    loadProperties();
  }, []);

  const properties = useMemo(() => (loaded ?? []), [loaded]);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== "all" && p.type !== type) return false;
      if (bedrooms && p.bedrooms < Number(bedrooms)) return false;
      if (
        location &&
        !p.location.toLowerCase().includes(location.toLowerCase())
      )
        return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      const price = p.price;
      if (p.type === "rent") {
        // Treat rental monthly prices on the same scale; keep numeric filter
      }
      if (price < minPrice || price > maxPrice) return false;
      return true;
    });
  }, [properties, type, bedrooms, location, search, minPrice, maxPrice]);

  const { t } = useTranslation();

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t('properties.title')}
          </h1>
          <p className="mt-3 text-gray-600">
            {t('properties.subtitle')}
          </p>
        </header>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                {t('properties.search.label')}
              </label>
              <input
                id="search"
                type="text"
                placeholder={t('properties.search.placeholder')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-[#048542] focus:ring-1 focus:ring-[#048542]"
              />
            </div>

            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                {t('properties.filters.type')}
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) =>
                  setType(e.target.value as "all" | "sale" | "rent")
                }
                className="w-full h-10 border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-[#048542] focus:ring-1 focus:ring-[#048542]"
              >
                <option value="all">{t('properties.types.all')}</option>
                <option value="sale">{t('properties.types.sale')}</option>
                <option value="rent">{t('properties.types.rent')}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="beds"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                {t('properties.filters.bedrooms')}
              </label>
              <select
                id="beds"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-[#048542] focus:ring-1 focus:ring-[#048542]"
              >
                <option value="">{t('properties.bedrooms.any')}</option>
                <option value="1">{t('properties.bedrooms.onePlus')}</option>
                <option value="2">{t('properties.bedrooms.twoPlus')}</option>
                <option value="3">{t('properties.bedrooms.threePlus')}</option>
                <option value="4">{t('properties.bedrooms.fourPlus')}</option>
              </select>
            </div>

            <div className="flex-1">
              <label
                htmlFor="loc"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                {t('properties.filters.location')}
              </label>
              <input
                id="loc"
                type="text"
                placeholder={t('properties.filters.locationPlaceholder')}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-[#048542] focus:ring-1 focus:ring-[#048542]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                {t('properties.filters.priceRange')}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value || 0))}
                  placeholder={t('common.min')}
                  className="w-32 border border-gray-300 rounded-md px-3 py-2 bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-[#048542] focus:ring-1 focus:ring-[#048542]"
                />
                <span className="text-gray-500">–</span>
                <input
                  type="number"
                  min={0}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value || 0))}
                  placeholder={t('common.max')}
                  className="w-32 border border-gray-300 rounded-md px-3 py-2 bg-white text-sm transition-colors hover:border-gray-400 focus:outline-none focus:border-[#048542] focus:ring-1 focus:ring-[#048542]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section>
          {loading && <p className="text-gray-600">{t('properties.results.loading')}</p>}
          {error && <p className="text-sm text-red-600 mb-4">{t('properties.results.error')}</p>}
          {filtered.length === 0 ? (
            <p className="text-gray-600">{t('properties.results.noMatches')}</p>
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
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
