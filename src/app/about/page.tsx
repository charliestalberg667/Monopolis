'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - matching front page style */}
      <section className="relative w-full bg-[#ffffff] px-6 pt-2 pb-10 md:h-screen overflow-visible z-10">
        <div className="relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] mb-0 mt-0 md:mb-0 py-6 px-6">
          <Image
            src="/header/bggg.jpg"
            alt="About Monopolis hero"
            fill
            priority
            className="object-cover rounded-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-md md:max-w-xl mx-auto text-center"
          >
            <h1 className="pt-6 text-lg md:text-lg font-black text-white leading-tight">
              {t('about.title')}
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-2 text-white/90 max-w-2xl mx-auto"
            >
              {t('about.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="logo-font text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.mission.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: t('about.mission.missionTitle'),
                description: t('about.mission.missionDescription')
              },
              {
                title: t('about.mission.valuesTitle'),
                description: t('about.mission.valuesDescription')
              },
              {
                title: t('about.mission.howWorkTitle'),
                description: t('about.mission.howWorkDescription')
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[#048542]/30">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="logo-font text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('about.impact.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.impact.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4-5", label: t('about.impact.agents') },
              { value: "98%", label: t('about.impact.satisfaction') },
              { value: "15+", label: t('about.impact.years') },
              { value: "1", label: t('about.impact.office') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="logo-font text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('about.journey.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.journey.subtitle')}</p>
          </motion.div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              { year: "2010", title: t('about.journey.founded'), description: t('about.journey.foundedDescription') },
              { year: "2015", title: t('about.journey.rental'), description: t('about.journey.rentalDescription') },
              { year: "2021", title: t('about.journey.digital'), description: t('about.journey.digitalDescription') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-6"
              >
                <div className="h-8 w-8 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
                <div className="bg-white p-6 rounded-2xl border border-[#048542]/30 flex-1">
                  <h4 className="font-semibold text-xl text-gray-900">{item.year} — {item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-2xl border border-[#048542]/30 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{t('cta.title')}</h3>
              <p className="text-gray-600 text-lg max-w-2xl">
                {t('cta.subtitle')}
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              style={{ color: '#ffffff' }}
            >
              {t('cta.button')}
              <FiArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" style={{ color: '#ffffff' }} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}


