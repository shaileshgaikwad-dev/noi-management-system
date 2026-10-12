import { useNavigate } from "react-router-dom";

export function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add New Client",
      description: "Create a new client record",
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
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3M15 21a6 6 0 00-12 0M9 11a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
      iconStyle: "bg-indigo-50 text-indigo-600",
      hoverBg: "group-hover:bg-indigo-600",
      hoverBorder: "hover:border-indigo-300",
      glow: "hover:shadow-indigo-500/10",
      accent: "from-indigo-500 to-indigo-400",
      onClick: () => navigate("/admin/clients/add-client"),
    },
    {
      title: "Add New Agent",
      description: "Register a new agent",
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
            d="M18 20a6 6 0 00-12 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      iconStyle: "bg-blue-50 text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      hoverBorder: "hover:border-blue-300",
      glow: "hover:shadow-blue-500/10",
      accent: "from-blue-500 to-blue-400",
      onClick: () => navigate("/admin/agents/add"),
    },
    {
      title: "All Clients",
      description: "View and manage clients",
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
            d="M17 20a4 4 0 00-8 0M15 7a3 3 0 11-6 0 3 3 0 016 0zM21 20a4 4 0 00-3-3.87M19 7a3 3 0 01-1 5.83"
          />
        </svg>
      ),
      iconStyle: "bg-violet-50 text-violet-600",
      hoverBg: "group-hover:bg-violet-600",
      hoverBorder: "hover:border-violet-300",
      glow: "hover:shadow-violet-500/10",
      accent: "from-violet-500 to-violet-400",
      onClick: () => navigate("/admin/clients"),
    },
    {
      title: "All Agents",
      description: "View and manage agents",
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
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          />
        </svg>
      ),
      iconStyle: "bg-emerald-50 text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverBorder: "hover:border-emerald-300",
      glow: "hover:shadow-emerald-500/10",
      accent: "from-emerald-500 to-emerald-400",
      onClick: () => navigate("/admin/agents"),
    },
    {
      title: "Monthly Income",
      description: "View monthly income report",
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
            d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V5m0 9v3m-7-4a7 7 0 1014 0 7 7 0 00-14 0z"
          />
        </svg>
      ),
      iconStyle: "bg-amber-50 text-amber-600",
      hoverBg: "group-hover:bg-amber-600",
      hoverBorder: "hover:border-amber-300",
      glow: "hover:shadow-amber-500/10",
      accent: "from-amber-500 to-amber-400",
      onClick: () => navigate("/admin/income-report/monthly"),
    },
    {
      title: "Yearly Income",
      description: "View yearly income report",
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
      iconStyle: "bg-rose-50 text-rose-600",
      hoverBg: "group-hover:bg-rose-600",
      hoverBorder: "hover:border-rose-300",
      glow: "hover:shadow-rose-500/10",
      accent: "from-rose-500 to-rose-400",
      onClick: () => navigate("/admin/income-report"),
    },
  ];

  return (
    <section className="mt-8  rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Quick Actions
          </h2>
          <p className="mt-0.5 text-sm text-slate-500">
            Quickly access frequently used sections
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ">
        {actions.map((action) => (
          <button
            key={action.title}
            type="button"
            onClick={action.onClick}
            className={`group relative cursor-pointer flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${action.hoverBorder} ${action.glow} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            {/* Sliding gradient background */}
            <div
              className={`absolute inset-0 -translate-x-full bg-gradient-to-r ${action.accent} opacity-5 transition-transform duration-500 group-hover:translate-x-0`}
            ></div>

            {/* Icon */}
            <div
              className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${action.iconStyle} ${action.hoverBg} transition-all duration-300 group-hover:text-white group-hover:shadow-lg`}
            >
              {action.icon}
            </div>

            {/* Text */}
            <div className="relative min-w-0 flex-1">
              <p className="text-sm font-semibold text-slate-900 transition-colors duration-200">
                {action.title}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {action.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="relative flex-shrink-0">
              <svg
                className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-600"
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
            </div>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${action.accent} transition-all duration-500 group-hover:w-full`}
            ></div>
          </button>
        ))}
      </div>
    </section>
  );
}