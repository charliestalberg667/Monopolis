import React from 'react';
import { FiHome, FiDollarSign, FiSearch, FiFileText, FiTool, FiUsers, FiLayers } from 'react-icons/fi';

const services = [
  {
    icon: <FiHome className="h-8 w-8 text-green-600" />,
    title: 'Property Sales',
    description: 'Comprehensive assistance with buying and selling residential and commercial properties.',
    features: [
      'Market analysis and pricing strategy',
      'Professional photography and marketing',
      'Negotiation and closing support'
    ]
  },
  {
    icon: <FiDollarSign className="h-8 w-8 text-blue-600" />,
    title: 'Investment Consulting',
    description: 'Expert advice for building and managing your real estate investment portfolio.',
    features: [
      'Market trend analysis',
      'ROI projections',
      'Risk assessment and mitigation'
    ]
  },
  {
    icon: <FiSearch className="h-8 w-8 text-purple-600" />,
    title: 'Property Search',
    description: 'Personalized property search based on your specific needs and preferences.',
    features: [
      'Customized property alerts',
      'Neighborhood analysis',
      'Virtual and in-person showings'
    ]
  },
  {
    icon: <FiFileText className="h-8 w-8 text-yellow-600" />,
    title: 'Legal & Documentation',
    description: 'Professional handling of all legal aspects and documentation for your transactions.',
    features: [
      'Contract preparation and review',
      'Title search and insurance',
      'Closing coordination'
    ]
  },
  {
    icon: <FiTool className="h-8 w-8 text-red-600" />,
    title: 'Property Management',
    description: 'Comprehensive property management services for rental properties.',
    features: [
      'Tenant screening and placement',
      'Rent collection',
      'Maintenance coordination'
    ]
  },
  {
    icon: <FiUsers className="h-8 w-8 text-indigo-600" />,
    title: 'Relocation Services',
    description: 'Smooth transition services for individuals and families moving to new locations.',
    features: [
      'Neighborhood orientation',
      'School district information',
      'Local service provider referrals'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of services is designed to cover every aspect of your real estate journey, 
            from finding your dream home to managing your investment properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="text-green-600 font-medium hover:text-green-700 flex items-center">
                  Learn more
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how we can assist you with your real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Get in Touch
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-lg border border-gray-300 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
