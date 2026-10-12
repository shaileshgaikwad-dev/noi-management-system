import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateAgentData } from "../../../schemas/createAgentSchema";

interface IAgentOfficeAddress {
  register: UseFormRegister<CreateAgentData>;
  errors: FieldErrors<CreateAgentData>;
  isSubmitting: boolean;
  loading: boolean;
}

export function AgentOfficeAddress({
  register,
  errors,
  isSubmitting,
  loading,
}: IAgentOfficeAddress) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <div className="h-6 w-1 flex-shrink-0 rounded-full bg-indigo-600"></div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700">
          Office Information
        </h3>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Office Address <span className="text-rose-500">*</span>
        </label>
        <textarea
          {...register("officeAddress")}
          placeholder="Enter office address"
          rows={4}
          disabled={isSubmitting || loading}
          className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
        />
        {errors.officeAddress && (
          <p className="mt-1 text-sm text-rose-500">
            {errors.officeAddress.message}
          </p>
        )}
        <p className="mt-1.5 text-xs text-slate-400">
          Include street, city, state, and pincode
        </p>
      </div>
    </div>
  );
}
