'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/languageProvider/languageProvider';
import Hero from '@/components/hero/hero';
import PropertyCard from '@/components/propertyCard/propertyCard';
import Footer from '@/components/footer/footer';
import { FiArrowRight, FiStar, FiHome, FiDollarSign, FiKey } from 'react-icons/fi';

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

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const HomeContent = () => {
  // Favorites functionality will be implemented in a future update
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  // Gallery images will be used in a future update
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const galleryImages = [
    '/header/image1.1.jpg',
    '/header/image1.jpg',
    '/header/image2.1.jpg',
    '/header/image2.jpeg',
    '/header/image3.1.jpg',
    '/header/image3.jpeg'
  ];

  const properties: Property[] = [
    {
      id: '1',
      title: 'Modern Apartment in Brussels',
      location: 'Brussels, Belgium',
      price: 350000,
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      image: '/header/image1.jpg',
      type: 'sale',
      featured: true
    },
    {
      id: '2',
      title: 'Luxury Villa with Pool',
      location: 'Antwerp, Belgium',
      price: 1250000,
      bedrooms: 5,
      bathrooms: 4,
      area: 185,
      image: '/header/image2.1.jpg',
      type: 'sale',
      featured: true
    },
    {
      id: '3',
      title: 'Cozy Studio in City Center',
      location: 'Ghent, Belgium',
      price: 1200,
      bedrooms: 1,
      bathrooms: 1,
      area: 45,
      image: '/header/image3.1.jpg',
      type: 'rent',
      featured: true
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

  const featuredProperties = properties.filter(property => property.featured);

  // Testimonials will be used in a future update
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'John Smith',
      role: 'Home Buyer',
      content: 'The team at Monopolis made the home buying process seamless and stress-free. Highly recommended!',
      rating: 5,
      avatar: '/profile1.jpeg',
    },
    {
      id: '2',
      name: 'Thomas Dubois',
      role: 'Property Investor',
      content: 'As an investor, I appreciate their market insights and professional approach. They helped me find properties with great potential.',
      rating: 5,
      avatar: '/avatars/avatar2.jpg'
    },
    {
      id: '3',
      name: 'Emma Janssens',
      role: 'First-time Buyer',
      content: 'The team guided me through every step of buying my first home. I couldn\'t be happier with their service and support.',
      rating: 5,
      avatar: '/avatars/avatar3.jpg'
    }
  ];

  const handleFavoriteToggle = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="w-full bg-[#f5f5f5] relative z-10">
      <Hero />

      {/* Featured Properties */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Properties</h2>
              <p className="text-gray-600 text-lg">Discover our exclusive selection of premium properties</p>
            </div>
            <a 
              href="#" 
              className="mt-4 md:mt-0 inline-flex items-center text-[#01863b] hover:text-[#00802a] font-medium transition-colors group text-lg"
            >
              View all properties
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard 
                key={property.id}
                {...property}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-20 bg-[#f5f5f5] px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar 
                      key={i} 
                      className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-20 bg-[#01863b] text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 text-white text-opacity-90 max-w-2xl mx-auto">
            Let us help you find the perfect property that matches your needs and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/properties" 
              className="bg-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              style={{ color: '#000' }}
            >
              Browse Properties
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest properties and market insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#01863b] focus:border-transparent"
            />
            <button 
              type="submit" 
              className="!bg-[#01863b] text-white px-6 py-3 rounded-md font-medium hover:bg-[#00802a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
