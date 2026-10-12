import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateClientFormData } from "../../../schemas/createClientSchema";
import type { IAgentData } from "../../../types/agent.types";

interface IClientMortgageInformation {
  register: UseFormRegister<CreateClientFormData>;
  errors: FieldErrors<CreateClientFormData>;
  agents: IAgentData[];
  agentsLoading: boolean;
  loading: boolean;
}

export function MortgageInformation({
  register,
  errors,
  agents,
  agentsLoading,
  loading,
}: IClientMortgageInformation) {
  return (
    <div className="border-b border-slate-100/80 bg-slate-50 p-4 sm:p-6 md:p-8">
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-sm font-bold text-white shadow-md shadow-amber-200">
            2
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-800 sm:text-lg">
              Mortgage Information
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              Enter the loan and mortgage details.
            </p>
          </div>
        </div>
        <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-400 sm:self-auto">
          Step 2 of 3
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
        {/* Agent */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Select Agent <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              {...register("agent")}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
            >
              <option value="">
                {agentsLoading ? "Loading Agents..." : "Select an agent"}
              </option>
              {agents.map((agent: any) => (
                <option key={agent._id} value={agent._id}>
                  {agent.firstName} {agent.lastName}
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
          {errors.agent && (
            <p className="mt-1 text-sm text-rose-500">{errors.agent.message}</p>
          )}
        </div>

        {/* Loan Amount */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Loan Amount <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 sm:left-4">
              ₹
            </span>
            <input
              type="number"
              {...register("loanAmount", { valueAsNumber: true })}
              placeholder="0"
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-8 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:py-3 sm:pr-4"
            />
          </div>
          {errors.loanAmount && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.loanAmount.message}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Date of Mortgage <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            {...register("dateOfMortgage")}
            min="2019-12-31"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          />
          {errors.dateOfMortgage && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.dateOfMortgage.message}
            </p>
          )}
        </div>

        {/* Intimation Charges */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Intimation Charges
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 sm:left-4">
              ₹
            </span>
            <input
              type="number"
              {...register("intimationCharges", { valueAsNumber: true })}
              placeholder="0"
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-8 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:py-3 sm:pr-4"
            />
          </div>
          {errors.intimationCharges && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.intimationCharges.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Status
          </label>
          <select
            {...register("status")}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.status.message}
            </p>
          )}
          {loading && (
            <div className="mt-3 flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-500"></div>
              <span className="text-sm text-indigo-600">
                Creating client...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
