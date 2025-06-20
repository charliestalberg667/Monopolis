'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiHome, FiMapPin, FiStar } from 'react-icons/fi';
import Hero from '@/components/hero/hero';
import PropertyCard from '@/components/propertyCard/propertyCard';
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

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
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

  // Commented out as not currently used
  // const featuredProperties: Property[] = properties.filter(property => property.featured);
  // const testimonialsData: Testimonial[] = [
  //   {
  //     id: '1',
  //     name: 'John Smith',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main>
        {/* Stats Section */}

        {/* Featured Properties */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-gray-200 bg-opacity-10 -z-10"></div>
        <div className="absolute -left-20 bottom-[-20px] w-64 h-64 rounded-full bg-gray-200 bg-opacity-10 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full mb-4">
              Premium Listings
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our exclusive selection of premium properties in the most sought-after locations</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {properties.slice(0, 3).map((property) => (
              <motion.div
                key={property.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-[#f8fafc] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-[#e2e8f0] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#01753f] bg-opacity-10 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with us.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                variants={item}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <div 
                      className="w-full h-full bg-gray-200" 
                      style={{
                        backgroundImage: `url(${testimonial.avatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      aria-label={testimonial.name}
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
                <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works - Minimalist Design */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-[#01753f] mb-4 tracking-wider">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              A Simple, Transparent Process
            </h2>
            <div className="w-20 h-0.5 bg-[#01753f] mx-auto mb-8"></div>
            <p className="text-gray-500 text-lg leading-relaxed">
              We've streamlined the property search into three clear, manageable steps
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                step: '01',
                icon: <FiSearch className="w-6 h-6" />,
                title: 'Find Your Property',
                description: 'Browse our curated selection of premium properties that match your criteria and preferences.',
                details: [
                  'Personalized recommendations',
                  'Advanced search filters',
                  'Save favorite listings',
                  'Instant alerts for new matches'
                ]
              },
              {
                step: '02',
                icon: <FiCalendar className="w-6 h-6" />,
                title: 'Schedule a Viewing',
                description: 'Book a visit with one of our expert agents who will provide in-depth property analysis.',
                details: [
                  'Flexible scheduling',
                  'Expert guidance',
                  'Market insights',
                  'Investment advice'
                ]
              },
              {
                step: '03',
                icon: <FiHome className="w-6 h-6" />,
                title: 'Complete the Process',
                description: 'Our team handles everything from offer to closing with expert negotiation and support.',
                details: [
                  'Mortgage assistance',
                  'Professional negotiation',
                  'Legal support',
                  'Smooth handover'
                ]
              }
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col md:flex-row gap-12 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#01753f] flex items-center justify-center text-[#01753f] mb-6 transition-colors duration-300 group-hover:bg-[#01753f] group-hover:text-white">
                    {item.icon}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block w-0.5 h-24 bg-gray-200 mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-light text-gray-900 mb-5">
                    <span className="text-[#01753f] font-medium mr-3">{item.step}.</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-7">{item.description}</p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start group">
                        <svg 
                          className="h-5 w-5 text-[#01753f] mt-0.5 mr-3 flex-shrink-0 transform transition-transform group-hover:scale-110" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 text-center group">
            <button className="inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#01753f] hover:bg-[#016030] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group-hover:bg-[#016030]">
              Get Started
              <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-20 bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-[#e2e8f0] [mask-image:radial-gradient(white,transparent_70%)] -z-0"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#01753f] bg-opacity-10 rounded-full mb-4">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest properties and market insights.
            </p>
          </motion.div>
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-1"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              required 
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#01753f] focus:border-transparent"
            />
            <button 
              type="submit" 
              className="!bg-[#01753f] text-white px-6 py-3 rounded-md font-medium hover:bg-[#016030] transition-colors"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </motion.section>
      </main>
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
