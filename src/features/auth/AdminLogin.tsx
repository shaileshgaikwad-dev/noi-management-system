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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-2xl bg-white p-8 shadow-2xl md:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
              <span className="text-2xl font-bold text-indigo-600">N</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to your Notice of Intimation admin account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700/90"
              />
              {errors.email && (
                <p className="text-rose-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                {...register("hashPassword")}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-700 focus:ring-1 focus:ring-indigo-700/90"
              />
              {errors.hashPassword && (
                <p className="text-rose-500">{errors.hashPassword.message}</p>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-indigo-600 cursor-pointer py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Secure Admin Access
                </span>
              </div>
            </div>
          </div>

          {/* Back to Home - Simple Link */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-indigo-600"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Notice of Intimation Management. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}
