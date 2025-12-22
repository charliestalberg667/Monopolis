'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight, FiPieChart, FiHome, FiLayers, FiMapPin, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-[#ffffff] px-6 pt-2 pb-10 md:h-screen overflow-visible z-10">
        <div className="relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] mb-0 mt-0 md:mb-0 py-6 px-6">
          <Image
            src="/header/bggg.jpg"
            alt="About Monopolis hero"
            layout="fill"
            quality={100}
            objectFit="cover"
            className="rounded-sm"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-45 rounded-sm z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-end z-20 px-6 pt-[133px] pb-[133px] gap-[106px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="dm-serif-text text-2xl md:text-5xl lg:text-5xl font-normal text-white leading-tight text-center mb-20 max-w-[1000px]"
            >
              {t('about.title')}
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-lg max-w-2xl mx-auto text-center"
            >
              {t('about.description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Philosophy Section (Mission/Values) */}
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
            <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('about.mission.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.mission.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: t('about.mission.missionTitle'), description: t('about.mission.missionDescription') },
              { title: t('about.mission.valuesTitle'), description: t('about.mission.valuesDescription') },
              { title: t('about.mission.howWorkTitle'), description: t('about.mission.howWorkDescription') }
            ].map((item, index) => (
              <motion.div
                key={index}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-10 rounded-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gray-200">
                  <h3 className="dm-serif-text text-3xl font-normal mb-5 leading-tight text-center text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New Section: Core Competencies (Where Asset Management & New Projects live) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="dm-serif-text text-4xl md:text-5xl leading-tight text-gray-900">
                Beyond Brokerage: <br/>
                <span style={{ color: '#EC9FA3' }}>Strategic Real Estate</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Monopolis has evolved into a full-service partner. We don&apos;t just find keys; we build legacies through specialized management and development.
              </p>
              
              <div className="space-y-6">
                {/* Asset Management Highlight */}
                <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-colors hover:bg-[#f8fffe]">
                  <div className="w-12 h-12 rounded-full bg-[#EC9FA3]/10 flex items-center justify-center flex-shrink-0">
                    <FiTrendingUp className="w-6 h-6" style={{ color: '#EC9FA3' }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('servicesPage.services.assetManagement.label')}</h4>
                    <p className="text-gray-600">{t('servicesPage.services.assetManagement.summary')}</p>
                  </div>
                </div>

                {/* New Developments Highlight */}
                <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-colors hover:bg-[#f8fffe]">
                  <div className="w-12 h-12 rounded-full bg-[#048542]/10 flex items-center justify-center flex-shrink-0">
                    <FiLayers className="w-6 h-6 text-[#048542]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('servicesPage.services.newDevelopments.label')}</h4>
                    <p className="text-gray-600">{t('servicesPage.services.newDevelopments.summary')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Belgian Architecture"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('about.impact.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">{t('about.impact.subtitle')}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4-5", label: t('about.impact.agents') },
              { value: "98%", label: t('about.impact.satisfaction') },
              { value: "15+", label: t('about.impact.years') },
              { value: "1", label: t('about.impact.office') }
            ].map((stat, index) => (
              <motion.div key={index} transition={{ delay: index * 0.1, duration: 0.5 }}>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('about.team.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.team.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logic for team members mapping stays the same as your previous code */}
            {[1,2,3,4,5].map((id) => (
              <motion.div key={id} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gray-200 overflow-hidden">
                  <div className="relative w-full h-80 bg-gray-100">
                    <Image
                      src={t(`about.team.members.${id}.photo`)}
                      alt={t(`about.team.members.${id}.name`)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="dm-serif-text text-2xl font-normal mb-2" style={{ color: '#EC9FA3' }}>{t(`about.team.members.${id}.name`)}</h3>
                    <p className="text-gray-600 text-base">{t(`about.team.members.${id}.role`)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fffe] to-white p-8 md:p-14 rounded-3xl border border-[#048542]/20 shadow-[0_10px_40px_rgba(4,133,66,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 group">
            <div className="relative z-10 flex-1">
              <h3 className="dm-serif-text text-3xl md:text-4xl font-normal mb-3 leading-tight" style={{ color: '#EC9FA3' }}>{t('cta.title')}</h3>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                {t('cta.subtitle')}
              </p>
            </div>
            <Link
              href="/contact"
              className="group/btn relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-base font-medium rounded-lg transition-all duration-200"
            >
              <span>{t('cta.button')}</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
