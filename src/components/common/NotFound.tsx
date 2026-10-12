import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative w-full max-w-lg text-center">
        {/* 404 badge */}

        {/* Big 404 */}
        <p className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-8xl font-bold tracking-tight text-transparent sm:text-9xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0 sm:w-auto"
          >
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go to Home
          </Link>
        </div>

        {/* Footer line */}
        <p className="mt-10 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} NOI Management. All rights reserved.
        </p>
      </div>
    </div>
  );
}
