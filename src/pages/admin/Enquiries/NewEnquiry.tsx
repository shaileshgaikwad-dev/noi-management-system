import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAllEnquiries } from "../../../hooks/enquiries/useAllEnquiries";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { CurrentDate } from "../../../components/common/Date";

export function NewEnquiry() {
  const { enquiries, handleAllEnquiries, loading, pagination } =
    useAllEnquiries();

  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "All";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    handleAllEnquiries(1, status);
  }, [page, status]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "New":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Contacted":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Resolved":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-[640px] rounded-lg bg-slate-50 border border-indigo-300 rounded-lg p-5 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h1 className="text-2xl font-semibold text-slate-800">
                Enquiries
              </h1>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Manage and track customer enquiries
            </p>
          </div>

          {/* Filter */}
          <div className="w-full sm:w-56">
            <select
              value={status}
              onChange={(e) =>
                setSearchParams({ status: e.target.value, page: "1" })
              }
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition-all hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer"
            >
              <option value="All">All Enquiries</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Content Card */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Loading */}
          {loading && enquiries.length === 0 && (
            <div className="flex justify-center py-20">
              <LoadingSpinner />
            </div>
          )}

          {/* Empty State */}
          {!loading && enquiries.length === 0 && (
            <div className="flex flex-col border-2 border-dashed border-slate-200  items-center justify-center px-5 py-20 text-center">
              <div className="mb-5  flex h-20 w-20 items-center justify-center rounded-lg bg-slate-200">
                <svg
                  className="h-10 w-10 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>

              <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                No Enquiries Found
              </h3>

              <p className="mt-1.5 max-w-sm text-sm text-slate-500">
                {status === "All"
                  ? "There are no enquiries yet."
                  : `No ${status.toLowerCase()} enquiries available.`}
              </p>
            </div>
          )}

          {/* Table */}
          {enquiries.length > 0 && (
            <>
              <div className="max-h-[500px] overflow-y-auto">
                <table className="w-full">
                  <thead className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200">
                    <tr>
                      {["Full Name", "Email", "Mobile", "Status", "Date"].map(
                        (header) => (
                          <th
                            key={header}
                            className="px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-500"
                          >
                            {header}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {enquiries.map((enquiry) => (
                      <tr
                        key={enquiry._id}
                        className="transition-colors hover:bg-slate-50"
                      >
                        {/* Full Name — Link */}
                        <td className="px-4 py-3.5 text-center">
                          <Link
                            to={`/admin/enquiries/${enquiry._id}`}
                            className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 hover:underline"
                          >
                            {enquiry.fullName}
                          </Link>
                        </td>

                        {/* Email */}
                        <td className="px-4 py-3.5 text-center">
                          <p className="truncate text-sm text-slate-600 max-w-[300px] mx-auto">
                            {enquiry.email}
                          </p>
                        </td>

                        {/* Mobile */}
                        <td className="px-4 py-3.5 text-center">
                          <p className="text-sm text-slate-600">
                            {enquiry.mobile}
                          </p>
                        </td>

                        {/* Status Badge */}
                        <td className="px-4 py-3.5 text-center">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusStyle(
                              enquiry.status,
                            )}`}
                          >
                            {enquiry.status}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="px-4 py-3.5 text-center">
                          <p className="whitespace-nowrap text-sm text-slate-500">
                            {new Date(enquiry.createdAt).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                weekday: "short",
                              },
                            )}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50/50 px-4 py-4 sm:flex-row">
                  {/* Info */}
                  <p className="text-xs text-slate-500">
                    Showing{" "}
                    <span className="font-semibold text-slate-700">
                      {(pagination.currentPage - 1) * pagination.limit + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-slate-700">
                      {Math.min(
                        pagination.currentPage * pagination.limit,
                        pagination.totalEnquiries,
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-700">
                      {pagination.totalEnquiries}
                    </span>{" "}
                    enquiries
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={pagination.currentPage === 1 || loading}
                      onClick={() =>
                        setSearchParams({
                          status,
                          page: String(pagination.currentPage - 1),
                        })
                      }
                      className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700"
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
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>

                    <span className="rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                      {pagination.currentPage} / {pagination.totalPages}
                    </span>

                    <button
                      type="button"
                      disabled={
                        pagination.currentPage === pagination.totalPages ||
                        loading
                      }
                      onClick={() =>
                        handleAllEnquiries(pagination.currentPage + 1, status)
                      }
                      className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700"
                    >
                      Next
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div>
        <CurrentDate />
      </div>
    </div>
  );
}
