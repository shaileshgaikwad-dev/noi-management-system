import { useNavigate } from "react-router-dom";
import { ClientBillModal } from "./ClientBillModal";
import { useAgents } from "../../../hooks/Agents/useAgent";
import { useCreateClient } from "../../../hooks/Clients/useCreateClient";
import { CreateClientHeader } from "../../../components/client/CreateClient/CreateClientHeader";
import { ClientPersonalInformation } from "../../../components/client/CreateClient/PersonalInformation";
import { MortgageInformation } from "../../../components/client/CreateClient/MortgageInformation";
import { CreatePropertyInformation } from "../../../components/client/CreateClient/PropertInformation";
import { CreateClientActions } from "../../../components/client/CreateClient/CreateClientActions";

export function CreateClient() {
  const navigate = useNavigate();

  const { register, handleSubmit, onSubmit, errors, loading, bill, setBill } =
    useCreateClient();

  const { agents, loading: agentsLoading } = useAgents();

  const handleModalClose = () => {
    setBill(null);
    navigate("/admin/clients");
  };

  return (
    <div className="min-h-screen from-slate-50 via-white to-slate-100/60 p-3 sm:p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <CreateClientHeader onBack={() => navigate("/admin")} />

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-hidden rounded-xl border border-slate-200/60 bg-white/95 shadow-xl backdrop-blur-sm sm:rounded-2xl"
        >
          {/* PERSONAL INFORMATION */}

          <ClientPersonalInformation register={register} errors={errors} />

          {/* MORTGAGE INFORMATION */}
          <MortgageInformation
            register={register}
            errors={errors}
            agents={agents}
            agentsLoading={agentsLoading}
            loading={loading}
          />

          {/* PROPERTY INFORMATION */}

          <CreatePropertyInformation register={register} errors={errors} />

          {/* ACTIONS */}
          <CreateClientActions
            loading={loading}
            onBack={() => {
              navigate("/admin");
            }}
          />
        </form>
      </div>

      {bill && <ClientBillModal bill={bill} onClose={handleModalClose} />}
    </div>
  );
}
