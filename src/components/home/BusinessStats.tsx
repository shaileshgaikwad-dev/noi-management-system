import { useDashboard } from "../../hooks/Dashboard/useDashboard";
import { LoadingSpinner } from "../common/LoadingSpinner";

export function BusinessStats() {
  const { statusDashboard, loading } = useDashboard();

  const stats = [
    {
      value: loading ? (
        <LoadingSpinner />
      ) : (statusDashboard?.totalClients ?? 0) > 0 ? (
        `${statusDashboard.totalClients}+`
      ) : (
        "400+"
      ),
      label: "Notice of Intimation Cases Completed",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "indigo",
    },
    {
      value: `2020-${new Date().getFullYear()}`,
      label: "Business Experience",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "emerald",
    },
    {
      value: "Multiple",
      label: "Bank & NBFC Work",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      value: "End-to-End",
      label: "Notice of Intimation Tracking",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "amber",
    },
  ];

  const colorMap: Record<
    string,
    {
      iconBg: string;
      iconText: string;
      hoverBg: string;
      hoverBorder: string;
      glow: string;
      gradient: string;
    }
  > = {
    indigo: {
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-600",
      hoverBorder: "hover:border-indigo-300",
      glow: "hover:shadow-indigo-500/10",
      gradient: "from-indigo-600 to-indigo-400",
    },
    emerald: {
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      glow: "hover:shadow-emerald-500/10",
      gradient: "from-emerald-600 to-emerald-400",
    },
    purple: {
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
      hoverBg: "group-hover:bg-purple-600",
      hoverBorder: "hover:border-purple-300",
      glow: "hover:shadow-purple-500/10",
      gradient: "from-purple-600 to-purple-400",
    },
    amber: {
      iconBg: "bg-amber-50",
      iconText: "text-amber-600",
      hoverBg: "group-hover:bg-amber-600",
      hoverBorder: "hover:border-amber-300",
      glow: "hover:shadow-amber-500/10",
      gradient: "from-amber-600 to-amber-400",
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            Our Experience
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Experience you can{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              build on
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Our Notice of Intimation work focuses on organized processing,
            accurate records, and practical support for loan-related mortgage
            documentation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const colors = colorMap[stat.color];

            return (
              <div
                data-aos="zoom-in"
                key={stat.label}
                className={`group relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${colors.hoverBorder} ${colors.glow}`}
              >
                {/* Icon Container */}
                <div className="mx-auto flex justify-center">
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${colors.iconBg} ${colors.iconText} ${colors.hoverBg} group-hover:text-white group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Value with gradient */}
                <p
                  className={`mt-6 bg-gradient-to-r ${colors.gradient} bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl`}
                >
                  {stat.value}
                </p>

                {/* Label */}
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <div className="mx-auto mt-5 h-0.5 w-10 rounded-full bg-slate-100 transition-all duration-500 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
