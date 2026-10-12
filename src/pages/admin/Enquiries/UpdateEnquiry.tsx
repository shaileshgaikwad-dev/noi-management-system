import { useEffect, useState } from "react";
import { useGetEnquiry } from "../../../hooks/enquiries/useGetEnquiry";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import type { IEnquiries } from "../../../types/enquiry.types";
import { useUpdateEnquiryStatus } from "../../../hooks/enquiries/useUpdateEnquiryStatus";

export function UpdateEnquiry() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { enquiry, loading } = useGetEnquiry(id || "");
  const [selectStatus, setSelectedStatus] =
    useState<IEnquiries["status"]>("New");

  const { handleUpdateStatus, loading: updating } = useUpdateEnquiryStatus();

  useEffect(() => {
    if (enquiry?.status) {
      setSelectedStatus(enquiry.status);
    }
  }, [enquiry]);

  const handleUpdate = async () => {
    if (!id) return;
    const response = await handleUpdateStatus(id, selectStatus);
    if (response) navigate("/admin/enquiries/new-enquiry");
  };

  if (!enquiry) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          {/* Subtle corner glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-50 blur-3xl" />

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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9 13l6 6m0-6l-6 6"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="relative text-lg font-semibold text-slate-900 sm:text-xl">
            Enquiry not found
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
            The enquiry you're looking for doesn't exist or may have been
            removed.
          </p>

          {/* Action */}
          <div className="relative mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/admin/enquiries/new-enquiry")}
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
              Back to Enquiries
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-50 p-4 md:p-6">
      <div className="mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
              Update Enquiry Status
            </h1>
            <p className="text-xs text-slate-500 sm:text-sm">
              Review and update the enquiry status
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="p-4 sm:p-5">
              {/* Details grid — compact 2 cols */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoTile
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  }
                  label="Full Name"
                  value={enquiry?.fullName || "—"}
                />

                <InfoTile
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  }
                  label="Email"
                  value={enquiry?.email || "—"}
                  breakAll
                />

                <InfoTile
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  }
                  label="Mobile"
                  value={enquiry?.mobile || "—"}
                />

                <InfoTile
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  }
                  label="Enquiry Date"
                  value={
                    enquiry?.createdAt
                      ? new Date(enquiry.createdAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            weekday: "short",
                          },
                        )
                      : "—"
                  }
                />
              </div>

              {/* Message — fixed height, scrollable */}
              <div className="mt-3">
                <div className="mb-1.5 flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Message
                  </p>
                </div>
                <textarea
                  rows={5}
                  readOnly
                  value={enquiry?.message || "—"}
                  className="w-full resize-none overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-relaxed text-slate-800 outline-none"
                />
              </div>

              {/* Status + Actions in one row */}
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="w-full sm:max-w-xs">
                  <label
                    htmlFor="status"
                    className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Select Status
                  </label>
                  <select
                    id="status"
                    value={selectStatus}
                    onChange={(e) =>
                      setSelectedStatus(e.target.value as IEnquiries["status"])
                    }
                    className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>

                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => navigate("/admin/enquiries/new-enquiry")}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900 hover:text-white sm:w-auto"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleUpdate}
                    disabled={updating}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {updating ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Updating...
                      </>
                    ) : (
                      <>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Update Status
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function InfoTile({
  icon,
  label,
  value,
  breakAll = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  breakAll?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/60 p-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {icon}
        </svg>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p
          className={`mt-0.5 text-sm font-semibold text-slate-900 ${
            breakAll ? "break-all" : "break-words"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
