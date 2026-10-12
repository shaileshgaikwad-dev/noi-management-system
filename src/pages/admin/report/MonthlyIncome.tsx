import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { Months } from "../../../constants/month";
import { useSearchParams } from "react-router-dom";
import { useMonthlyIncome } from "../../../hooks/Dashboard/useMonthlyIncome";
import { getYears } from "../../../utils/year";

export function MonthlyIncome() {
  const years = getYears();

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedYear = searchParams.get("year");
  const selectedMonth = searchParams.get("month");

  const { monthlyIncome, loading } = useMonthlyIncome(
    selectedYear ? Number(selectedYear) : null,
    selectedMonth ? Number(selectedMonth) : null,
  );

  // Format currency
  const formatCurrency = (amount: number | undefined) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  return (
    <>
      <section className="mt-10  rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-indigo-300">
        {/* Header */}
        <div className="mb-8 ">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
              <svg
                className="h-5 w-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Monthly Income Report
            </h2>
          </div>
          <p className="text-center text-sm text-slate-500">
            View completed Notice of Intimation and government charges for a
            specific month.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 rounded-xl bg-slate-50 p-5 border border-slate-200">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Year */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Select Year
              </label>
              <div className="relative">
                <select
                  value={selectedYear ?? ""}
                  onChange={(e) => {
                    setSearchParams({
                      year: e.target.value,
                      ...(selectedMonth ? { month: selectedMonth } : null),
                    });
                  }}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Month */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Select Month
              </label>
              <div className="relative">
                <select
                  value={selectedMonth ?? ""}
                  disabled={!selectedYear}
                  onChange={(e) => {
                    setSearchParams({
                      month: e.target.value,
                      ...(selectedYear ? { year: selectedYear } : null),
                    });
                  }}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-100 disabled:cursor-not-allowed cursor-pointer"
                >
                  <option value="">Select Month</option>
                  {Months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Initial state */}
        {!selectedYear || !selectedMonth ? (
          <div className="rounded-xl border-2 border-dashed border-slate-200 p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <svg
                  className="h-8 w-8 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-slate-700">
              No Report Generated
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Please select both year and month to view the report
            </p>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : (
          /* Report Cards */
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Completed NOIs */}
            <div className="group rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-indigo-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Completed NOIs
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-800">
                    {monthlyIncome?.totalNois ?? 0}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="group rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-emerald-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Loan Amount
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-800">
                    {formatCurrency(monthlyIncome?.totalLoanAmount)}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                  <svg
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Government Charges */}
            <div className="group rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-teal-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Government Charges
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-800">
                    {formatCurrency(monthlyIncome?.totalGovernmentCharges)}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* DHC Charges */}
            <div className="group rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-amber-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    DHC Charges
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-800">
                    {formatCurrency(monthlyIncome?.totalDhc)}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  <svg
                    className="h-6 w-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Intimation Income */}
            <div className="group rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-sky-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Intimation Income
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-800">
                    {formatCurrency(monthlyIncome?.totalIntimationIncome)}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                  <svg
                    className="h-6 w-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Total Collected */}
            <div className="group rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-rose-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Total Amount Collected
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-800">
                    {formatCurrency(monthlyIncome?.totalAmountCollected)}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50">
                  <svg
                    className="h-6 w-6 text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-400">
          Data updated as of{" "}
          {new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </>
  );
}
