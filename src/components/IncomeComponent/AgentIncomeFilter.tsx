import { useSearchParams } from "react-router-dom";
import { useAgents } from "../../hooks/Agents/useAgent";
import { getYears } from "../../utils/year";
import { Months } from "../../constants/month";
import { useEffect, useState } from "react";

export function AgentIncomeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const committedAgent = searchParams.get("agent") || "";
  const committedYear = searchParams.get("year") || "";
  const committedMonth = searchParams.get("month") || "";

  const [agent, setAgent] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  useEffect(() => {
    setAgent(committedAgent);
    setYear(committedYear);
    setMonth(committedMonth);
  }, [committedAgent, committedYear, committedMonth]);

  const { agents } = useAgents();
  const years = getYears();

  const handleSearch = () => {
    const params = new URLSearchParams();

    params.set("agent", agent);
    params.set("year", year);
    params.set("month", month);
    setSearchParams(params);
  };

  const handleReset = () => {
    setAgent("");
    setYear("");
    setMonth("");
    setSearchParams({});
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-gray-50 p-5 shadow-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Agent */}

        <div>
          <label
            htmlFor=""
            className="mb-1 block text-sm font-medium text-gray-800"
          >
            Select Agent
          </label>
          <select
            id="agent"
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none 
                    focus:border-blue-600 focus:ring-1 focus:ring-blue-500 bg-white uppercase "
          >
            <option value="">Select Agent</option>
            <option value="all">All Agents</option>

            {agents.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.firstName} {agent.lastName}
              </option>
            ))}
          </select>
        </div>
        {/* year */}
        <div>
          <label
            htmlFor=""
            className="mb-1 block text-sm font-medium text-gray-800"
          >
            Select Year
          </label>
          <select
            value={year}
            disabled={!agent}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-white rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none 
                    focus:border-blue-600 uppercase focus:ring-1 focus:ring-blue-500 disabled:bg-slate-100 disabled:cursor-not-allowed cursor-pointer"
          >
            <option value="">Select Year</option>
            <option value="all">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Month */}
        <div>
          <label
            htmlFor=""
            className="mb-1 block text-sm font-medium text-gray-800"
          >
            Select Month
          </label>
          <select
            value={month}
            disabled={!year || !agent}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full rounded-lg bg-white border border-gray-300 px-3 py-2.5 text-sm outline-none uppercase
                    focus:border-blue-600 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-100 disabled:cursor-not-allowed cursor-pointer"
          >
            <option value="">Select Month</option>
            <option value="all">All Months</option>
            {Months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Buttons */}

      <div className="mt-5 flex justify-end gap-3">
        <button
          onClick={handleReset}
          className="rounded-lg border cursor-pointer border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          Reset
        </button>
        <button
          onClick={handleSearch}
          disabled={!agent || !year || !month}
          className="rounded-lg cursor-pointer bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}
