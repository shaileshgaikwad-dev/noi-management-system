

interface ICreateClientHeader {

    onBack : () => void;
}


export function CreateClientHeader({onBack}:ICreateClientHeader){

    return(

         <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:mb-6 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            {/* Icon */}
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50">
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-semibold text-slate-800 sm:text-xl md:text-2xl">
                Create New Client
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Add client information and mortgage details
              </p>
            </div>

            {/* Back button */}
            <div className="flex sm:items-center">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-black hover:bg-slate-900 hover:text-white sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
    )
}