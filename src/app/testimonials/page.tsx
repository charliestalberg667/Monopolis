import React from 'react';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Michael & Sarah Johnson',
    role: 'Home Buyers',
    content: 'Working with Monopolis was an absolute pleasure. Their team guided us through every step of buying our first home. Their knowledge of the local market saved us thousands.',
    rating: 5,
    date: 'March 2024',
    image: '/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Real Estate Investor',
    content: 'As an investor, I need an agent who understands the numbers and the market. The Monopolis team delivered exceptional service and helped me identify properties with excellent ROI potential.',
    rating: 5,
    date: 'February 2024',
    image: '/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Home Seller',
    content: 'Sold my condo for 15% above asking price in just 3 days! The marketing strategy and professional staging made all the difference. Highly recommend their services.',
    rating: 5,
    date: 'January 2024',
    image: '/testimonial-3.jpg'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'First-time Home Buyer',
    content: 'The team was patient and never pressured me into making a decision. They took the time to understand what I was looking for and found me the perfect home within my budget.',
    rating: 5,
    date: 'December 2023',
    image: '/testimonial-4.jpg'
  },
  {
    id: 5,
    name: 'The Thompson Family',
    role: 'Relocating Family',
    content: 'Moving to a new city was stressful, but Monopolis made finding our new home a breeze. Their knowledge of school districts and neighborhoods was invaluable.',
    rating: 5,
    date: 'November 2023',
    image: '/testimonial-5.jpg'
  },
  {
    id: 6,
    name: 'Lisa Wong',
    role: 'Luxury Home Buyer',
    content: 'Exceptional service for high-end properties. Their network and discretion were exactly what we needed for our luxury home purchase. The entire process was seamless.',
    rating: 5,
    date: 'October 2023',
    image: '/testimonial-6.jpg'
  }
];

const TestimonialsPage = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with Monopolis
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in the relationships we build and the service we provide. Here's what some of our clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <FiMessageSquare className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{testimonial.date}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-6">
                  <p className="text-lg">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 overflow-hidden">
                      <div className="text-2xl font-bold text-gray-500">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-green-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our clients share their experiences working with Monopolis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-green-600 rounded-full p-4 inline-block mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Client Testimonial {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-green-700 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to share your experience?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your experience working with Monopolis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Leave a Review
            </button>
            <button className="bg-transparent hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg border border-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
