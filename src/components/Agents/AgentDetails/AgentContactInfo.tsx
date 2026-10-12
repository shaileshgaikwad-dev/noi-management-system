import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateAgentData } from "../../../schemas/createAgentSchema";

interface IAgentContactInfo {
  register: UseFormRegister<CreateAgentData>;
  errors: FieldErrors<CreateAgentData>;
  loading: boolean;
  isSubmitting: boolean;
}

export function AgentContactInfo({
  register,
  errors,
  loading,
  isSubmitting,
}: IAgentContactInfo) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 rounded-full bg-indigo-600"></div>
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
          Contact Information
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email address"
            disabled={isSubmitting || loading}
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-rose-500">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            {...register("mobileNumber")}
            placeholder="Enter 10-digit mobile number"
            disabled={isSubmitting || loading}
            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
          />
          {errors.mobileNumber && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}