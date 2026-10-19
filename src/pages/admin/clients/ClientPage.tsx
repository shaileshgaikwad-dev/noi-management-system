import { useNavigate, useSearchParams } from "react-router-dom";
import { useClients } from "../../../hooks/Clients/useClients";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { EmptyState } from "../../../components/common/EmptyState";
import { ClientCard } from "../../../components/client/ClientCard/ClientCard";
import { getYears } from "../../../utils/year";
import { ClientPageHeader } from "../../../components/client/ClientCard/ClientPageHeader";

export function ClientPage() {
  const navigate = useNavigate();

  const years = getYears();

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedYear = searchParams.get("year") || "all";

  const { clients, loading, loadMore, pagination, search, setSearch } =
    useClients(selectedYear);

  // Get random color for avatar
  const getAvatarColor = (id: string) => {
    const colors = [
      "bg-indigo-50 text-indigo-600",
      "bg-blue-50 text-blue-600",
      "bg-emerald-50 text-emerald-600",
      "bg-teal-50 text-teal-600",
      "bg-cyan-50 text-cyan-600",
      "bg-violet-50 text-violet-600",
      "bg-slate-100 text-slate-600",
      "bg-amber-50 text-amber-600",
    ];
    const index = id?.length % colors.length || 0;
    return colors[index];
  };

  const clientList = Array.isArray(clients) ? clients : [];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <ClientPageHeader />
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        {/* Year tabs */}
        <div className="inline-flex w-full overflow-x-auto cursor-pointer  rounded-lg border border-slate-200 bg-white p-1 shadow-sm [scrollbar-width:none] lg:w-auto">
          <button
            onClick={() => setSearchParams({ year: "all" })}
            className={`whitespace-nowrap rounded-md cursor-pointer px-4 py-2 text-sm font-medium transition-all ${
              selectedYear === "all"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            All
          </button>

          {years.slice(0, 3).map((year) => (
            <button
              key={year}
              onClick={() => setSearchParams({ year: String(year) })}
              className={`whitespace-nowrap cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all ${
                selectedYear === String(year)
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {year}
            </button>
          ))}

          <select
            value={selectedYear}
            onChange={(e) => setSearchParams({ year: e.target.value })}
            className="cursor-pointer whitespace-nowrap rounded-md bg-transparent px-3 py-2 text-sm font-medium text-slate-600 outline-none"
          >
            <option value="">More...</option>
            {years.slice(3).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Stats / Empty state */}
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:w-auto">
          {clientList.length === 0 ? (
            <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 sm:w-auto sm:justify-start">
              <svg
                className="h-4 w-4 flex-shrink-0 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="text-sm font-medium text-red-700">
                No clients found for{" "}
                {selectedYear === "all" ? "All years" : selectedYear}
              </span>
            </div>
          ) : (
            <>
              <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 sm:w-auto sm:justify-start">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-slate-600">
                  Showing:{" "}
                  <span className="font-semibold text-indigo-700">
                    {selectedYear === "all" ? "All years" : selectedYear}
                  </span>
                </span>
              </div>

              <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 sm:w-auto sm:justify-start">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm text-slate-600">
                  Total:{" "}
                  <span className="font-semibold text-emerald-700">
                    {clientList.length}
                  </span>{" "}
                  clients
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pl-10 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>

      {/* Loading State */}
      {loading && clientList.length === 0 && <LoadingSpinner />}

      {/* Clients Grid - 3 per row */}
      {!loading && clientList.length === 0 && (
        <EmptyState
          title="No clients found"
          description='Click "Add New Client" to create your first client.'
          buttonText="+ Add New Client"
          onButtonClick={() => navigate("/admin/clients/add-client")}
        />
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientList.map((client) => (
          <ClientCard
            key={client._id}
            client={client}
            avatarColor={getAvatarColor(client._id)}
            onClick={() => navigate(`/admin/clients/${client._id}`)}
          />
        ))}
      </div>

      {/* Load More Button */}
      {pagination?.hasNextPage && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border cursor-pointer bg-slate-800 text-white px-6 py-2.5  font-medium  transition hover:bg-slate-700"
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
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
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                Load More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current -rotate-90"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L12 20M12 20L6 14M12 20L18 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
