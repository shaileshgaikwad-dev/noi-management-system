interface IAgentActions {
  onBack: () => void;
  isSubmitting: boolean;
  loading: boolean;
}

export function AgentActions({ onBack, isSubmitting, loading }: IAgentActions) {
  return (
    <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
      <button
        type="button"
        onClick={onBack}
        disabled={isSubmitting || loading}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-rose-500 hover:text-white disabled:opacity-60 sm:w-auto"
      >
        <svg
          className="h-4 w-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Cancel
      </button>

      <button
        type="submit"
        disabled={isSubmitting || loading}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-indigo-800 hover:shadow-indigo-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto md:flex-none"
      >
        {isSubmitting || loading ? (
          <>
            <svg
              className="h-4 w-4 flex-shrink-0 animate-spin"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Creating...
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create Agent
          </>
        )}
      </button>
    </div>
  );
}
