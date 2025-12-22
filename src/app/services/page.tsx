'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

type Highlight = { label: string; value: string };
type Service = { key: string; label: string; summary: string; bullets: string[] };
type Step = { title: string; detail: string };
type AudienceItem = { title: string; body: string };

export default function ServicesPage() {
  const { t } = useTranslation();

  const highlights = t('servicesPage.hero.highlights', { returnObjects: true }) as Highlight[];

  const services: Service[] = [
    {
      key: 'segmentation',
      label: t('servicesPage.services.segmentation.label'),
      summary: t('servicesPage.services.segmentation.summary'),
      bullets: t('servicesPage.services.segmentation.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'sales',
      label: t('servicesPage.services.sales.label'),
      summary: t('servicesPage.services.sales.summary'),
      bullets: t('servicesPage.services.sales.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'rentals',
      label: t('servicesPage.services.rentals.label'),
      summary: t('servicesPage.services.rentals.summary'),
      bullets: t('servicesPage.services.rentals.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'relocation',
      label: t('servicesPage.services.relocation.label'),
      summary: t('servicesPage.services.relocation.summary'),
      bullets: t('servicesPage.services.relocation.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'assetManagement',
      label: t('servicesPage.services.assetManagement.label'),
      summary: t('servicesPage.services.assetManagement.summary'),
      bullets: t('servicesPage.services.assetManagement.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'newDevelopments',
      label: t('servicesPage.services.newDevelopments.label'),
      summary: t('servicesPage.services.newDevelopments.summary'),
      bullets: t('servicesPage.services.newDevelopments.bullets', { returnObjects: true }) as string[],
    },
  ];

  const steps = t('servicesPage.flow.steps', { returnObjects: true }) as Step[];
  const audienceItems = t('servicesPage.audience.items', { returnObjects: true }) as AudienceItem[];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
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
            <h1 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>
              {t('servicesPage.hero.title')}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('servicesPage.hero.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                  {item.value}
                </div>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-base font-medium rounded-lg transition-all duration-200 hover:shadow-lg border border-[#048542]/10"
            >
              <span className="text-white">{t('servicesPage.hero.ctaPrimary')}</span>
              <FiArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 rounded-lg transition-all duration-200"
            >
              {t('servicesPage.hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>
              {t('servicesPage.whatWeDeliver.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('servicesPage.whatWeDeliver.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-10 rounded-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gray-200">
                  <h3 className="dm-serif-text text-3xl font-normal mb-4 leading-tight text-gray-900">
                    {service.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
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
            <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>
              {t('servicesPage.flow.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('servicesPage.flow.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gray-200 text-center">
                  <div className="text-4xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Audience Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="dm-serif-text text-3xl md:text-4xl font-normal mb-4" style={{ color: '#EC9FA3' }}>
                {t('servicesPage.audience.title')}
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                {t('servicesPage.audience.description')}
              </p>
              <div className="space-y-6">
                {audienceItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-lg border border-gray-100"
            >
              <h3 className="dm-serif-text text-2xl font-normal mb-6" style={{ color: '#EC9FA3' }}>
                {t('servicesPage.audience.title')}
              </h3>
              <p className="text-gray-600 mb-8">
                {t('servicesPage.audience.description')}
              </p>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-base font-medium rounded-lg transition-all duration-200 hover:shadow-lg border border-[#048542]/10"
              >
                <span className="text-white">{t('servicesPage.audience.cta')}</span>
                <FiArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
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
            className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fffe] to-white p-8 md:p-14 rounded-3xl border border-[#048542]/20 shadow-[0_10px_40px_rgba(4,133,66,0.08)] hover:shadow-[0_20px_60px_rgba(4,133,66,0.12)] transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 group"
          >
            <div className="relative z-10 flex-1">
              <h3 className="dm-serif-text text-3xl md:text-4xl font-normal mb-3 leading-tight" style={{ color: '#EC9FA3' }}>
                {t('servicesPage.closing.title')}
              </h3>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                {t('servicesPage.closing.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group/btn relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-base font-medium rounded-lg transition-all duration-200 hover:shadow-lg border border-[#048542]/10"
              >
                <span className="text-white">{t('servicesPage.closing.primary')}</span>
                <FiArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 rounded-lg transition-all duration-200"
              >
                {t('servicesPage.closing.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
