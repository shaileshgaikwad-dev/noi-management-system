const clients = [
  { name: "LIC Housing Finance", shortName: "LIC HFL" },
  { name: "Central Bank of India", shortName: "Central Bank" },
  { name: "NBFC", shortName: "NBFC" },
  {name:"Bandhan Bank" ,shortName :"Bandhan Bank"}
];

export function ClientsCarousel() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Our Network
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Banks &amp; Financial{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Institutions
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Supporting Notice of Intimation processing for banks, housing
            finance companies and financial institutions.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-24" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-24" />

          {/* Track */}
          <div className="flex w-max animate-[scroll_25s_linear_infinite] gap-4 hover:[animation-play-state:paused] sm:gap-5">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group relative flex h-28 w-56 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 sm:w-64"
              >
                {/* Top accent bar */}
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Subtle corner glow on hover */}
                <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100/50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative text-center">
                  <div className="mb-1 text-lg font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-xl">
                    {client.shortName}
                  </div>
                  <div className="text-xs font-medium tracking-wide text-slate-500">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-slate-200" />
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Trusted across Maharashtra
          </p>
          <span className="h-px w-10 bg-slate-200" />
        </div>
      </div>

      {/* Tailwind arbitrary keyframes */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
