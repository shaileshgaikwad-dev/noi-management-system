import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact-new" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      {/* Subtle top gradient line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left - Brand */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2.5"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"></div>

              <svg
                className="relative h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
                Notice of Intimation
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:block">
                Management System
              </span>
            </div>
          </Link>

          {/* Center - Desktop Nav with animated underline */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-slate-600 hover:text-slate-900"
                  } group`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ${
                        isActive ? "w-8" : "w-0 group-hover:w-8"
                      }`}
                    />

                    {/* Glow on active */}
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-lg bg-indigo-50/50"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right - Login Button (Desktop) */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Link
              to="/admin/login"
              className="inline-flex items-center justify-center rounded border border-indigo-600 bg-transparent px-4 py-2 text-sm font-medium uppercase tracking-wider text-indigo-600 transition-colors duration-200 hover:border-indigo-700 hover:bg-indigo-600/8 active:border-indigo-800 active:bg-indigo-600/16"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
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
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 shadow-sm"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Dot indicator */}
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-600"
                        : "bg-slate-300 group-hover:bg-indigo-400"
                    }`}
                  />
                  {link.label}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/admin/login"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2.5 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
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
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
