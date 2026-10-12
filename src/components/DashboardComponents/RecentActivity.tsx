import { useRecentActivities } from "../../hooks/Dashboard/useDashboard";
import { LoadingSpinner } from "../common/LoadingSpinner";

export function RecentActivity() {
  const { recentActivities, loading } = useRecentActivities();

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/30">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Recent Activity
            </h2>
          </div>
          <p className="mt-1.5 text-sm text-slate-500">
            Latest updates on your Notice of Intimation work
          </p>
        </div>

        {/* Live indicator */}
        {!loading && recentActivities.length > 0 && (
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 sm:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            Live
          </span>
        )}
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-12">
          <LoadingSpinner />
        </div>
      ) : recentActivities.length === 0 ? (
        /* Empty State */
        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <svg
              className="h-6 w-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-600">
            No recent activity
          </p>
          <p className="mt-1 text-xs text-slate-400">
            New Notice of Intimation updates will appear here
          </p>
        </div>
      ) : (
        /* Activities */
        <div className="mt-6 max-h-[350px] space-y-3 overflow-y-auto pr-1">
          {recentActivities.map((activity) => {
            const isCompleted = activity.status === "Completed";
            const isInProgress = activity.status === "In Progress";

            const iconStyle = isCompleted
              ? "bg-emerald-50 text-emerald-600 ring-emerald-100"
              : isInProgress
                ? "bg-blue-50 text-blue-600 ring-blue-100"
                : "bg-amber-50 text-amber-600 ring-amber-100";

            const badgeStyle = isCompleted
              ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
              : isInProgress
                ? "bg-blue-50 text-blue-700 ring-blue-200"
                : "bg-amber-50 text-amber-700 ring-amber-200";

            const accentBorder = isCompleted
              ? "border-l-emerald-400"
              : isInProgress
                ? "border-l-blue-400"
                : "border-l-amber-400";

            return (
              <div
                key={activity._id}
                className={`group relative flex gap-4 rounded-xl border border-slate-100 border-l-4 ${accentBorder} bg-white px-4 py-4 transition-all duration-200 hover:border-slate-200 hover:shadow-sm`}
              >
                {/* Status Icon */}
                <div
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-4 ${iconStyle} transition-transform duration-200 group-hover:scale-110`}
                >
                  {isCompleted ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="9" strokeWidth={2} />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 2"
                      />
                    </svg>
                  )}
                </div>

                {/* Activity Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="text-sm leading-relaxed text-slate-600">
                      Notice of Intimation for{" "}
                      <span className="font-semibold text-indigo-600">
                        {activity.client
                          ? `${activity.client.firstName} ${activity.client.lastName}`
                          : "Client unavailable"}
                      </span>{" "}
                      was received from agent{" "}
                      <span className="font-semibold text-indigo-600">
                        {activity.agent
                          ? `${activity.agent.firstName} ${activity.agent.lastName}`
                          : "Agent unavailable"}
                      </span>
                      .
                    </p>

                    <span
                      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${badgeStyle}`}
                    >
                      {activity.status}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="mt-2 flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs text-slate-400">
                      {new Date(activity.updatedAt).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
