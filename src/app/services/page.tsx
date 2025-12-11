'use client';

import { useTranslation } from 'react-i18next';

type Highlight = { label: string; value: string };
type Service = { key: string; label: string; summary: string; bullets: string[] };
type Step = { title: string; detail: string };
type AudienceItem = { title: string; body: string };

const serviceAccent = '#01753f';

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
  ];

  const steps = t('servicesPage.flow.steps', { returnObjects: true }) as Step[];
  const audienceItems = t('servicesPage.audience.items', { returnObjects: true }) as AudienceItem[];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f7f9f7] to-white text-gray-900 px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto space-y-14 md:space-y-16">
        <header className="rounded-3xl border border-[#dfe7e1] bg-white/70 shadow-sm backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#01753f0d] via-transparent to-[#0b3b230f]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e9f4ed] px-4 py-1 text-sm font-medium text-[#0b3b23]">
                {t('servicesPage.hero.badge')}
              </span>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                {t('servicesPage.hero.title')}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('servicesPage.hero.description')}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white shadow-lg shadow-[#01753f33]"
                  style={{ backgroundColor: serviceAccent }}
                >
                  {t('servicesPage.hero.ctaPrimary')}
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/properties"
                  className="inline-flex items-center gap-2 rounded-full border border-[#bcd7c6] px-5 py-3 text-[#0b3b23] hover:border-[#01753f] hover:text-[#01753f] transition"
                >
                  {t('servicesPage.hero.ctaSecondary')}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full md:w-80">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#e4ede7] bg-white p-4 shadow-sm text-center"
                >
                  <div className="text-xl md:text-2xl font-semibold text-[#0b3b23]">{item.value}</div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{t('servicesPage.whatWeDeliver.title')}</h2>
              <p className="text-gray-600 mt-2">{t('servicesPage.whatWeDeliver.subtitle')}</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-[#0b3b23] font-medium">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: serviceAccent }} />
              {t('servicesPage.whatWeDeliver.ribbon')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className="relative overflow-hidden rounded-3xl border border-[#dfe7e1] bg-white p-7 md:p-8 shadow-sm"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#01753f0a] via-transparent to-white" />
                <div className="relative flex items-start gap-4">
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center text-white font-semibold shadow-inner"
                    style={{ background: serviceAccent }}
                  >
                    {service.label.slice(0, 2)}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold">{service.label}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.summary}</p>
                  </div>
                </div>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {service.bullets.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#dfe7e1] bg-[#f9fbf9] px-3 py-2 text-sm text-[#0b3b23]"
                    >
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: serviceAccent }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-2 rounded-3xl border border-[#dfe7e1] bg-white p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e9f4ed] text-[#0b3b23] font-semibold">
                {t('servicesPage.flow.chip')}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{t('servicesPage.flow.title')}</h3>
                <p className="text-gray-600">{t('servicesPage.flow.subtitle')}</p>
              </div>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((step, idx) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-[#e4ede7] bg-[#f9fbf9] p-5 flex gap-4"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white font-semibold"
                    style={{ backgroundColor: serviceAccent }}
                  >
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#0b3b23]">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-[#dfe7e1] bg-gradient-to-b from-white to-[#f5faf6] p-8 shadow-sm space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0b3b23]">{t('servicesPage.audience.title')}</h3>
            <p className="text-gray-600">{t('servicesPage.audience.description')}</p>
            <div className="space-y-3 text-sm text-[#0b3b23]">
              {audienceItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: serviceAccent }} />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-4 py-3 text-white font-medium shadow-lg shadow-[#01753f33] w-full"
              style={{ backgroundColor: serviceAccent }}
            >
              {t('servicesPage.audience.cta')}
            </a>
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfe7e1] bg-white p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-[#0b3b23]">{t('servicesPage.closing.title')}</h3>
            <p className="text-gray-600 max-w-2xl">{t('servicesPage.closing.description')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white shadow-lg shadow-[#01753f33]"
              style={{ backgroundColor: serviceAccent }}
            >
              {t('servicesPage.closing.primary')}
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-[#bcd7c6] px-5 py-3 text-[#0b3b23] hover:border-[#01753f] hover:text-[#01753f] transition"
            >
              {t('servicesPage.closing.secondary')}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

