export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 sm:py-24">
      {/* Decorative background */}

      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div data-aos="fade-right">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              About Notice of Intimation Management
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              A structured approach to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Notice of Intimation
              </span>{" "}
              work
            </h2>

            {/* Divider */}
            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            {/* Paragraphs */}
            <p className="mt-6 text-base leading-7 text-slate-600">
              Notice of Intimation is an important part of the property mortgage
              process when a borrower takes a loan against a property. Managing
              the related information accurately helps keep the process
              organized.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Notice of Intimation Management provides a centralized way to
              organize client information, agent details, loan information,
              Notice of Intimation processing and status tracking.
            </p>
          </div>

          {/* Information Card */}
          <div data-aos="fade-left" className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-20"></div>

            {/* Card */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl sm:p-9">
              {/* Card Header */}
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  What we manage
                </h3>
              </div>

              {/* Items */}
              <div className="mt-7 space-y-6">
                {/* Item 1 */}
                <div className="group/item flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600 transition-all duration-300 group-hover/item:bg-indigo-600 group-hover/item:text-white">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 transition-colors group-hover/item:text-indigo-600">
                      Client Information
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Maintain client and loan-related information in an
                      organized manner.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group/item flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600 transition-all duration-300 group-hover/item:bg-indigo-600 group-hover/item:text-white">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 transition-colors group-hover/item:text-indigo-600">
                      Agent Management
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Keep assigned agent information connected with the
                      corresponding client work.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="group/item flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-600 transition-all duration-300 group-hover/item:bg-indigo-600 group-hover/item:text-white">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 transition-colors group-hover/item:text-indigo-600">
                      Notice of Intimation Status Tracking
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Track Notice of Intimation work through statuses such as
                      Pending, In Progress and Completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
