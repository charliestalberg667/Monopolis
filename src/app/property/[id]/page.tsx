"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FiArrowLeft, FiMapPin, FiImage } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

// Default placeholder component
const ImagePlaceholder = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
    <FiImage className="w-16 h-16 mb-2" />
    <span className="text-sm">No image available</span>
  </div>
);

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: "sale" | "rent";
  pictures?: Array<{
    urlLarge: string;
    urlSmall: string;
    urlXXL: string;
    order: number;
  }>;
}

export default function PropertyDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { t } = useTranslation();

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/estates", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load property");
        const data = await res.json();
        const properties = (data?.properties || []) as Property[];
        const found = properties.find((p) => p.id === id);
        if (!found) {
          throw new Error("Property not found");
        }
        setProperty(found);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load property");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProperty();
    }
  }, [id]);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      currencyDisplay: "narrowSymbol",
    }).format(value);
  };

  if (loading) {
    return (
      <main className="min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="h-10 bg-gray-200 rounded w-2/3"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !property) {
    return (
      <main className="min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/properties"
            className="inline-flex items-center text-[#048542] hover:text-[#036b33] transition-colors mb-6"
          >
            <FiArrowLeft className="mr-2" />
            {t('property.backToProperties')}
          </Link>
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">
              {error || "Property not found"}
            </p>
            <Link
              href="/properties"
              className="inline-block px-6 py-3 bg-[#048542] text-white rounded-md hover:bg-[#036b33] transition-colors"
            >
              {t('property.viewAllProperties')}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Check if the image is a placeholder or invalid
  const isValidImage = (url: string) => {
    if (!url) return false;
    // Check for common placeholder patterns or the specific problematic image
    const placeholderPatterns = ['placeholder', 'ipublic/images/placeholder-property.jpg'];
    return !placeholderPatterns.some(pattern => url.includes(pattern));
  };

  // Get all valid images
  const validPictures = property.pictures?.filter(pic => 
    isValidImage(pic.urlLarge) || isValidImage(pic.urlXXL)
  ) || [];

  // Get all available images, filtering out placeholders
  const images = validPictures.length > 0
    ? validPictures
        .sort((a, b) => a.order - b.order)
        .map(pic => isValidImage(pic.urlLarge) ? pic.urlLarge : pic.urlXXL)
    : [];

  // If no valid images, use the main property image if it's valid
  if (images.length === 0 && property.image && isValidImage(property.image)) {
    images.push(property.image);
  }

  const hasImages = images.length > 0;
  const currentImage = hasImages ? images[selectedImageIndex] : '';

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/properties"
          className="inline-flex items-center text-[#048542] hover:text-[#036b33] transition-colors mb-8"
        >
          <FiArrowLeft className="mr-2" />
          {t('property.backToProperties')}
        </Link>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
              {hasImages && currentImage ? (
                <Image
                  src={currentImage}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <ImagePlaceholder />
              )}
            </div>

            {/* Thumbnail Gallery */}
            {hasImages && images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden transition-all ${
                      selectedImageIndex === idx
                        ? "ring-2 ring-[#048542]"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {isValidImage(img) ? (
                      <Image
                        src={img}
                        alt={`${property.title} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <FiImage className="text-gray-400" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Price and Quick Info */}
          <div className="bg-[#f8fafc] p-6 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {property.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-4">
              <FiMapPin className="mr-2" />
              <span>{property.location}</span>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="text-3xl font-bold mb-2">
                {formatPrice(property.price)}
              </div>
              {property.type === "rent" && (
                <span className="text-sm text-gray-600">per month</span>
              )}
              <div className="inline-block mt-3 px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
                {property.type === "sale" ? "For Sale" : "For Rent"}
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-md">
                <FaBed className="mx-auto mb-2 text-[#048542]" />
                <div className="text-lg font-semibold">{property.bedrooms}</div>
                <div className="text-xs text-gray-600">{t('property.bedrooms')}</div>
              </div>
              <div className="text-center p-3 bg-white rounded-md">
                <FaBath className="mx-auto mb-2 text-[#048542]" />
                <div className="text-lg font-semibold">{property.bathrooms}</div>
                <div className="text-xs text-gray-600">{t('property.bathrooms')}</div>
              </div>
              <div className="text-center p-3 bg-white rounded-md">
                <FaRulerCombined className="mx-auto mb-2 text-[#048542]" />
                <div className="text-lg font-semibold">{property.area}</div>
                <div className="text-xs text-gray-600">{t('property.sqm')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t('property.propertyDetails')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f8fafc] p-8 rounded-lg">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 md:pr-6 pb-6 md:pb-0">
              <h3 className="text-lg font-semibold mb-4">{t('property.quickFacts')}</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-gray-600">{t('property.propertyType')}</dt>
                  <dd className="font-medium">
                    {property.type === "sale" ? t('property.forSale') : t('property.forRent')}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600">{t('property.location')}</dt>
                  <dd className="font-medium">{property.location}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600">{t('property.price')}</dt>
                  <dd className="font-medium">{formatPrice(property.price)}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">{t('property.specifications')}</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-gray-600">{t('property.bedrooms')}</dt>
                  <dd className="font-medium">{property.bedrooms}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600">{t('property.bathrooms')}</dt>
                  <dd className="font-medium">{property.bathrooms}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-600">{t('property.totalArea')}</dt>
                  <dd className="font-medium">{property.area} {t('property.sqm')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t('property.exactLocation')}</h2>
          {property.location ? (
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&z=15&t=k&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label={property.location}
              />
            </div>
          ) : (
            <p className="text-sm text-gray-600">{t('property.location')}</p>
          )}
        </section>

        {/* Contact Section */}
        <section className="bg-[#048542] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">{t('property.interested')}</h2>
          <p className="mb-6 text-green-50">
            {t('property.contactPrompt')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 btn-contact font-semibold rounded-md hover:shadow-md transition-colors"
          >
            {t('property.contactUs')}
          </Link>
        </section>
      </div>
    </main>
  );
}
