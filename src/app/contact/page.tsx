"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setError(t("contactPage.error"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 md:mb-14">
          <h1
            className="text-2xl md:text-5xl font-normal tracking-tight dm-serif-text"
            style={{ color: "#EC9FA3" }}
          >
            {t("contactPage.title")}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            {t("contactPage.description")}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Form */}
          <section className="lg:col-span-2">
            <div className="rounded-lg border border-[#048542]/30 bg-white p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-semibold">
                    {t("contactPage.successTitle")}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {t("contactPage.successMessage")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                        {t("contactPage.firstName")}
                      </label>
                      <input id="firstName" name="firstName" type="text" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                        {t("contactPage.lastName")}
                      </label>
                      <input id="lastName" name="lastName" type="text" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900">
                        {t("contactPage.email")}
                      </label>
                      <input id="email" name="email" type="email" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                        {t("contactPage.phone")}
                      </label>
                      <input id="phone" name="phone" type="tel" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-900">
                      {t("contactPage.subject")}
                    </label>
                    <input id="subject" name="subject" type="text" required />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900">
                      {t("contactPage.message")}
                    </label>
                    <textarea id="message" name="message" rows={6} required />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-10 py-4 rounded-full text-white bg-[#01753f] hover:bg-[#016030] disabled:opacity-60"
                    >
                      {isSubmitting
                        ? t("contactPage.sendingButton")
                        : t("contactPage.sendButton")}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Contact Details */}
          <aside className="lg:col-span-1">
            <div className="rounded-lg border border-[#048542]/30 bg-white p-6 md:p-8 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-semibold">
                  {t("contactPage.contactDetails")}
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span>📍</span>
                  <div>
                    <div>Pastoor Bolsstraat 5</div>
                    <div>Beersel, Belgium</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <a
                    href="tel:+32495223376"
                    className="hover:text-[#048542] underline underline-offset-2"
                  >
                    +32 (0) 495 22 33 76
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <a
                    href="mailto:contact@monopolis.be"
                    className="hover:text-[#048542] underline underline-offset-2"
                  >
                    contact@monopolis.be
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Map */}
        <section className="mt-10 md:mt-14">
          <div className="rounded-lg overflow-hidden border border-[#048542]/30 shadow-sm">
            <iframe
              title={t("contactPage.mapTitle")}
              src="https://www.google.com/maps?q=Pastoor%20Bolsstraat%205%2C%20Beersel&output=embed"
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
