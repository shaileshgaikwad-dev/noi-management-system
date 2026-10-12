export function AgentHeader() {
  return (
    <div className="mb-5 border-b border-slate-100 pb-4 sm:mb-6 sm:pb-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        {/* Icon */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100 sm:h-11 sm:w-11">
          <svg
            className="h-5 w-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </div>

        {/* Title + description */}
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
            Create New Agent
          </h2>

          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            Add the agent's contact and office details so they can be linked to
            clients and{" "}
            <span className="font-medium text-indigo-600">
              Notice of Intimation
            </span>{" "}
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
