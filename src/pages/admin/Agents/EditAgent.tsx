import { useNavigate, useParams } from "react-router-dom";
import { useEditAgent } from "../../../hooks/Agents/useEditAgent";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";

export function EditAgent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    saving,
    notFound,
  } = useEditAgent(id!);

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }
  if (notFound) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          {/* Subtle corner accent */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-50 blur-3xl" />

          {/* Icon */}
          <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 ring-8 ring-rose-50/50">
            <svg
              className="h-6 w-6 text-rose-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M17 8l4 4m0 0l-4 4m4-4H9"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="relative text-lg font-semibold text-slate-900 sm:text-xl">
            Agent not found
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
            The agent you're trying to edit doesn't exist or may have been
            removed.
          </p>

          {/* Actions */}
          <div className="relative mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/admin/agents")}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-md sm:w-auto"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Agents
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-6">
      {/* Form Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-50 p-2.5">
              <svg
                className="h-5 w-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">
                Edit Agent
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Update the agent's basic contact and office information. This
                information will be used to manage agents and associate them
                with clients and{" "}
                <span className="text-indigo-600 font-medium">
                  Notice of Intimation
                </span>{" "}
                applications.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ===== PERSONAL INFORMATION ===== */}
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
                  disabled={saving}
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
                  disabled={saving}
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

          {/* ===== CONTACT INFORMATION ===== */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-1 rounded-full bg-indigo-600"></div>
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                Contact Information
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter email address"
                  disabled={saving}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-60"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-rose-500">
                    {errors.email.message}
                  </p>
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
                  disabled={saving}
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

          {/* ===== OFFICE INFORMATION ===== */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-1 rounded-full bg-indigo-600"></div>
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
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
                disabled={saving}
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

          {/* ===== BUTTONS ===== */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/admin/agents")}
              disabled={saving}
              className="rounded-lg cursor-pointer border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 disabled:opacity-60"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center justify-center cursor-pointer gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-indigo-800 hover:shadow-indigo-300 disabled:opacity-60 disabled:cursor-not-allowed md:flex-none"
            >
              {saving ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Updating...
                </>
              ) : (
                <>Update Agent</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
