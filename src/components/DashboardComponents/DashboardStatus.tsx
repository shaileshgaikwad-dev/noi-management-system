import { useDashboard } from "../../hooks/Dashboard/useDashboard";
import { LoadingSpinner } from "../common/LoadingSpinner";

export function DashboardStatus() {
  const { statusDashboard, loading } = useDashboard();

  // Stats data
  const stats = [
    {
      label: "Total Agents",
      value: loading ? <LoadingSpinner /> : statusDashboard.totalAgents,
      borderColor: "border-l-indigo-500",
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-600",
      glow: "hover:shadow-indigo-500/10",
      hoverBorder: "hover:border-indigo-200",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Total Clients",
      value: loading ? <LoadingSpinner /> : statusDashboard.totalClients,
      borderColor: "border-l-emerald-500",
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      glow: "hover:shadow-emerald-500/10",
      hoverBorder: "hover:border-emerald-200",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      label: "Total Notice of Intimation",
      value: loading ? <LoadingSpinner /> : statusDashboard.totalNois,
      borderColor: "border-l-blue-500",
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      glow: "hover:shadow-blue-500/10",
      hoverBorder: "hover:border-blue-200",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      label: "Pending Notice of Intimation",
      value: loading ? <LoadingSpinner /> : statusDashboard.pendingNois,
      borderColor: "border-l-amber-500",
      iconBg: "bg-amber-50",
      iconText: "text-amber-600",
      glow: "hover:shadow-amber-500/10",
      hoverBorder: "hover:border-amber-200",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Completed Notice of Intimation",
      value: loading ? <LoadingSpinner /> : statusDashboard.completedNois,
      borderColor: "border-l-green-500",
      iconBg: "bg-green-50",
      iconText: "text-green-600",
      glow: "hover:shadow-green-500/10",
      hoverBorder: "hover:border-green-200",
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
    },
    {
      label: `${new Date().toLocaleString("en-IN", { month: "long" })} Income`,
      value: loading ? (
        <LoadingSpinner />
      ) : (
        statusDashboard.monthlyIncome.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })
      ),
      borderColor: "border-l-purple-500",
      iconBg: "bg-purple-50",
      iconText: "text-purple-600",
      glow: "hover:shadow-purple-500/10",
      hoverBorder: "hover:border-purple-200",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      label: `${new Date().getFullYear()} Year Income`,
      value: loading ? (
        <LoadingSpinner />
      ) : (
        statusDashboard.yearlyIncome.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })
      ),
      borderColor: "border-l-rose-500",
      iconBg: "bg-rose-50",
      iconText: "text-rose-600",
      glow: "hover:shadow-rose-500/10",
      hoverBorder: "hover:border-rose-200",
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
            d="M3 3v18h18M7 16v-4m5 4V8m5 8V5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/30">
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Dashboard Overview
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              A quick snapshot of agents, clients,{" "}
              <span className="font-semibold text-indigo-600">
                Notice of Intimation,
              </span>{" "}
              and income.
            </p>
          </div>
        </div>

        {/* Live indicator */}
        {!loading && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            Live
          </span>
        )}
      </div>

      {/* Stats Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`group relative overflow-hidden rounded-xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${stat.borderColor} ${stat.hoverBorder} ${stat.glow}`}
          >
            {/* Corner accent */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Icon + Label Row */}
            <div className="relative flex items-start justify-between gap-3">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
              <div
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${stat.iconBg} ${stat.iconText} transition-transform duration-300 group-hover:scale-110`}
              >
                {stat.icon}
              </div>
            </div>

            {/* Value */}
            <div className="relative mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
