import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useIncomeTrend } from "../../hooks/Dashboard/useIncomeTrend";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { useState } from "react";
import { getYears } from "../../utils/year";

export function MonthlyIncomeTrendChart() {
  const current_year = new Date().getFullYear();
  const [selectedYear , setSelectedYear] = useState(current_year);
  const years = getYears();
  const { chartData, loading } = useIncomeTrend(selectedYear);

  const hasData = chartData.some((item) => item.Income > 0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
      <svg
        className="h-5 w-5 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    </div>

    <div className="min-w-0">
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
        Monthly Income
      </h3>
      <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
        Income trend for {selectedYear}
      </p>
    </div>
  </div>

  <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">
    <select 
    value={selectedYear}
    onChange={(e)=>setSelectedYear(Number(e.target.value))}
    
    >
      {
        years.map((year)=>(<option key={year} value={year}>{year}</option>))
      }
    </select>
  </span>
</div>

      {loading ? (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : !hasData ? (
        <p className="py-10 text-center text-sm text-slate-400">
          No income recorded yet for year {current_year}.
        </p>
      ) : (
        <div className="h-64 w-full sm:h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis
                dataKey="name"
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="Income"
                stroke="#4F46E5"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#4F46E5" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}