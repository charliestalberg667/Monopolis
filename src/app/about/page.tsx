'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiArrowRight, 
  FiTrendingUp, 
  FiLayers, 
  FiScissors, 
  FiDollarSign, 
  FiKey, 
  FiMapPin 
} from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  // Strategic services with translations
  const strategicServices = [
    { 
      key: 'segmentation', 
      icon: <FiScissors className="w-6 h-6" />,
      title: t('about.pillars.segmentation.title'),
      desc: t('about.pillars.segmentation.description')
    },
    { 
      key: 'sales', 
      icon: <FiDollarSign className="w-6 h-6" />,
      title: t('about.pillars.sales.title'),
      desc: t('about.pillars.sales.description')
    },
    { 
      key: 'rentals', 
      icon: <FiKey className="w-6 h-6" />,
      title: t('about.pillars.rentals.title'),
      desc: t('about.pillars.rentals.description')
    },
    { 
      key: 'relocation', 
      icon: <FiMapPin className="w-6 h-6" />,
      title: t('about.pillars.relocation.title'),
      desc: t('about.pillars.relocation.description')
    },
    { 
      key: 'assetManagement', 
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: t('about.pillars.assetManagement.title'),
      desc: t('about.pillars.assetManagement.description')
    },
    { 
      key: 'newDevelopments', 
      icon: <FiLayers className="w-6 h-6" />,
      title: t('about.pillars.newDevelopments.title'),
      desc: t('about.pillars.newDevelopments.description')
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-[#ffffff] px-6 pt-2 pb-10 md:h-screen overflow-visible z-10">
        <div className="relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-100px)] py-6 px-6">
          <Image
            src="/header/bggg.jpg"
            alt="About Monopolis"
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
              className="dm-serif-text text-2xl md:text-5xl font-normal text-white text-center mb-20 max-w-[1000px]"
            >
              {t('about.title')}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Capabilities Grid - LES 6 CASES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="dm-serif-text text-4xl md:text-5xl mb-6 text-gray-900">
              {t('about.strategicPillars.title')} <span style={{ color: '#EC9FA3' }}>{t('about.strategicPillars.titleHighlight')}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('about.strategicPillars.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicServices.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center" 
                  style={{ 
                    backgroundColor: service.key === 'newDevelopments' || service.key === 'assetManagement' 
                      ? 'rgba(4,133,66,0.1)' 
                      : 'rgba(236,159,163,0.1)' 
                  }}
                >
                  <div style={{ color: service.key === 'newDevelopments' || service.key === 'assetManagement' ? '#048542' : '#EC9FA3' }}>
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 dm-serif-text">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { 
                value: t('about.impact.stats.agents.value'), 
                label: t('about.impact.stats.agents.label') 
              },
              { 
                value: t('about.impact.stats.satisfaction.value'), 
                label: t('about.impact.stats.satisfaction.label') 
              },
              { 
                value: t('about.impact.stats.years.value'), 
                label: t('about.impact.stats.years.label') 
              },
              { 
                value: t('about.impact.stats.office.value'), 
                label: t('about.impact.stats.office.label') 
              }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#048542' }}>{stat.value}</div>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="dm-serif-text text-3xl md:text-5xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('about.team.title')}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t('about.team.subtitle')}</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((id) => (
              <div key={id} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                <div className="relative h-96 bg-gray-100 overflow-hidden">
                  <Image
                    src={t(`about.team.members.${id}.photo`)}
                    alt={t(`about.team.members.${id}.name`)}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="dm-serif-text text-2xl font-normal mb-2" style={{ color: '#EC9FA3' }}>{t(`about.team.members.${id}.name`)}</h3>
                  <p className="text-gray-500">{t(`about.team.members.${id}.role`)}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#f8fffe] to-white p-12 rounded-[2.5rem] border border-[#048542]/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="dm-serif-text text-3xl md:text-4xl font-normal mb-4" style={{ color: '#EC9FA3' }}>{t('cta.title')}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{t('cta.subtitle')}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#048542] text-white rounded-xl hover:bg-[#037038] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="font-bold">{t('cta.button')}</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
