import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateAgentData } from "../../../schemas/createAgentSchema";

interface IAgentPersonalInfo {
  register: UseFormRegister<CreateAgentData>;
  errors: FieldErrors<CreateAgentData>;
  loading: boolean;
  isSubmitting: boolean;
}

export function AgentPersonalInfo({
  register,
  errors,
  loading,
  isSubmitting,
}: IAgentPersonalInfo) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 rounded-full bg-indigo-600"></div>
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
          Personal Information
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            First Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            {...register("firstName")}
            placeholder="Enter first name"
            disabled={isSubmitting || loading}
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Last Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            {...register("lastName")}
            placeholder="Enter last name"
            disabled={isSubmitting || loading}
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
