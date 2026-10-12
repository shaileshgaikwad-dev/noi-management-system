import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useClientDetails } from "../../../hooks/Clients/useClientDetails";
import { useAgents } from "../../../hooks/Agents/useAgent";
import { useEditUpdateClient } from "../../../hooks/Clients/useEditUpdate";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { ClientHeader } from "../../../components/client/ClientDetails/ClientHeader";
import { ClientPersonalInformation } from "../../../components/client/ClientDetails/ClientPersonalInformation";
import { ClientContactInformation } from "../../../components/client/ClientDetails/ClientContactInformation";
import { LoanInformation } from "../../../components/client/ClientDetails/LoanInformation";
import { PropertyDescription } from "../../../components/client/ClientDetails/PropertyDescription";

export function ClientDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [editMode, setEditMode] = useState(false);
  const { client, noi, loading } = useClientDetails(id || "");

  const { agents, loading: agentsLoading } = useAgents();

  const {
    registerClient,
    registerNoi,
    clientError,
    noiErrors,
    getClientValues,
    getNoiValues,
    validateForms,
    onSubmit,
    saving,
  } = useEditUpdateClient(id || "");

  const handleSave = async () => {
    const isValid = await validateForms();

    if (!isValid) {
      toast.error("Please fix the errors in the form before saving");
      return;
    }

    const clientData = getClientValues();
    const noiData = getNoiValues();
    const noiId = noi?._id;
    if (!noiId) {
      toast.error("Noi record not found");
      return;
    }
    const result = await onSubmit(clientData, noiData, noiId);

    if (result) {
      navigate("/admin/clients");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <LoadingSpinner />
      </div>
    );
  }

  if (!client) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
            !
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            Client not found
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            We couldn't find the client you're looking for.
          </p>
          <button
            onClick={() => navigate("/admin/clients")}
            className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Back to Clients
          </button>
        </div>
      </div>
    );
  }

  const fullName = [
    client.prefix,
    client.firstName,
    client.middleName,
    client.lastName,
  ]
    .filter(Boolean)
    .join(" ");

  const initials = `${client.firstName?.charAt(0) ?? ""}${
    client.lastName?.charAt(0) ?? ""
  }`.toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/80 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/admin/clients")}
            className="group cursor-pointer flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-100">
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </span>
            Back to Clients
          </button>

          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-md"
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit Client
            </button>
          )}
        </div>

        {/* CLIENT HEADER CARD */}

        <ClientHeader fullName={fullName} initials={initials} />

        {/* PERSONAL INFORMATION */}

        <ClientPersonalInformation
          client={client}
          editMode={editMode}
          registerClient={registerClient}
          clientError={clientError}
        />

        {/* CONTACT INFORMATION */}

        <ClientContactInformation
          client={client}
          editMode={editMode}
          registerClient={registerClient}
          clientError={clientError}
        />

        {/* LOAN INFORMATION */}

        <LoanInformation
          editMode={editMode}
          client={client}
          noi={noi}
          agents={agents}
          agentsLoading={agentsLoading}
          registerClient={registerClient}
          registerNoi={registerNoi}
          clientError={clientError}
          noiErrors={noiErrors}
        />

        {/* PROPERTY INFORMATION */}

        <PropertyDescription
          editMode={editMode}
          client={client}
          registerClient={registerClient}
          clientError={clientError}
        />

        {/* ACTIONS */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-gradient-to-r from-slate-50/50 to-slate-100/30 p-6 rounded-2xl sm:flex-row sm:justify-end">
          {editMode ? (
            <>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                disabled={saving}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={handleSave}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg"
              >
                {saving ? (
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
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Save Changes
                  </>
                )}
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/admin/clients")}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-950 hover:text-white"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Clients
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
