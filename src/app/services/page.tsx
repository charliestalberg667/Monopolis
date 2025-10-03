export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            We provide end‑to‑end support across house segmentation, sales, rentals, and delocalisation.
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* House Segmentation */}
          <div className="rounded-2xl border border-[#048542]/30 bg-white shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#048542' }}>Sg</div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">House Segmentation</h2>
                <p className="mt-2 text-gray-600">
                  Strategic segmentation to maximise yield: divide a property into optimal, compliant units,
                  with architectural coordination and local regulation guidance.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Feasibility and ROI analysis</li>
              <li>Layout proposals and contractor coordination</li>
              <li>Permits and compliance advisory</li>
            </ul>
          </div>

          {/* Sales */}
          <div className="rounded-2xl border border-[#048542]/30 bg-white shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#048542' }}>Se</div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Property Sales</h2>
                <p className="mt-2 text-gray-600">
                  From valuation to closing: premium marketing, qualified buyer network, and expert negotiation
                  to secure the best price.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Market valuation and pricing strategy</li>
              <li>Photography, staging, and international reach</li>
              <li>Offer management and legal guidance</li>
            </ul>
          </div>

          {/* Rentals */}
          <div className="rounded-2xl border border-[#048542]/30 bg-white shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#048542' }}>Rt</div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Rentals</h2>
                <p className="mt-2 text-gray-600">
                  Full rental service for owners and tenants: listing, screening, contracts, and move‑in support
                  with transparent communication.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Tenant sourcing and screening</li>
              <li>Contract drafting and handover</li>
              <li>Property management options</li>
            </ul>
          </div>

          {/* Delocalisation */}
          <div className="rounded-2xl border border-[#048542]/30 bg-white shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#048542' }}>Dl</div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Delocalisation</h2>
                <p className="mt-2 text-gray-600">
                  Relocation assistance for individuals and companies: neighbourhood orientation, short‑ and long‑term
                  housing, and administrative support.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              <li>Area and school guidance</li>
              <li>Temporary and permanent housing search</li>
              <li>Registration and utility setup support</li>
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 md:mt-14">
          <div className="rounded-2xl border border-[#048542]/30 bg-white shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Need a tailored plan?</h3>
              <p className="text-gray-600 mt-2 max-w-2xl">Speak with our advisors to design a solution for your goals.</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white"
              style={{ backgroundColor: '#01753f' }}
            >
              Contact us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

