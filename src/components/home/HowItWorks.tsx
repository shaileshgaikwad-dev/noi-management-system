export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Details",
      description:
        "Provide the required client, property, loan, and agent information.",
    },
    {
      number: "02",
      title: "Notice of Intimation Processing",
      description:
        "The Notice of Intimation work is organized and processed according to the required details.",
    },
    {
      number: "03",
      title: "Track Progress",
      description:
        "Keep track of the Notice of Intimation status throughout the processing workflow.",
    },
    {
      number: "04",
      title: "Completion",
      description:
        "Once the work is completed, the final status is updated and the record is maintained.",
    },
  ];

  return (
    <section  className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            A simple{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Notice of Intimation
            </span>{" "}
            workflow
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            A structured process helps keep the required information and Notice of Intimation
            work organized from start to completion.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connector line (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block">
            <div className="mx-auto h-px w-[85%] bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
          </div>

          <div data-aos="flip-up" className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-7">

                  {/* Number Circle */}
                  <div className="relative flex h-14 w-14 items-center justify-center">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40"></div>

                    {/* Circle with gradient border */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-600">
                        <span className="text-base font-bold text-indigo-600 transition-colors duration-300 group-hover:text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-indigo-700">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-0.5 w-10 rounded-full bg-slate-100 transition-all duration-500 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500"></div>

                  {/* Step badge (top-right corner) */}
                  <div className="absolute right-4 top-4 opacity-5 transition-opacity duration-300 group-hover:opacity-10">
                    <span className="text-5xl font-bold text-indigo-600">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}