import React from 'react';
import { FiAward, FiUsers, FiHome, FiMapPin, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: '20+ years of real estate experience with a passion for connecting people with their dream properties.',
    image: '/team-1.jpg'
  },
  {
    name: 'Sarah Williams',
    role: 'Senior Agent',
    bio: 'Specializes in luxury properties and has helped over 200 families find their perfect homes.',
    image: '/team-2.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Investment Consultant',
    bio: 'Expert in real estate investments with a focus on maximizing returns for clients.',
    image: '/team-3.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    bio: 'Ensures all managed properties are well-maintained and tenants are satisfied.',
    image: '/team-4.jpg'
  }
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Properties Sold' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$1.2B+', label: 'Total Sales Volume' }
];

const values = [
  {
    title: 'Integrity',
    description: 'We conduct our business with the highest ethical standards and transparency.'
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service to exceed client expectations.'
  },
  {
    title: 'Innovation',
    description: 'We embrace innovative solutions to provide the best real estate experience.'
  },
  {
    title: 'Community',
    description: 'We are committed to building and supporting the communities we serve.'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Monopolis</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Your trusted partner in real estate, delivering exceptional service and expertise since 2008.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Founded in 2008, Monopolis began as a small real estate agency with a big vision: to transform the property buying and selling experience. 
                What started as a team of three passionate individuals has grown into one of the most respected real estate firms in the region.
              </p>
              <p>
                Our journey has been marked by consistent growth, but our core values have remained unchanged. We believe in building lasting relationships 
                with our clients, understanding their unique needs, and delivering results that exceed expectations.
              </p>
              <p>
                Today, with multiple offices and a team of dedicated professionals, we continue to set new standards in the real estate industry, 
                combining local expertise with innovative technology to serve you better.
              </p>
            </div>
          </div>
          <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <FiHome className="h-16 w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <FiCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals is dedicated to providing exceptional service and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <FiUsers className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your real estate goals.
          </p>
          <button className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
