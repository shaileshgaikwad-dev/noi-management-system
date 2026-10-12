import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { IAgentData } from "../../../types/agent.types";
import type { IClient } from "../../../types/client.types";
import type { INoi } from "../../../types/noi.types";
import type { CreateClientFormData } from "../../../schemas/createClientSchema";
import type { EditNoiData } from "../../../schemas/editNoiSchema";
import { InfoItem } from "./InfoItem";
import { formatAmount } from "./FormatAmount";
import type { EditClientData } from "../../../schemas/editClientSchema";

interface IClientLoanInformation {
  editMode: boolean;
  client: IClient;
  noi: INoi | undefined;
  agents: IAgentData[];
  agentsLoading: boolean;
  registerClient: UseFormRegister<EditClientData>;
  registerNoi: UseFormRegister<EditNoiData>;
  clientError: FieldErrors<CreateClientFormData>;
  noiErrors: FieldErrors<EditNoiData>;
}

export function LoanInformation({
  editMode,
  client,
  noi,
  agents,
  agentsLoading,
  registerClient,
  registerNoi,
  clientError,
  noiErrors,
}: IClientLoanInformation) {
  return (
    <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md border-2 border-amber-600">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-amber-50 p-2">
          <svg
            className="h-5 w-5 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-slate-800">
          Loan Information
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {editMode ? (
          <>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Loan Amount <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                  ₹
                </span>
                <input
                  type="number"
                  {...registerNoi("loanAmount")}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 pl-8 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                />
              </div>
              {noiErrors.loanAmount && (
                <p className="mt-1 text-sm text-rose-500">
                  {noiErrors.loanAmount.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Date of Mortgage <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                {...registerClient("dateOfMortgage")}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
              {clientError.dateOfMortgage && (
                <p className="mt-1 text-sm text-rose-500">
                  {clientError.dateOfMortgage.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Agent <span className="text-rose-500">*</span>
              </label>
              <select
                {...registerNoi("agent")}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="">
                  {agentsLoading ? "Loading agents..." : "Select Agent"}
                </option>
                {agents.map((agent) => (
                  <option key={agent._id} value={agent._id}>
                    {agent.firstName} {agent.lastName}
                  </option>
                ))}
              </select>
              {noiErrors.agent && (
                <p className="mt-1 text-sm text-rose-500">
                  {noiErrors.agent.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <InfoItem
              label="Loan Amount"
              value={formatAmount(noi?.loanAmount)}
              highlight
            />
            <InfoItem
              label="Date of Mortgage"
              value={
                client.dateOfMortgage
                  ? new Date(client.dateOfMortgage).toLocaleDateString("en-IN")
                  : "—"
              }
            />
            <InfoItem
              label="Agent"
              value={
                typeof client.agent === "object"
                  ? client.agent?.firstName
                    ? `${client.agent.firstName} ${client.agent.lastName || ""}`
                    : "—"
                  : client.agent || "—"
              }
            />
          </>
        )}
      </div>

      {/* Challan Details */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {editMode ? (
          <>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Intimation Charges
              </label>
              <input
                type="number"
                {...registerNoi("intimationCharges")}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Status
              </label>
              <select
                {...registerNoi("status")}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              {noiErrors.status && (
                <p className="mt-1 text-sm text-rose-500">
                  {noiErrors.status.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <InfoItem
              label="Intimation Charges"
              value={formatAmount(noi?.intimationCharges ?? 0)}
            />
            <InfoItem
              label="Challan 0.3%"
              value={formatAmount(noi?.challan03 ?? 0)}
            />
            <InfoItem
              label="Challan 0.5%"
              value={formatAmount(noi?.challan05 ?? 0)}
            />
            <InfoItem label="DHC" value={formatAmount(noi?.dhc ?? 0)} />
            <InfoItem
              label="Government Charges"
              value={formatAmount(noi?.governmentCharges ?? 0)}
            />
            <InfoItem
              label="Total Amount"
              value={formatAmount(noi?.totalAmount ?? 0)}
              highlight
            />
            <InfoItem label="Status" value={noi?.status ?? "—"} />
          </>
        )}
      </div>
    </section>
  );
}
