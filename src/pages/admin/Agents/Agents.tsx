import { useNavigate } from "react-router-dom";
import { usePagination } from "../../../hooks/Dashboard/usePagination";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { EmptyState } from "../../../components/common/EmptyState";

import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useAgents } from "../../../hooks/Agents/useAgent";
import { useDeleteAgent } from "../../../hooks/Agents/useDeleteAgent";
import { AgentTable } from "../../../components/Agents/AgentTable/AgentTable";

export function Agents() {
  const navigate = useNavigate();
  const { agents, loading, error, setAgents } = useAgents();
  const { getCurrentItems } = usePagination(7);

  const {
    currentItems,
    totalItems,
    totalPages,
    startIndex,
    endIndex,
    currentPage,
    goToPage,
  } = getCurrentItems(agents);

  const { deleteAgentById, loading: deleteLoading } = useDeleteAgent();

  const handleDelete = async (id: string) => {
    try {
      const response = await Swal.fire({
        title: "Are you sure",
        text: "Your won't be able to revert this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (response.isConfirmed) {
        await deleteAgentById(id);
        setAgents((prev) => prev.filter((agent) => agent._id !== id));

        toast.success("Agent deleted");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to delete agent";

      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen mt-5 bg-white p-5 rounded-xl shadow-lg sm:6">
      <div className="">
        {/* Header with Add Button */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
              <svg
                className="h-5 w-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
                All Agents
              </h2>
              <p className="text-xs text-slate-500 sm:text-sm">
                Manage and monitor your agent network
              </p>
            </div>
          </div>
        </div>

        {/* Agents Table / Empty State */}
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
            {error}
          </div>
        ) : agents.length === 0 ? (
          <EmptyState
            title="No agents found"
            description='Click "Add New Agent" to create your first agent.'
            buttonText="+ Add New Agent"
            onButtonClick={() => navigate("/admin/agents/add")}
          />
        ) : (
          <>
            {/* Table */}
            <AgentTable
              agents={currentItems}
              deleteLoading={deleteLoading}
              onDelete={handleDelete}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4 px-2">
                <p className="text-sm text-slate-500">
                  Showing {startIndex + 1} to {Math.min(endIndex, totalItems)}{" "}
                  of {totalItems} agents
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition cursor-pointer ${
                      currentPage === 1
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    Previous
                  </button>
                  <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-sm font-medium">
                    {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition cursor-pointer ${
                      currentPage === totalPages
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
