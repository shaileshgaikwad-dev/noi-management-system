import { useForm } from "react-hook-form";
import { useEnquiry } from "../../hooks/enquiries/useEnquiry";
import {
  createEnquirySchema,
  type EnquiryFormData,
} from "../../schemas/enquirySchema";
import { zodResolver } from "@hookform/resolvers/zod";

export function Contact() {
  const { handleEnquiry, loading } = useEnquiry();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(createEnquirySchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: EnquiryFormData) => {
    const result = await handleEnquiry(data);
    if (result?.success) {
      reset();
    }
  };

  return (
    <div className="group relative">
      {/* Glow behind card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>

      {/* Card */}
      <div className="relative rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-200 sm:p-9">
        {/* Card header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Send us a message
            </h2>
            <p className="text-xs text-slate-500">
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name + Email — side by side on desktop */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="name"
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-600"
              />
              {errors.fullName && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-600"
              />
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-slate-700"
            >
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                +91
              </span>
              <input
                id="mobile"
                {...register("mobile")}
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-14 pr-4 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-600"
              />
            </div>
            {errors.mobile && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700"
            >
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={6}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-600"
            />
            {errors.message && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.message.message}
              </p>
            )}
            <p className="mt-2 text-xs text-slate-500">
              Share your Notice of Intimation enquiry or requirements in
              detail.
            </p>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Fields marked with <span className="text-rose-500">*</span> are
              required
            </p>

            <button
              type="submit"
              disabled={loading}
              className="group/btn inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Sending Enquiry..." : "Send Enquiry"}
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}