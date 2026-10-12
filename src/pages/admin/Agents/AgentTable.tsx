import { useNavigate } from "react-router-dom";
import type { IAgentData } from "../../../types/agent.types";

interface AgentTableProps {
  agents: IAgentData[];
}

export function AgentTable({ agents }: AgentTableProps) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead>
          <tr className="bg-gradient-to-r from-slate-50 to-slate-100/50">
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Mobile
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {agents.map((agent, index) => (
            <tr
              key={agent._id}
              className={`group transition-all duration-200 hover:bg-indigo-50/50 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
              }`}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-50 text-sm font-semibold text-indigo-600 ring-2 ring-indigo-100">
                    {agent.firstName.charAt(0)}
                    {agent.lastName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {agent.firstName} {agent.lastName}
                    </p>
                    <p className="text-xs text-slate-400">
                      ID: {agent._id.slice(-6)}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {agent.email}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                {agent.mobileNumber}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 max-w-[150px] break-words line-clamp-2">
                {agent.officeAddress}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => navigate(`/admin/agents/edit/${agent._id}`)}
                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-indigo-600 transition-all duration-200 hover:bg-indigo-50"
                  >
                    Edit
                  </button>
                  <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
