"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // No backend wired yet — simulate success after short delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            We’d love to hear from you. Send us a message and we’ll respond within one business day.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Form */}
          <section className="lg:col-span-2">
            <div className="rounded-lg border border-[#048542]/30 bg-white p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-semibold">Thank you!</h2>
                  <p className="mt-2 text-gray-600">
                    Your message has been sent. We’ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-900">First name</label>
                      <input id="firstName" name="firstName" type="text" placeholder="Jane" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900">Last name</label>
                      <input id="lastName" name="lastName" type="text" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900">Email</label>
                      <input id="email" name="email" type="email" placeholder="jane@example.com" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="+32 2 123 45 67" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-900">Subject</label>
                    <input id="subject" name="subject" type="text" placeholder="How can we help?" required />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900">Message</label>
                    <textarea id="message" name="message" rows={6} placeholder="Write your message here..." required />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-10 py-4 rounded-full text-white bg-[#01753f] hover:bg-[#016030] disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Send message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Details */}
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-[#048542]/70) bg-white p-6 md:p-8 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Contact details</h3>
                <p className="mt-2 text-gray-600">Our team is available Monday to Friday, 9:00–18:00.</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-gray-900">📍</span>
                  <div>
                    <div>Avenue Louise 500</div>
                    <div>1050 Brussels, Belgium</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900">📞</span>
                  <a href="tel:+3221234567" className="hover:text-[#048542] underline underline-offset-2">+32 2 123 45 67</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900">✉️</span>
                  <a href="mailto:info@monopolis.be" className="hover:text-[#048542] underline underline-offset-2">info@monopolis.be</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-900">🕒</span>
                  <span>Mon–Fri: 9:00–18:00</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Map */}
        <section className="mt-10 md:mt-14">
          <div className="rounded-lg overflow-hidden border border-[#048542]/30 shadow-sm">
            <iframe
              title="Monopolis office location"
              src="https://www.google.com/maps?q=Avenue%20Louise%20500%2C%201050%20Brussels&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

