import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { loginAdmin } from "../../services/authService";
import {
  adminLoginSchema,
  type AdminLoginFormData,
} from "../../schemas/authSchema";

export function AdminLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginFormData>({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = async (data: AdminLoginFormData) => {
    try {
      const response = await loginAdmin(data.email, data.hashPassword);
      localStorage.setItem("accessToken", response.token);
      localStorage.setItem("lastLoginAt", response.lastLoginAt ?? "");
      localStorage.setItem("email", response.email);
      localStorage.setItem("name", response.name);
      toast.success(response.message);
      navigate("/admin");
      console.log(response);
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    }
  };

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      {/* LEFT PANEL — NOI BRANDING */}
      <section className="relative isolate hidden min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 px-10 py-12 lg:flex lg:flex-col lg:justify-between xl:px-16">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />

        {/* Brand */}
        <Link
          to="/"
          aria-label="NOI Management home"
          className="flex w-fit items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
              <path d="M14 3v5h5M9 12h7M9 16h7M9 8h2" />
            </svg>
          </div>

          <div>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">
              Notice of Intimation
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-700">
              Management
            </p>
          </div>
        </Link>

        {/* Main content */}
        <div className="relative z-10 my-12 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Admin Portal
          </span>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-900 xl:text-5xl">
            Streamline Your{" "}
            <span className="text-blue-700">Notice of Intimation</span>{" "}
            Operations
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            A centralized workspace to organize client records, loan
            information, agent details, and Notice of Intimation processing.
          </p>

          {/* Feature list */}
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                  <path d="M14 3v5h5M9 12h7M9 16h5" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">
                  Organized Document Management
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Keep client and loan-related information organized in one
                  workspace.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6l8-3Z" />
                  <path d="m8.5 12 2.3 2.3 4.7-4.7" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">
                  Controlled Admin Access
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Access business records through your authenticated admin
                  account.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 19V5M4 19h17" />
                  <path d="m7 15 4-4 3 2 5-6" />
                  <path d="M15 7h4v4" />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">
                  Efficient Workflow
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Manage client details, assigned agents, and processing
                  statuses more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Document illustration */}
        <div className="relative z-10 mt-auto">
          <div className="relative mx-auto max-w-md rounded-2xl border border-white/80 bg-white/70 p-5 shadow-xl shadow-blue-900/5 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-14 shrink-0 flex-col justify-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3">
                <span className="h-1.5 w-full rounded bg-blue-400" />
                <span className="h-1.5 w-4/5 rounded bg-blue-300" />
                <span className="h-1.5 w-full rounded bg-blue-300" />
                <span className="h-1.5 w-3/5 rounded bg-blue-200" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900">
                  Notice of Intimation
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Client and processing records
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            A dedicated workspace for NOI operations.
          </p>
        </div>
      </section>

      {/* RIGHT PANEL — LOGIN FORM */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 px-4 py-8 sm:px-8 lg:px-12 xl:px-20">
        {/* Compact branding for mobile */}
        <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold text-white">
            N
          </span>
          <span className="text-lg font-bold text-slate-900">
            NOI Management
          </span>
        </Link>

        <div className="w-full max-w-md">
          {/* Login card */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-3xl font-bold text-white shadow-lg shadow-blue-700/20">
                N
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Admin Sign In
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Sign in to your Notice of Intimation admin account.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>

                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    autoComplete="username"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full rounded-xl border bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 ${
                      errors.email ? "border-rose-400" : "border-slate-200"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p
                    id="email-error"
                    role="alert"
                    className="mt-2 text-sm text-rose-600"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="5" y="10" width="14" height="11" rx="2" />
                      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
                    </svg>
                  </span>

                  <input
                    id="password"
                    type="password"
                    {...register("hashPassword")}
                    placeholder="Enter your password"
                    className={`w-full rounded-xl border bg-white py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 ${
                      errors.hashPassword
                        ? "border-rose-400"
                        : "border-slate-200"
                    }`}
                  />
                </div>

                {errors.hashPassword && (
                  <p
                    id="password"
                    role="alert"
                    className="mt-2 text-sm text-rose-600"
                  >
                    {errors.hashPassword.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-200 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="opacity-25"
                      />
                      <path
                        d="M21 12a9 9 0 0 0-9-9"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M10 17l5-5-5-5M15 12H3" />
                      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Security note */}
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 text-emerald-600"
                aria-hidden="true"
              >
                <path d="M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6l8-3Z" />
                <path d="m8.5 12 2.3 2.3 4.7-4.7" />
              </svg>
              Secure Admin Access
            </div>

            <div className="mt-5 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7M5 12h14" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-7 px-2 text-center text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Notice of Intimation Management.
            All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
