'use client';

import React, { useState } from 'react';
import PropertyCard from '../../components/propertyCard/propertyCard';
import FilterBar from '../../components/properties/FilterBar';

// Mock data - replace with your actual data fetching logic
const properties = [
  {
    id: '1',
    title: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: '/properties/property1.jpg',
    type: 'sale' as const,
    featured: true
  },
  {
    id: '2',
    title: 'Modern Apartment',
    location: 'Manhattan, NY',
    price: 3200,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: '/properties/property2.jpg',
    type: 'rent' as const
  },
  // Add more properties as needed
];

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilterChange = (filters: any) => {
    let result = [...properties];
    
    if (filters.propertyType && filters.propertyType !== 'all') {
      result = result.filter(property => 
        property.title.toLowerCase().includes(filters.propertyType.toLowerCase()) ||
        property.type === filters.propertyType
      );
    }
    
    if (filters.priceRange && filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(property => {
        if (filters.priceRange.endsWith('+')) {
          return property.price >= min;
        }
        return property.price >= min && property.price <= max;
      });
    }
    
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      const minBedrooms = parseInt(filters.bedrooms);
      result = result.filter(property => property.bedrooms >= minBedrooms);
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(property => 
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.type.includes(searchTerm)
      );
    }
    
    setFilteredProperties(result);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Properties</h1>
          <p className="text-lg text-gray-600">Discover your dream property from our curated selection</p>
        </div>
        
        <FilterBar onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;
