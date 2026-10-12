import type { IAgentWiseIncomeReport } from "../../types/income.types";

interface AgentIncomeTableProps {
  report: IAgentWiseIncomeReport | undefined;
}

export function AgentIncomeTable({ report }: AgentIncomeTableProps) {
  if (!report) return null;

  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 p-4">
        <h2 className="text-base font-semibold text-indigo-600">
          Client Records : {report.summary.totalClients}
        </h2>
      </div>

      <div className="max-h-[350px] overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Client Name
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Email
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Mobile
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Agent
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Mortgage Date
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500">
                Loan Amount
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Status
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                Property Address
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {report.records.map((record) => (
              <tr key={record._id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm font-medium text-slate-800">
                  {record.client.prefix} {record.client.firstName}{" "}
                  {record.client.lastName}
                </td>

                <td className="px-4 py-3 text-sm text-slate-600">
                  {record.client.email || "—"}
                </td>

                <td className="px-4 py-3 text-sm text-slate-600">
                  {record.client.mobileNumber || "—"}
                </td>

                <td className="px-4 py-3 text-sm text-slate-600">
                  {record.agent.firstName} {record.agent.lastName}
                </td>

                <td className="px-4 py-3 text-sm text-slate-600">
                  {new Date(record.client.dateOfMortgage).toLocaleDateString(
                    "en-IN",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    },
                  )}
                </td>

                <td className="px-4 py-3 text-sm text-slate-800 text-right font-medium">
                  {Number(record.loanAmount || 0).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      record.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700"
                        : record.status === "In Progress"
                          ? "bg-blue-50 text-blue-700"
                          : record.status === "Pending"
                            ? "bg-rose-50 text-rose-700"
                            : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>

                <td className="px-4 py-3 text-sm text-slate-800 max-w-[220px]">
                  <p
                    className="line-clamp-2"
                    title={record.client.propertyAddress}
                  >
                    {record.client.propertyAddress}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
