import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact-new" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="h-5 w-5 text-white"
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
              <span className="text-lg font-bold tracking-tight text-white">
                Notice of Intimation Management
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              A structured system for managing Notice of Intimation work,
              clients, agents, processing details, status tracking, and
              business records.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Secure
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Reliable
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <nav className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span className="h-px w-0 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-4"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919545662596?text=Hi%20Shailesh%2C%20I%20want%20to%20know%20more%20about%20NOI%20Management."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-800/40 px-3 py-2.5 transition-all duration-200 hover:border-emerald-500/50 hover:bg-slate-800"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">WhatsApp</p>
                  <p className="truncate text-sm font-medium text-slate-300 group-hover:text-white">
                    +91 95456 62596
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:shailesh.gaikwad078@gmail.com?subject=Enquiry%20about%20NOI%20Management"
                className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-800/40 px-3 py-2.5 transition-all duration-200 hover:border-indigo-500/50 hover:bg-slate-800"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="truncate text-sm font-medium text-slate-300 group-hover:text-white">
                    officialnoimanagement@gmail.com
                  </p>
                </div>
              </a>

              {/* Contact Us button */}
              <Link
                to="/contact-new"
                className="group mt-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                Contact Us
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-500">
              &copy; {currentYear}{" "}
              <span className="font-medium text-slate-400">
                Notice of Intimation Management
              </span>
              . All rights reserved.
            </p>

            <p className="text-xs text-slate-500">
              Built with{" "}
              <span className="font-medium text-indigo-400">care</span> for
              organized business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}