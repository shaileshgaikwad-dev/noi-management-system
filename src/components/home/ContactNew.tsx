import { Contact } from "./Contact";
import { ContactInfoCards } from "./ContactInfoCards";

export function ContactNew() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <main className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-40 top-80 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

        {/* Page Header */}
        <section className="relative bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                Contact Us
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
              Let&apos;s discuss your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                requirements
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Have a question about our Notice of Intimation services? Reach us
              by phone, email, or send us a message below.
            </p>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="relative py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* LEFT — Info cards + trust line */}
              <div className="lg:col-span-5">
                <ContactInfoCards />

                {/* Trust line — under the cards */}
                <div className="mt-6 flex flex-col items-center gap-3 text-xs text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">
                      Your data is safe with us
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">
                      Quick response time
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT — Form */}
              <div className="lg:col-span-7">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
