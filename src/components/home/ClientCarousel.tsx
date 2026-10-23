const clients = [
  { name: "SBI", shortName: "SBI" },
  { name: "LIC Housing Finance", shortName: "LIC HFL" },
  { name: "Bandhan Bank", shortName: "BANDHAN BANK" },
  { name: "Central Bank of India", shortName: "CENTRAL BANK" },
  { name: "Aadhar Housing Finance Ltd", shortName: "AADHAR HOUSING FINANCE" },
  { name: "Mannapuram Home Finance Ltd", shortName: "MANNAPURAM HOME FINANCE" },
  { name: "Bank of India", shortName: "BANK OF INDIA" },
];

export function ClientsCarousel() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      data-aos="fade-up"
      className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div data-aos="fade-up" className="mx-auto mb-12 max-w-2xl text-center">
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
        <div data-aos="fade-up" data-aos-delay="200" className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-24" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-24" />

          {/* Track */}
          <div className="flex w-max animate-[scroll_25s_linear_infinite] items-center gap-10 sm:gap-14">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="shrink-0 whitespace-nowrap text-lg font-bold tracking-tight text-slate-700 sm:text-xl"
              >
                {client.shortName}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 flex w-full items-center justify-center gap-3">
          <span className="h-px w-10 shrink-0 bg-slate-200" />
          <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400">
            Trusted across Maharashtra
          </p>
          <span className="h-px w-10 shrink-0 bg-slate-200" />
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
