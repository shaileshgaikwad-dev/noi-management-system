export function WhyChooseUs() {
  const reasons = [
    {
      title: "Organized Process",
      description:
        "Keep client, agent, loan, and Notice of Intimation information organized in one structured workflow.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "indigo",
    },
    {
      title: "Clear Status Tracking",
      description:
        "Track Notice of Intimation work through Pending, In Progress, and Completed statuses.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "emerald",
    },
    {
      title: "Accurate Records",
      description:
        "Maintain important business and client information in a centralized system.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Business Reporting",
      description:
        "Monitor income and business activity through structured reports.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "amber",
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; text: string; hoverBg: string; hoverBorder: string; glow: string }
  > = {
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-600",
      hoverBorder: "hover:border-indigo-300",
      glow: "hover:shadow-indigo-500/10",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      glow: "hover:shadow-emerald-500/10",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hoverBg: "group-hover:bg-purple-600",
      hoverBorder: "hover:border-purple-300",
      glow: "hover:shadow-purple-500/10",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      hoverBg: "group-hover:bg-amber-600",
      hoverBorder: "hover:border-amber-300",
      glow: "hover:shadow-amber-500/10",
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Header — Left column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              Why Choose Us
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Built to keep{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Notice of Intimation
              </span>{" "}
              work simple and organized
            </h2>

            {/* Divider */}
            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              Our approach focuses on organized information, clear processing,
              and reliable business records.
            </p>
          </div>

          {/* Reasons — Right column */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => {
                const colors = colorMap[reason.color];

                return (
                  <div
                    key={reason.title}
                    className={`group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${colors.hoverBorder} ${colors.glow}`}
                  >
                    {/* Icon Container */}
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${colors.bg} ${colors.text} ${colors.hoverBg} group-hover:text-white group-hover:shadow-lg`}
                    >
                      {reason.icon}
                    </div>

                    {/* Title */}
                    <h3 className="relative mt-5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-indigo-700">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="relative mt-3 text-sm leading-6 text-slate-600">
                      {reason.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="relative mt-5 h-0.5 w-10 rounded-full bg-slate-100 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500"></div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}