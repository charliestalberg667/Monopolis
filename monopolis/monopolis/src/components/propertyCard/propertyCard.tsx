"use client";

import React from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { useLanguage } from "../languageProvider/languageProvider";

interface PropertyCardProps {
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
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  type,
  featured = false,
}) => {
  const { t } = useLanguage();

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      currencyDisplay: "narrowSymbol",
    }).format(value);
  };

  return (
    <article className="group flex flex-col bg-white rounded-sm overflow-hidden transition-all duration-300">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMWYyIi8+PC9zdmc+"
        />
        
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-black text-white text-xs px-2 py-1 rounded-sm">
              {t('featured')}
            </span>
          </div>
        )}
        

      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg mb-1 font-medium transition-colors" title={title}>
          {title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <FiMapPin className="mr-1" aria-hidden="true" />
          <span className="truncate">{location}</span>
        </div>
        
        <div className="text-base font-medium mb-3">
          {formatPrice(price)}
          {type === 'rent' && (
            <span className="text-sm font-normal text-gray-600">/{t('month')}</span>
          )}
        </div>
        
        <div className="mt-auto flex gap-4 text-sm text-gray-600 pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <FaBed className="mr-1" aria-hidden="true" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1" aria-hidden="true" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1" aria-hidden="true" />
            <span>{area} m²</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;