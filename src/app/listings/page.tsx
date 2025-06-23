import React from 'react';
import { FiHome, FiMapPin, FiFilter, FiSearch, FiHeart } from 'react-icons/fi';

const ListingsPage = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Loft',
      price: 750000,
      address: '123 Main St, Downtown',
      beds: 2,
      baths: 2,
      sqft: 1450,
      type: 'condo',
      featured: true,
      image: '/placeholder-property.jpg'
    },
    {
      id: 2,
      title: 'Luxury Waterfront Villa',
      price: 2500000,
      address: '456 Ocean View Dr',
      beds: 5,
      baths: 4.5,
      sqft: 4200,
      type: 'house',
      featured: true,
      image: '/placeholder-property.jpg'
    },
    {
      id: 3,
      title: 'Cozy Suburban Home',
      price: 525000,
      address: '789 Oak Lane',
      beds: 3,
      baths: 2,
      sqft: 1850,
      type: 'house',
      featured: false,
      image: '/placeholder-property.jpg'
    },
    {
      id: 4,
      title: 'Downtown Penthouse',
      price: 1200000,
      address: '101 Skyline Blvd',
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      type: 'condo',
      featured: true,
      image: '/placeholder-property.jpg'
    },
    {
      id: 5,
      title: 'Garden Apartment',
      price: 395000,
      address: '234 Park Ave',
      beds: 1,
      baths: 1,
      sqft: 850,
      type: 'apartment',
      featured: false,
      image: '/placeholder-property.jpg'
    },
    {
      id: 6,
      title: 'Mountain View Estate',
      price: 3200000,
      address: '555 Summit Rd',
      beds: 6,
      baths: 5.5,
      sqft: 5800,
      type: 'estate',
      featured: true,
      image: '/placeholder-property.jpg'
    }
  ];

  const propertyTypes = [
    { id: 'all', label: 'All Properties' },
    { id: 'house', label: 'Houses' },
    { id: 'condo', label: 'Condos' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'estate', label: 'Estates' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Listings</h1>
          <p className="text-lg text-gray-600">Browse our exclusive selection of premium properties</p>
        </div>
        
        {/* Property Type Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap ${
                  type.id === 'all' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Search by location, address, or ZIP"
                />
              </div>
            </div>
            <div>
              <select className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-lg">
                <option>Price Range</option>
                <option>Under $500,000</option>
                <option>$500,000 - $1,000,000</option>
                <option>$1,000,000 - $2,000,000</option>
                <option>Over $2,000,000</option>
              </select>
            </div>
            <div>
              <select className="block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-lg">
                <option>Beds & Baths</option>
                <option>1+ Bed</option>
                <option>2+ Beds</option>
                <option>3+ Beds</option>
                <option>4+ Beds</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {properties.length} properties found
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-500">Sort by:</span>
              <select className="border-0 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-md">
                <option>Most Recent</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Square Feet</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="relative h-56 bg-gray-200">
                {/* Property image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <FiHome className="h-12 w-12" />
                </div>
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-red-500">
                  <FiHeart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{property.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <FiMapPin className="h-4 w-4 mr-1" />
                      <span>{property.address}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-green-600">${property.price.toLocaleString()}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-sm text-gray-500">
                  <div>
                    <div className="font-medium text-gray-900">{property.beds}</div>
                    <div>Beds</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{property.baths}</div>
                    <div>Baths</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{property.sqft.toLocaleString()}</div>
                    <div>Sq Ft</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border rounded-l-lg border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border-t border-b border-gray-300 bg-white text-green-600 font-medium">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              3
            </button>
            <span className="px-2 py-2 text-gray-700">...</span>
            <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              10
            </button>
            <button className="px-4 py-2 border rounded-r-lg border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
