export function PageHeader() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center text-center">
      {/* Icon + Title in same line */}
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
          <svg
            className="h-6 w-6 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Agent Wise Income Report
        </h1>
      </div>

      {/* Subtitle below */}
      <p className="mt-3 text-sm text-gray-500 max-w-md">
        Filter income records by agent, year and month.
      </p>
    </div>
  );
}