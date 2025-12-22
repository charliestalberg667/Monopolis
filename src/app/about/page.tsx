'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// Suppression des imports inutilisés : FiPieChart, FiHome, FiMapPin, FiCheckCircle
import { FiArrowRight, FiLayers, FiTrendingUp } from 'react-icons/fi';
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
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
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

      {/* Mission & Values */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('about.mission.title')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.mission.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('about.mission.missionTitle'), description: t('about.mission.missionDescription') },
              { title: t('about.mission.valuesTitle'), description: t('about.mission.valuesDescription') },
              { title: t('about.mission.howWorkTitle'), description: t('about.mission.howWorkDescription') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-10 rounded-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <h3 className="dm-serif-text text-3xl font-normal mb-5 text-center text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Strategic Capabilities (Asset Management & New Projects) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="dm-serif-text text-4xl md:text-5xl leading-tight text-gray-900">
                Beyond Brokerage: <br/>
                <span style={{ color: '#EC9FA3' }}>Strategic Real Estate</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Monopolis has evolved into a full-service partner. We build legacies through specialized management and development.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#EC9FA3]/10 flex items-center justify-center flex-shrink-0">
                    <FiTrendingUp className="w-6 h-6" style={{ color: '#EC9FA3' }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('servicesPage.services.assetManagement.label')}</h4>
                    <p className="text-gray-600">{t('servicesPage.services.assetManagement.summary')}</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#048542]/10 flex items-center justify-center flex-shrink-0">
                    <FiLayers className="w-6 h-6 text-[#048542]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{t('servicesPage.services.newDevelopments.label')}</h4>
                    <p className="text-gray-600">{t('servicesPage.services.newDevelopments.summary')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-16" style={{ color: '#EC9FA3' }}>{t('about.impact.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4-5", label: t('about.impact.agents') },
              { value: "98%", label: t('about.impact.satisfaction') },
              { value: "15+", label: t('about.impact.years') },
              { value: "1", label: t('about.impact.office') }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: '#048542' }}>{stat.value}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('about.team.title')}</h2>
          <p className="text-gray-600 text-lg">{t('about.team.subtitle')}</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((id) => (
              <div key={id} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80 bg-gray-100">
                  <Image
                    src={t(`about.team.members.${id}.photo`)}
                    alt={t(`about.team.members.${id}.name`)}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="dm-serif-text text-2xl font-normal mb-2" style={{ color: '#EC9FA3' }}>{t(`about.team.members.${id}.name`)}</h3>
                  <p className="text-gray-600">{t(`about.team.members.${id}.role`)}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white to-[#f8fffe] p-10 rounded-3xl border border-[#048542]/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="dm-serif-text text-3xl md:text-4xl font-normal mb-3" style={{ color: '#EC9FA3' }}>{t('cta.title')}</h3>
              <p className="text-gray-600 text-lg">{t('cta.subtitle')}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#048542] text-white rounded-lg hover:bg-[#037038] transition-colors"
            >
              <span>{t('cta.button')}</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
