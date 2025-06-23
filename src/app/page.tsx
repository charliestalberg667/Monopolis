'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiHome, FiStar, FiSearch, FiCalendar, FiChevronLeft, FiChevronRight, FiCheck, FiArrowRight } from 'react-icons/fi';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { LanguageProvider } from '@/components/languageProvider/languageProvider';
import Hero from '@/components/hero/hero';
import PropertyCard from '@/components/propertyCard/propertyCard';
import MarketReport from '@/components/marketReport/MarketReport';


// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Home Buyer",
    content: "Monopolis made finding our dream home effortless. Their team was professional and attentive to our needs throughout the entire process.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Real Estate Investor",
    content: "The market insights and property recommendations were spot on. I&apos;ve expanded my portfolio significantly thanks to Monopolis.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "First-time Seller",
    content: "Sold my property above asking price within a week! The team&apos;s marketing strategy was impressive.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];


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

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
};

const HomeContent: React.FC = () => {
  // Refs and state
  const mainRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mainRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  
  // Favorites functionality will be implemented in a future update
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

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

  // Filtering featured properties for potential future use
  // const featuredProperties = properties.filter(property => property.featured);

  return (
    <div className="min-h-screen flex flex-col" ref={mainRef}>
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
         
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16 text-center"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#01753f] bg-opacity-10 rounded-full mb-4">
                Premium Listings
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Featured Properties</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our exclusive selection of premium properties in the most sought-after locations</p>
            </motion.div>
            
            <div className="w-full">
              {/* Single responsive grid for all screen sizes */}
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
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 px-4 sm:px-6 lg:px-8"
              >
                {properties.filter(p => p.featured).map((property) => (
                  <motion.div
                    key={property.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="flex justify-center"
                  >
                    <PropertyCard 
                      id={property.id}
                      title={property.title}
                      location={property.location}
                      price={property.price}
                      bedrooms={property.bedrooms}
                      bathrooms={property.bathrooms}
                      area={property.area}
                      image={property.image}
                      type={property.type}
                      featured={property.featured}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* View more button for mobile */}
              <div className="mt-10 text-center md:hidden">
                <button className="px-6 py-3 bg-[#01753f] text-white rounded-md hover:bg-[#016030] transition-colors">
                  View More Properties
                </button>
              </div>
            </div>
        </div>
      </motion.section>

      {/* Market Report */}
      <MarketReport />

      {/* Process Section - Apple Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              A Simple, Transparent Process
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We&apos;ve streamlined the property search into three clear, manageable steps
            </p>
          </motion.div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#01753f] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="inline-block text-sm font-medium text-gray-500 mb-2">Step {item.step}</span>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <button className="group inline-flex items-center px-10 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Get Started
              <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-[#e2e8f0] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#01753f] bg-opacity-10 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with us.
            </p>
          </motion.div>
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} index={index} key={testimonial.id} />
            ))}
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.5
      }
    }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-white p-8 rounded-xl transition-all duration-300 h-full flex flex-col"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 relative">
        <Image 
          src={testimonial.avatar} 
          alt={`${testimonial.name}'s avatar`}
          fill
          sizes="48px"
          className="object-cover"
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
    <p className="text-gray-600 italic flex-grow">&ldquo;{testimonial.content}&rdquo;</p>
  </motion.div>
);

// Testimonial Carousel Component
interface ProcessStepItem {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const ProcessCarousel = ({ items }: { items: ProcessStepItem[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item) => (
            <div key={item.step} className="flex-[0_0_100%] min-w-0 px-2">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#01753f] bg-opacity-10 flex items-center justify-center text-[#01753f] mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Step {item.step}</span>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail: string, i: number) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <FiCheck className="text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollPrev}
      >
        <FiChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollNext}
      >
        <FiChevronRight className="w-5 h-5 text-gray-700" />
      </button>
      
      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === selectedIndex ? 'bg-[#01753f]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-2">
              <TestimonialCard testimonial={testimonial} index={0} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollPrev}
      >
        <FiChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={scrollNext}
      >
        <FiChevronRight className="w-5 h-5 text-gray-700" />
      </button>
      
      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === selectedIndex ? 'bg-[#01753f]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const processSteps = [
  {
    step: '01',
    icon: <FiSearch className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
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
    icon: <FiCalendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
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
    icon: <FiHome className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
    title: 'Complete the Process',
    description: 'Our team handles everything from offer to closing with expert negotiation and support.',
    details: [
      'Mortgage assistance',
      'Professional negotiation',
      'Legal support',
      'Smooth handover'
    ]
  }
];

// ProcessStep component removed as we're now using inline JSX in the section

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
};

export default Home;
