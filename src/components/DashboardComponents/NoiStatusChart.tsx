import {
  Legend,
  Pie,
  PieChart,
  Sector,
  Tooltip,
  type PieSectorDataItem,
} from "recharts";

interface NoiStatusChartsProps {
  pendingNois: number;
  completedNois: number;
  totalNois: number;
}

const COLORS = {
  completed: "#10B981",
  pending: "#F59E0B",
  other: "#94A3B8",
};

export function NoiStatusChart({
  pendingNois,
  completedNois,
  totalNois,
}: NoiStatusChartsProps) {
  const accountedFor = pendingNois + completedNois;
  const other = Math.max(0, totalNois - accountedFor);

  const data = [
    { name: "Completed", value: completedNois, color: COLORS.completed },
    { name: "Pending/In Progress", value: pendingNois, color: COLORS.pending },
    ...(other > 0
      ? [{ name: "Other", value: other, color: COLORS.other }]
      : []),
  ];

  const hasData = totalNois > 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 md:p-6">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
            <svg
              className="h-5 w-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              NOI Status Breakdown
            </h3>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Distribution of all cases
            </p>
          </div>
        </div>

        {hasData && (
          <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
            {totalNois} total
          </span>
        )}
      </div>

      {/* Chart */}
      {!hasData ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/60 py-12 text-center">
          <svg
            className="h-8 w-8 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
          <p className="mt-3 text-sm font-medium text-slate-600">
            No NOI records found
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Cases will appear here once created
          </p>
        </div>
      ) : (
        <div className="h-56 w-full sm:h-64 md:h-72">
          <PieChart responsive style={{ width: "100%", height: "100%" }}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={2}
              shape={(props: PieSectorDataItem) => (
                <Sector
                  {...props}
                  fill={props.payload?.color ?? COLORS.other}
                />
              )}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                fontSize: "12px",
                padding: "8px 12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
              formatter={(value, name) => [
                `${Number(value)} cases`,
                String(name),
              ]}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "8px",
              }}
            />
          </PieChart>
        </div>
      )}
    </div>
  );
}
