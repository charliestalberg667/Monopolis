import React from 'react';
import { FiTrendingUp, FiBarChart2, FiDollarSign, FiHome, FiMapPin } from 'react-icons/fi';

const MarketReportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Market Report</h1>
          <p className="text-lg text-gray-600">Latest real estate market trends and analysis</p>
        </div>
        
        {/* Market Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center mb-6">
            <FiTrendingUp className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Market Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <FiDollarSign className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-500">Average Price</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">$750,000</p>
              <p className="text-sm text-green-600 flex items-center">
                <span>+5.2%</span>
                <span className="ml-1 text-gray-500">from last quarter</span>
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <FiHome className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-500">Properties Listed</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">1,245</p>
              <p className="text-sm text-green-600 flex items-center">
                <span>+12.7%</span>
                <span className="ml-1 text-gray-500">from last year</span>
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <FiMapPin className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-500">Average Days on Market</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">27 days</p>
              <p className="text-sm text-red-600 flex items-center">
                <span>-8.3%</span>
                <span className="ml-1 text-gray-500">from last quarter</span>
              </p>
            </div>
          </div>
          
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <FiBarChart2 className="h-12 w-12 mr-3" />
            <span>Market Trends Chart</span>
          </div>
        </div>
        
        {/* Neighborhood Analysis */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Neighborhood Analysis</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Neighborhood
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg. Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price/Sqft
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    YOY Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: 'Downtown', price: '$850,000', priceSqft: '$650', yoy: '+7.2%' },
                  { name: 'Riverside', price: '$720,000', priceSqft: '$580', yoy: '+5.8%' },
                  { name: 'Hillside', price: '$1,200,000', priceSqft: '$890', yoy: '+3.4%' },
                  { name: 'West End', price: '$650,000', priceSqft: '$520', yoy: '+6.1%' },
                  { name: 'North Park', price: '$780,000', priceSqft: '$610', yoy: '+8.3%' },
                ].map((area, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {area.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {area.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {area.priceSqft}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${area.yoy.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {area.yoy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Market Insights */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Market Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Strong Seller's Market</h3>
              <p className="text-gray-600">Low inventory and high demand continue to drive prices upward, with multiple offers becoming the norm for well-priced properties.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interest Rate Impact</h3>
              <p className="text-gray-600">Recent rate hikes have slightly cooled demand but remain historically low, keeping buyer interest strong in most price segments.</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Luxury Market Growth</h3>
              <p className="text-gray-600">The luxury segment is seeing increased activity, with properties over $2M experiencing faster sales and smaller price reductions.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Rental Market</h3>
              <p className="text-gray-600">Rental prices have stabilized but remain high, with vacancy rates at historic lows across all neighborhood types.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReportPage;
