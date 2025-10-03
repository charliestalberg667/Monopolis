import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero (aligned with home) */}
      <section className="relative w-full h-[50vh] md:h-[75vh] mb-8 mt-4 md:mb-12 py-6 px-6">
        <Image
          src="/header/bggg.jpg"
          alt="About Monopolis hero"
          fill
          priority
          className="object-cover"
        />
        <div className="relative max-w-md md:max-w-xl">
          <h1 className="pt-6 text-lg md:text-lg font-black text-white leading-tight">
            ABOUT MONOPOLIS
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            We help people buy, sell, and rent exceptional properties across Belgium,
            combining deep local expertise with world‑class service.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-2xl border border-[#048542]/30 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-gray-600">
              To make premium real estate accessible through transparent advice, curated listings, and
              end‑to‑end guidance tailored to every client.
            </p>
          </div>
          <div className="rounded-2xl border border-[#048542]/30 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">What We Value</h3>
            <p className="mt-3 text-gray-600">
              Integrity, discretion, and long‑term relationships. We prioritize your goals over quick
              wins—always.
            </p>
          </div>
          <div className="rounded-2xl border border-[#048542]/30 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">How We Work</h3>
            <p className="mt-3 text-gray-600">
              Data‑driven market insight paired with human expertise—from first viewing to signed deed
              and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>750+</div>
              <p className="text-gray-600 mt-1">Properties sold</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>98%</div>
              <p className="text-gray-600 mt-1">Client satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>15</div>
              <p className="text-gray-600 mt-1">Years in market</p>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>3</div>
              <p className="text-gray-600 mt-1">Offices in Belgium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Our Journey</h2>
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-6 w-6 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <div>
              <h4 className="font-semibold">2010 — Founded</h4>
              <p className="text-gray-600 mt-1">Monopolis opens its first office in Brussels.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-6 w-6 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <div>
              <h4 className="font-semibold">2015 — Rental Division</h4>
              <p className="text-gray-600 mt-1">Expanded to full‑service residential rentals.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-6 w-6 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <div>
              <h4 className="font-semibold">2021 — Digital First</h4>
              <p className="text-gray-600 mt-1">Launched a new platform with virtual tours and instant valuations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#048542]/30 p-8 md:p-10 bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Meet the team behind Monopolis</h3>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Our multilingual advisors are here to guide you—whether you are buying, selling, or
              renting.
            </p>
          </div>
          <a
            href="/team"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white"
            style={{ backgroundColor: '#01753f' }}
          >
            Explore our team
          </a>
        </div>
      </section>
    </main>
  );
}


