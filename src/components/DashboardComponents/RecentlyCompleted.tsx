import { useRecentActivities } from "../../hooks/Dashboard/useDashboard";
import { LoadingSpinner } from "../common/LoadingSpinner";

export function RecentlyCompleted() {
  const { recentActivities, loading } = useRecentActivities();

  return (
    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
      {/* header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
            <svg
              className="h-5 w-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
              Recently Created
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 sm:mt-1 sm:text-sm">
              Latest created Notice of Intimation work
            </p>
          </div>
        </div>

        <span className="inline-flex w-fit flex-shrink-0 items-center gap-1.5 self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Created
        </span>
      </div>

      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : recentActivities.length === 0 ? (
        <>
          <div className="mt-5 flex items-center justify-center rounded-lg border border-blue-400 py-12">
            <p className="text-sm text-slate-400">
              No completed{" "}
              <span className="text-blue-500">Notice of Intimation</span> to
              show
            </p>
          </div>
        </>
      ) : (
        // Completed activities
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {recentActivities.map((activity) => (
              <div
                key={activity._id}
                className="group rounded-lg border-2 border-green-300 bg-white p-4 text-center 
                transition-all duration-100 cursor-pointer 
                hover:border-rose-500 hover:shadow-sm hover:-translate-y-0.5
                focus:outline focus:ring-rose-2 focus:ring-rose-500 "
              >
                <p className="text-sm font-medium text-slate-800 truncate">
                  {activity.client
                    ? `${activity.client.firstName} ${activity.client.lastName}`
                    : "Client unavailable"}
                </p>
                <p className="text-sm text-slate-400">
                  {new Date(activity.createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
