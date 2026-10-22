export function ServicesSection() {
  const services = [
    {
      title: "NOI Processing",
      description:
        "Manage Notice of Intimation work and keep the processing information organized.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: "indigo",
    },
    {
      title: "Client Management",
      description:
        "Maintain client details, property information, loan details, and related records.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "emerald",
    },
    {
      title: "Agent Management",
      description:
        "Organize agent information and connect agents with their respective client work.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "purple",
    },
    {
      title: "Status Tracking",
      description:
        "Track Notice of Intimation work through Pending, In Progress, and Completed statuses.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Income Reports",
      description:
        "Monitor service income and generate useful monthly, yearly, and agent-wise reports.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "amber",
    },
    {
      title: "Business Records",
      description:
        "Keep important Notice of Intimation business information centralized and easier to manage.",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "rose",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; hoverBg: string; hoverBorder: string; glow: string }> = {
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-600",
      hoverBorder: "hover:border-indigo-300",
      glow: "group-hover:shadow-indigo-500/20",
    },
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      glow: "group-hover:shadow-emerald-500/20",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      hoverBg: "group-hover:bg-purple-600",
      hoverBorder: "hover:border-purple-300",
      glow: "group-hover:shadow-purple-500/20",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      hoverBorder: "hover:border-blue-300",
      glow: "group-hover:shadow-blue-500/20",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      hoverBg: "group-hover:bg-amber-600",
      hoverBorder: "hover:border-amber-300",
      glow: "group-hover:shadow-amber-500/20",
    },
    rose: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      hoverBg: "group-hover:bg-rose-600",
      hoverBorder: "hover:border-rose-300",
      glow: "group-hover:shadow-rose-500/20",
    },
  };

  return (
    <section data-aos="zoom-in-up" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            Our Services
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Everything you need to manage{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Notice of Intimation
            </span>{" "}
            work
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            A centralized system designed to organize clients, agents, Notice of Intimation
            processing, status tracking, and business reporting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const colors = colorMap[service.color];

            return (
              <div
                key={service.title}
                className={`group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${colors.hoverBorder} ${colors.glow}`}
              >
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-slate-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Icon Container */}
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${colors.bg} ${colors.text} ${colors.hoverBg} group-hover:text-white group-hover:shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="relative mt-5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-indigo-700">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="relative mt-5 h-0.5 w-10 rounded-full bg-slate-100 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}