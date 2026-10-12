import { usePendingInProgressActivity } from "../../hooks/Dashboard/useDashboard";
import { LoadingSpinner } from "../common/LoadingSpinner";

export function PendingInprogress() {
  const { loading, pendingInProgressClients } = usePendingInProgressActivity();

  return (
    <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          {/* Pending SVG Icon */}
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50">
            <svg
              className="h-5 w-5 text-amber-600"
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
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Pending or In Progress
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Notice of Intimation work needing attention
            </p>
          </div>
        </div>

        {/* Pending badge */}
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-200">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
          {pendingInProgressClients.length} pending
        </span>
      </div>

      {/* Content */}
      {loading ? (
        <div className="py-12 flex justify-center">
          <LoadingSpinner />
        </div>
      ) : pendingInProgressClients.length === 0 ? (
        /* Empty State */
        <div className="mt-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/50 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
            <svg
              className="h-7 w-7 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-700">
            All Caught Up!
          </h3>
          <p className="mt-1 max-w-sm text-sm text-slate-500">
            No pending or in-progress{" "}
            <span className="font-medium text-slate-600">
              Notice of Intimation
            </span>{" "}
            at the moment.
          </p>
        </div>
      ) : (
        /* List */
        <div className="mt-6 max-h-[400px] space-y-3 overflow-y-auto pr-2">
          {pendingInProgressClients.map((activity) => (
            <div
              key={activity._id}
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all duration-200  hover:border-indigo-600 hover:shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Left: Client + Agent + Date */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 min-w-0 flex-1">
                  {/* Client */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-400 flex-shrink-0">
                      Client
                    </span>
                    <p className="text-sm font-medium text-blue-600 truncate">
                      {activity.client.firstName}{" "}
                      {activity.client.middleName
                        ? `${activity.client.middleName} `
                        : ""}
                      {activity.client.lastName}
                    </p>
                  </div>

                  {/* Divider */}
                  <span className="hidden sm:block h-4 w-px bg-slate-200 flex-shrink-0"></span>

                  {/* Agent */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-400 flex-shrink-0">
                      Agent
                    </span>
                    <p className="text-sm text-red-400 font-semibold truncate">
                      {activity.agent.firstName} {activity.agent.lastName}
                    </p>
                  </div>

                  {/* Divider */}
                  <span className="hidden sm:block h-4 w-px bg-slate-200 flex-shrink-0"></span>

                  {/* Date */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-400 flex-shrink-0">
                      Date
                    </span>
                    <p className="text-sm text-slate-700 whitespace-nowrap">
                      {new Date(activity.createdAt).toLocaleDateString(
                        "en-IN",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>

                {/* Right: Status Badge */}
                <div className="flex-shrink-0 self-start sm:self-center">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      activity.status === "In Progress"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-amber-50 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
