import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a Notice of Intimation?",
      answer:
        "A Notice of Intimation is related to the mortgage of a property when a borrower takes a loan against the property.",
    },
    {
      question: "Who may need Notice of Intimation services?",
      answer:
        "Notice of Intimation-related work may be required for borrowers and parties involved in property mortgage transactions with banks or financial institutions.",
    },
    {
      question:
        "What information is required for Notice of Intimation processing?",
      answer:
        "The required information can include client details, property information, loan details, and other information needed for the Notice of Intimation process.",
    },
    {
      question: "Can I track the status of my Notice of Intimation work?",
      answer:
        "Yes. Notice of Intimation work can be tracked through statuses such as Pending, In Progress, and Completed.",
    },
    {
      question: "How can I get in touch?",
      answer:
        "You can contact us through the Contact Us section and provide your details and enquiry.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 sm:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="zoom-out" className="text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Recently asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Find answers to some common questions about Notice of Intimation and
            our services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                data-aos="zoom-in-down"
                key={faq.question}
                className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-300 shadow-lg shadow-indigo-500/10"
                    : "border-slate-200 hover:border-indigo-200 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  {/* Left: number + question */}
                  <div className="flex items-center gap-4">
                    {/* Number badge */}
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30"
                          : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${
                        isOpen
                          ? "text-indigo-700"
                          : "text-slate-900 group-hover:text-indigo-600"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron icon */}
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-indigo-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                    }`}
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
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer — smooth height animation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-100 px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex gap-4">
                      {/* Left accent line */}
                      <div className="h-full w-0.5 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                      <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Still have a question?{" "}
            <a
              href="/contact-new"
              className="font-semibold text-indigo-600 underline decoration-indigo-300 decoration-2 underline-offset-4 transition-colors hover:text-indigo-700 hover:decoration-indigo-500"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
