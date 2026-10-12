import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateClientFormData } from "../../../schemas/createClientSchema";

interface IPropertyInformation {
  register: UseFormRegister<CreateClientFormData>;
  errors: FieldErrors<CreateClientFormData>;
}

export function CreatePropertyInformation({
  register,
  errors,
}: IPropertyInformation) {
  // const hasError = !!errors.propertyAddress;

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-sm font-bold text-white shadow-md shadow-emerald-200">
            3
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-800 sm:text-lg">
              Property Information
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              Enter the complete property address.
            </p>
          </div>
        </div>
        <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-400 sm:self-auto">
          Step 3 of 3
        </span>
      </div>

      {/* Address field */}
      <div>
        <label
          htmlFor="propertyAddress"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Property Address <span className="text-rose-500">*</span>
        </label>

        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-3 text-slate-400 sm:left-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <textarea
            id="propertyAddress"
            {...register("propertyAddress")}
            rows={4}
            placeholder="Enter complete property address"
            className="w-full resize-none rounded-lg border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:py-3 sm:pl-11 sm:pr-4"
          />
        </div>

        {errors.propertyAddress && (
          <p className="mt-1 text-sm text-rose-500">
            {errors.propertyAddress.message}
          </p>
        )}
      </div>
    </div>
  );
}
