import { useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { useIncome } from "../../../hooks/Dashboard/useYearlyIncome";
import {
  exportIncomeToCSV,
  exportIncomeToExcel,
  exportIncomeToPDF,
} from "../../../utils/exportIncomeReport";
import { getYears } from "../../../utils/year";

export function IncomeReport() {
  const years = getYears();

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedYear = searchParams.get("year") || "all";
  const { income, loading } = useIncome(selectedYear);

  // Format currency
  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const stats = [
    {
      label: "Completed NOIs",
      value: income?.totalNois ?? 0,
      color: "indigo",
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
    },
    {
      label: "Total Loan Amount",
      value: formatCurrency(income?.totalLoanAmount),
      color: "emerald",
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
    },
    {
      label: "Government Charges",
      value: formatCurrency(income?.totalGovernmentCharges),
      color: "teal",
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
    },
    {
      label: "DHC Charges",
      value: formatCurrency(income?.totalDhc),
      color: "amber",
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
    },
    {
      label: "Intimation Income",
      value: formatCurrency(income?.totalIntimationIncome),
      color: "sky",
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
    },
    {
      label: "Total Amount Collected",
      value: formatCurrency(income?.totalAmountCollected),
      color: "rose",
      icon: (
        <svg
          className="h-6 w-6"
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
      ),
    },
  ];

  const colorMap = {
    indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
    emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
    teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-100",
    amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
    sky: "bg-sky-50 text-sky-600 group-hover:bg-sky-100",
    rose: "bg-rose-50 text-rose-600 group-hover:bg-rose-100",
  };

  const borderHoverMap = {
    indigo: "hover:border-indigo-300",
    emerald: "hover:border-emerald-300",
    teal: "hover:border-teal-300",
    amber: "hover:border-amber-300",
    sky: "hover:border-sky-300",
    rose: "hover:border-rose-300",
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 md:p-8">
        <div className="mx-auto max-w-8xl py-3 px-4 border border-indigo-300 rounded-lg">
          {/* Header */}
          <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 sm:h-10 sm:w-10">
              <svg
                className="h-4 w-4 text-indigo-600 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800 sm:text-2xl">
              Yearly Income Report
            </h2>
          </div>

          <p className="mb-6 px-4 text-center text-xs text-slate-500 sm:mb-8 sm:text-sm">
            Yearly Notice of Income and collection summary
          </p>

          {/* Year Selection */}
          <div className="mb-8 rounded-xl bg-white p-5 shadow-sm border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50">
                  <svg
                    className="h-4.5 w-4.5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <label className="text-sm font-medium  text-slate-700">
                  Select Financial Year
                </label>
              </div>

              <select
                value={selectedYear}
                onChange={(e) => setSearchParams({ year: e.target.value })}
                className="w-full sm:w-48 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
              >
                <option value="all">All</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    FY {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Income Summary Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group rounded-xl bg-white p-5 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${borderHoverMap[stat.color]}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-800">
                      {loading ? <LoadingSpinner /> : stat.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${colorMap[stat.color]}`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Export buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-5">
          <button
            type="button"
            onClick={() => {
              if (!income) return;
              exportIncomeToExcel(income, selectedYear);
            }}
            disabled={loading || !income}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white 
            hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Export Excel
          </button>

          <button
            type="button"
            onClick={() => {
              if (!income) return;
              exportIncomeToCSV(income, selectedYear);
            }}
            disabled={loading || !income}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white 
            hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Export CSV
          </button>

          <button
            type="button"
            onClick={() => {
              if (!income) return;
              exportIncomeToPDF(income, selectedYear);
            }}
            disabled={loading || !income}
            className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white 
            hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            Export PDF
          </button>
        </div>

        {/* Current Date */}
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
      </div>
    </>
  );
}
