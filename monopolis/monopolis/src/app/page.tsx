'use client';

import React from 'react';
import Hero from '@/components/hero/hero';
import Footer from '@/components/footer/footer';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: 'sale' | 'rent';
  featured?: boolean;
}

const HomeContent: React.FC = () => {
  const properties: Property[] = [
    {
      id: '1',
      title: 'Modern Apartment in Downtown',
      location: 'Brussels, Belgium',
      price: 350000,
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      image: '/header/image1.jpeg',
      type: 'sale',
      featured: true,
    },
    {
      id: '2',
      title: 'Luxury Villa with Sea View',
      location: 'Antwerp, Belgium',
      price: 1200000,
      bedrooms: 5,
      bathrooms: 4,
      area: 320,
      image: '/header/image2.jpeg',
      type: 'sale',
      featured: true,
    },
    {
      id: '3',
      title: 'Cozy Studio in City Center',
      location: 'Ghent, Belgium',
      price: 180000,
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      image: '/header/image1.jpeg',
      type: 'sale',
      featured: true,
    },
    {
      id: '4',
      title: 'Modern Duplex with View',
      location: 'Brussels, Belgium',
      price: 780000,
      bedrooms: 3,
      bathrooms: 2,
      area: 145,
      image: '/header/image1.1.jpg',
      type: 'sale',
      featured: true
    },
    {
      id: '5',
      title: 'Luxury Penthouse',
      location: 'Antwerp, Belgium',
      price: 1950000,
      bedrooms: 4,
      bathrooms: 3,
      area: 210,
      image: '/header/image2.jpeg',
      type: 'sale',
      featured: true
    },
    {
      id: '6',
      title: 'Charming Studio',
      location: 'Ghent, Belgium',
      price: 850,
      bedrooms: 1,
      bathrooms: 1,
      area: 38,
      image: '/header/image3.jpeg',
      type: 'rent',
      featured: true
    }
  ];

  // Filter featured properties
  const featuredProperties = properties.filter(property => property.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main>
        {/* Featured Properties */}
        <section className="py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full mb-4">
                Premium Listings
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Featured Properties</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover our exclusive selection of premium properties in the most sought-after locations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <div 
                  key={property.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {property.location}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Bedrooms</p>
                        <p className="font-medium">{property.bedrooms}</p>
                      </div>
                      <div className="border-l border-r border-gray-100">
                        <p className="text-sm text-gray-500">Bathrooms</p>
                        <p className="font-medium">{property.bathrooms}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Area</p>
                        <p className="font-medium">{property.area} m²</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-2xl font-bold text-gray-900">
                        €{property.price.toLocaleString()}
                      </span>
                      <button className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Main page component
export default function Home() {
  return <HomeContent />;
}
