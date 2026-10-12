import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateClientFormData } from "../../../schemas/createClientSchema";

interface IClientPersonalInformationProps {
  register: UseFormRegister<CreateClientFormData>;
  errors: FieldErrors<CreateClientFormData>;
}

export function ClientPersonalInformation({
  register,
  errors,
}: IClientPersonalInformationProps) {
  return (
    <div className="border-b border-slate-100/80 p-4 sm:p-6 md:p-8">
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-md shadow-indigo-200">
            1
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-800 sm:text-lg">
              Personal Information
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              Enter the client's basic information.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="hidden h-2 w-2 rounded-full bg-emerald-400 sm:inline-flex"></span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-400">
            Step 1 of 3
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-4 md:gap-6">
        {/* Prefix */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Prefix
          </label>
          <select
            {...register("prefix")}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          >
            <option value="">Select Prefix</option>
            <option value="MR.">MR.</option>
            <option value="MS.">MS.</option>
            <option value="MRS.">MRS.</option>
            <option value="DR.">DR.</option>
            <option value="PROF.">PROF.</option>
            <option value="REV.">REV.</option>
          </select>
          {errors.prefix && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.prefix.message}
            </p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            First Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            {...register("firstName")}
            placeholder="Enter first name"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Middle Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Middle Name
          </label>
          <input
            type="text"
            {...register("middleName")}
            placeholder="Enter middle name"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          />
          {errors.middleName && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.middleName.message}
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
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Email ID
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="client@example.com"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
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
            placeholder="10 digit mobile number"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          />
          {errors.mobileNumber && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Gender <span className="text-rose-500">*</span>
          </label>
          <select
            {...register("gender")}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:px-4 sm:py-3"
          >
            <option value="">Select Gender</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
            <option value="TRANSGENDER">TRANSGENDER</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-rose-500">
              {errors.gender.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
