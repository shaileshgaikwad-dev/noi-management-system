import { Link } from "react-router-dom";
import { ServicesSection } from "../../components/home/ServicesSection";
import { HowItWorks } from "../../components/home/HowItWorks";
import { WhyChooseUs } from "../../components/home/WhyChooseUs";
import { BusinessStats } from "../../components/home/BusinessStats";
import { FAQSection } from "../../components/home/FAQSection";
import { ContactCTA } from "../../components/home/ContactCTA";
import { ClientsCarousel } from "../../components/home/ClientCarousel";
import { AboutSection } from "../../components/home/AboutSection";
import { ContactNew } from "../../components/home/ContactNew";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"></div>

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                  Notice of Intimation Management
                </span>
              </div>

              {/* Heading */}
              <h1
                data-aos="fade-up"
                className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Simple and organized{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Notice of Intimation Management.
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60"></span>
                </span>
              </h1>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mt-8 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
              >
                Manage Notice of Intimation work, clients, agents, loan
                information and processing details from one centralized
                management system.
              </p>

              {/* CTA Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/contact-new"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get in Touch</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
                >
                  Our Services
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Trust Line */}
              <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Organized workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Secure access</span>
                </div>
              </div>
            </div>

            {/* Hero Information Card — now visible on all screens */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>

              {/* Card */}
              <div className="relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-2xl sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-indigo-600">
                    Notice of Intimation Management
                  </p>
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
                  Everything organized in one place
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Keep track of clients, agents, loan details, Notice of
                  Intimation status and related business information through a
                  structured workflow.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {/* Card 1 - Clients */}
                  <div className="group/item rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50/50 hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 transition-colors group-hover/item:bg-indigo-600 group-hover/item:text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        Clients
                      </p>
                    </div>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Organized
                    </p>
                  </div>

                  {/* Card 2 - Processing */}
                  <div className="group/item rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 transition-all duration-300 hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-100 text-purple-600 transition-colors group-hover/item:bg-purple-600 group-hover/item:text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        Processing
                      </p>
                    </div>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Tracked
                    </p>
                  </div>

                  {/* Card 3 - Agents */}
                  <div className="group/item rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 transition-colors group-hover/item:bg-emerald-600 group-hover/item:text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        Agents
                      </p>
                    </div>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Managed
                    </p>
                  </div>

                  {/* Card 4 - Reports */}
                  <div className="group/item rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50/50 hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-600 transition-colors group-hover/item:bg-amber-600 group-hover/item:text-white">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        Reports
                      </p>
                    </div>
                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Available
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>System ready · All modules active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AboutSection />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <BusinessStats />
      <ClientsCarousel />
      <FAQSection />
      <ContactCTA />
      <ContactNew />
    </div>
  );
}
