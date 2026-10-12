import { useSearchParams } from "react-router-dom";
import { useAgentWiseIncomeReport } from "../../../hooks/Dashboard/useAgentIncome";
import { PageHeader } from "../../../components/common/PageHeader";
import { AgentIncomeFilter } from "../../../components/IncomeComponent/AgentIncomeFilter";
import { exportAgentIncomeToExcel } from "../../../utils/exportAgentIncomereport";
import { exportAgentIncomePdf } from "../../../utils/exportAgentIncomePdf";
import { AgentIncomeTable } from "../../../components/IncomeComponent/AgentIncomeTable";
import { CurrentDate } from "../../../components/common/Date";

export function AgentIncomeReport() {
  const [searchParams, setSearchParams] = useSearchParams();

  const agent = searchParams.get("agent");
  const year = searchParams.get("year");
  const month = searchParams.get("month");

  const { agentWiseIncome, loading } = useAgentWiseIncomeReport(
    agent || "",
    year || "",
    month || "",
  );

  const isFilterSelected =
    searchParams.has("agent") &&
    searchParams.has("year") &&
    searchParams.has("month");

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 border border-indigo-400 rounded-lg">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <PageHeader />

        {/* Filters */}
        <AgentIncomeFilter />

        {/* result check */}

        {!isFilterSelected ? (
          <div className="mt-6 rounded-xl border-2 border-dashed border-slate-300 bg-white p-10 flex flex-col items-center justify-center text-center">
            {/* Icon */}
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-base font-semibold text-slate-700">
              No Report Selected
            </h3>

            {/* Description */}
            <p className="mt-1 text-sm text-slate-500 max-w-sm">
              Select agent, year and month to view the income report.
            </p>
          </div>
        ) : (
          <>
            {!loading && agentWiseIncome?.summary && (
              <div className="mt-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-slate-800">
                    Report Summary
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Overview of income and collections
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Total NOIs */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        Total NOIs
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50">
                        <svg
                          className="h-4 w-4 text-indigo-600"
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
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      {agentWiseIncome.summary.totalNois}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {agentWiseIncome.summary.completedNois} completed
                    </p>
                  </div>

                  {/* Total Loan Amount */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        Loan Amount
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                        <svg
                          className="h-4 w-4 text-emerald-600"
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
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      
                      {Number(
                        agentWiseIncome.summary.totalLoanAmount || 0,
                      ).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Total disbursed
                    </p>
                  </div>

                  {/* Government Charges */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-teal-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        Government Charges
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50">
                        <svg
                          className="h-4 w-4 text-teal-600"
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
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      
                      {Number(
                        agentWiseIncome.summary.totalGovernmentCharges || 0,
                      ).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Collected by govt
                    </p>
                  </div>

                  {/* Total Collected */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-rose-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        Total Collected
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50">
                        <svg
                          className="h-4 w-4 text-rose-600"
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
                    <p className="mt-3 text-2xl font-semibold text-indigo-600">
                      
                      {Number(
                        agentWiseIncome.summary.totalAmountCollected || 0,
                      ).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Net amount collected
                    </p>
                  </div>
                </div>

                {/* Secondary Stats Row */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* In Progress NOIs */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        In Progress NOIs
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      {agentWiseIncome.summary.inProgressNois || 0}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Currently processing
                    </p>
                  </div>

                  {/* Intimation Income */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-sky-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        Intimation Income
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50">
                        <svg
                          className="h-4 w-4 text-sky-600"
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
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      
                      {Number(
                        agentWiseIncome.summary.totalIntimationIncome || 0,
                      ).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Your income</p>
                  </div>

                  {/* DHC */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        DHC Charges
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50">
                        <svg
                          className="h-4 w-4 text-amber-600"
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
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      
                      {Number(
                        agentWiseIncome.summary.totalDhc || 0,
                      ).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Fixed charges</p>
                  </div>

                  {/* Completed NOIs */}
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-green-300 transition-all">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        Completed
                      </p>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                        <svg
                          className="h-4 w-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-3 text-2xl font-semibold text-slate-800">
                      {agentWiseIncome.summary.completedNois}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      of {agentWiseIncome.summary.totalNois} total
                    </p>
                  </div>
                </div>
                <AgentIncomeTable report={agentWiseIncome} />
                {/* Export buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                  <button
                    onClick={() => {
                      if (agentWiseIncome) {
                        exportAgentIncomeToExcel(agentWiseIncome);
                      }
                    }}
                    disabled={!agentWiseIncome}
                    className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Export to Excel
                  </button>

                  <button
                    onClick={() => {
                      if (agentWiseIncome) {
                        exportAgentIncomePdf(agentWiseIncome);
                      }
                    }}
                    disabled={!agentWiseIncome}
                    className="w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Export PDF
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/*Current Date */}
        <CurrentDate />
      </div>
    </div>
  );
}
