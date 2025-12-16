'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiHome, FiStar, FiSearch, FiCalendar, FiChevronLeft, FiChevronRight, FiCheck, FiArrowRight } from 'react-icons/fi';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Hero from '@/components/hero/hero';
import PropertyCard from '@/components/propertyCard/propertyCard';
import MarketReport from '@/components/marketReport/MarketReport';
import Link from 'next/link';


interface ProcessStep {
  step: string;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  detailKeys: string[];
}

type Testimonial = {
  id: string;
  name: string;
  roleKey: string;
  contentKey: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    roleKey: "testimonials.roles.homeBuyer",
    contentKey: "testimonials.items.1.content",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    roleKey: "testimonials.roles.investor",
    contentKey: "testimonials.items.2.content",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    roleKey: "testimonials.roles.seller",
    contentKey: "testimonials.items.3.content",
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
}

const HomeContent: React.FC = () => {
  const { t } = useTranslation();
  const mainRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mainRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  
  const [properties, setProperties] = useState<Property[]>([]);

  const processSteps: ProcessStep[] = [
    {
      step: '01',
      icon: <FiSearch className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
      titleKey: 'process.step1.title',
      descriptionKey: 'process.step1.description',
      detailKeys: ['process.step1.detail1', 'process.step1.detail2', 'process.step1.detail3', 'process.step1.detail4']
    },
    {
      step: '02',
      icon: <FiCalendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
      titleKey: 'process.step2.title',
      descriptionKey: 'process.step2.description',
      detailKeys: ['process.step2.detail1', 'process.step2.detail2', 'process.step2.detail3', 'process.step2.detail4']
    },
    {
      step: '03',
      icon: <FiHome className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,
      titleKey: 'process.step3.title',
      descriptionKey: 'process.step3.description',
      detailKeys: ['process.step3.detail1', 'process.step3.detail2', 'process.step3.detail3', 'process.step3.detail4']
    }
  ];

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const res = await fetch('/api/estates?limit=6', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const apiProperties = (data?.properties || []) as Property[];
        
        // Use API-provided data as-is; do not synthesize a "featured" flag client-side
        setProperties(apiProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Set empty array if API fails
        setProperties([]);
      }
    };
    fetchFeaturedProperties();
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen flex flex-col" ref={mainRef}>
      <main>
        {/* Stats Section */}

        {/* Featured Properties */}
        <motion.section 
          id="featured-properties"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative py-20 overflow-hidden"
        >
          {/* Decorative elements */}
         
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16 text-center"
            >
              <h2 className="logo-font text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('featured.title')}</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('featured.subtitle')}</p>
            </motion.div>
            
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {properties.slice(0, 6).map((property) => (
                  <PropertyCard
                    key={property.id}
                    id={property.id}
                    title={property.title}
                    location={property.location}
                    price={property.price}
                    bedrooms={property.bedrooms}
                    bathrooms={property.bathrooms}
                    area={property.area}
                    image={property.image}
                    type={property.type}
                  />
                ))}
              </div>
            </div>
        </div>
      </motion.section>

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
            <h2 className="logo-font text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              {t('process.title')}
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {t('process.subtitle')}
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
                  <span className="inline-block text-sm font-medium text-gray-500 mb-2">{t('process.step')} {item.step}</span>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{t(item.titleKey)}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{t(item.descriptionKey)}</p>
                  <ul className="space-y-3">
                    {item.detailKeys.map((detailKey, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs mr-3 mt-0.5">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        <span className="text-gray-600">{t(detailKey)}</span>
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
            className="mt-20 text-center text-white"
          >
            <Link href="/properties" className="group inline-flex items-center px-6 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium rounded-lg transition-colors">
              {t('process.getStarted')}
              <FiArrowRight className="ml-3 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Market Report */}
      <MarketReport />


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
            <h2 className="logo-font text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
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
const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  const { t } = useTranslation();
  return (
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
          <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
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
      <p className="text-gray-600 italic flex-grow">&ldquo;{t(testimonial.contentKey)}&rdquo;</p>
    </motion.div>
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

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
};

export default Home;
