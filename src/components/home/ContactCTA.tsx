import { Link } from "react-router-dom";

export function ContactCTA() {
  return (
    <section data-aos="fade-up" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 py-20 sm:py-28">
      {/* Decorative patterns */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-purple-400/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-400/20 blur-3xl"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Floating dots */}
        <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-white/30"></div>
        <div className="absolute left-[80%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/40"></div>
        <div className="absolute left-[25%] bottom-[25%] h-1 w-1 rounded-full bg-white/25"></div>
        <div className="absolute right-[20%] bottom-[35%] h-2 w-2 rounded-full bg-white/20"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          Need help with your{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">
              Notice of Intimation
            </span>
            {/* Underline accent */}
            <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
          </span>{" "}
          work?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-indigo-100 sm:text-lg sm:leading-8">
          Have a question about Notice of Intimation services or want to discuss
          your requirements? Get in touch with us.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact-new"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-indigo-700 shadow-2xl shadow-indigo-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-900/60 sm:px-10 sm:text-base"
          >
            {/* Gradient overlay on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-50 via-white to-indigo-50 transition-transform duration-500 group-hover:translate-x-0"></span>

            {/* Content */}
            <span className="relative">Contact Us</span>
            <svg
              className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-indigo-200">
          <div className="flex items-center gap-2">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Quick response</span>
          </div>
          <span className="hidden h-3 w-px bg-white/20 sm:block"></span>
          <div className="flex items-center gap-2">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Trusted service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
