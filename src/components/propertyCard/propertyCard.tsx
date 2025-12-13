"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiLayers, FiImage } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";
import { useTranslation } from "react-i18next";

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
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  type,
  
}) => {
  const { t } = useTranslation();

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
      currencyDisplay: "narrowSymbol",
    }).format(value);
  };

  return (
    <Link href={`/property/${id}`} className="card-link block">
      <article className="group flex flex-col w-full sm:w-[320px] lg:w-[350px] xl:w-[380px] bg-[#f8fafc] rounded-sm overflow-hidden mx-2 sm:mx-3 cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
        {image && !image.includes('placeholder') ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-gray-400">
            <FiImage className="w-12 h-12 mb-2" />
            <span className="text-sm">No image available</span>
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
            <span className="text-sm font-normal text-gray-600">/{t('common.month')}</span>
          )}
        </div>
        
        <div className="mt-auto flex gap-4 text-sm text-gray-600 pt-3 border-t border-gray-100">
          {bedrooms > 0 && (
            <div className="flex items-center">
              <FaBed className="mr-1" aria-hidden="true" />
              <span>{bedrooms}</span>
            </div>
          )}
          {bathrooms > 0 && (
            <div className="flex items-center">
              <FaBath className="mr-1" aria-hidden="true" />
              <span>{bathrooms}</span>
            </div>
          )}
          <div className="flex items-center">
            <FiLayers className="mr-1" aria-hidden="true" />
            <span>{area} m²</span>
          </div>
        </div>
      </div>
      </article>
    </Link>
  );
};

export default PropertyCard;