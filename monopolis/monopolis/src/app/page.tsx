'use client';

import { useState } from 'react';
import { LanguageProvider } from '@/components/languageProvider/languageProvider';
import Hero from '@/components/hero/hero';
import PropertyCard from '@/components/propertyCard/propertyCard';
import Footer from '@/components/footer/footer';
import { FiArrowRight, FiStar, FiMapPin, FiHome, FiDollarSign, FiKey, FiMail, FiPhone, FiMap } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '@/components/languageProvider/languageProvider';
import styles from './page.module.css';

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
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const galleryImages = [
    '/header/image1.1.jpg',
    '/header/image1.jpg',
    '/header/image2.1.jpg',
    '/header/image2.jpeg',
    '/header/image3.1.jpg',
    '/header/image3.jpeg'
  ];

  const featuredProperties: Property[] = [
    {
      id: '1',
      title: 'Modern Apartment in Brussels',
      location: 'Brussels, Belgium',
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
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

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sophie Martin',
      role: 'Home Buyer',
      content: 'Monopolis made finding our dream home so easy. Their team was professional and attentive to our needs throughout the entire process.',
      rating: 5,
      avatar: '/avatars/avatar1.jpg'
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
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };
  
  const properties: Property[] = [
    {
      id: '1',
      title: 'Modern Villa in Uccle',
      location: 'Brussels, Belgium',
      price: 1250000,
      bedrooms: 5,
      bathrooms: 4,
      area: 285,
      image: '/properties/immage1.jpeg',
      type: 'sale',
      featured: true
    },
    {
      id: '2',
      title: 'Luxury Apartment',
      location: 'Antwerp, Belgium',
      price: 750000,
      bedrooms: 3,
      bathrooms: 2,
      area: 185,
      image: '/properties/luxury-apartment.jpg',
      type: 'sale'
    },
    {
      id: '3',
      title: 'Chalet with Garden',
      location: 'Spa, Belgium',
      price: 950000,
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      image: '/properties/chalet.jpg',
      type: 'sale'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Featured Properties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
              <p className="text-gray-600">Discover our exclusive selection of premium properties</p>
            </div>
            <a 
              href="#" 
              className="mt-4 md:mt-0 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              View all properties
              <FiArrowRight className="ml-2" />
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
      </section>

      {/* Services */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-medium mb-3">Our Services</h2>
            <p className="text-gray-500">Comprehensive real estate solutions tailored to your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="group text-center px-4">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors">
                <FiHome className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-3">Property Acquisition</h3>
              <p className="text-gray-500 text-sm">
                Discover exceptional properties that match your unique lifestyle and investment goals.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group text-center px-4">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors">
                <FiDollarSign className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-3">Valuation & Advisory</h3>
              <p className="text-gray-500 text-sm">
                Expert market analysis and valuation services for informed real estate decisions.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group text-center px-4">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors">
                <FiKey className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-3">Legal & Transaction</h3>
              <p className="text-gray-500 text-sm">
                Comprehensive legal support and transaction management for secure property acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-medium mb-3">What Our Clients Say</h2>
            <p className="text-gray-500">Hear from our satisfied clients about their experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="inline-block w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">
                "The team at Monopolis made our property search effortless. Their attention to detail and market knowledge is unmatched."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">John Smith</h4>
                  <p className="text-sm text-gray-500">Brussels, Belgium</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="inline-block w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">
                "Professional, responsive, and truly understand their clients' needs. Found us our dream home within a week!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  MS
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Marie Dubois</h4>
                  <p className="text-sm text-gray-500">Antwerp, Belgium</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="inline-block w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">
                "Exceptional service from start to finish. Their network and expertise in the luxury market are impressive."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  TL
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Thomas Laurent</h4>
                  <p className="text-sm text-gray-500">Ghent, Belgium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={`${styles.section} ${styles.newsletter}`}>
        <div className={styles.container}>
          <div className={styles['newsletter-content']}>
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest properties and market insights.</p>
            <form className={styles['newsletter-form']}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

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
