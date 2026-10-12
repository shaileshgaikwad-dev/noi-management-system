import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import {
  createAgentSchema,
  type CreateAgentData,
} from "../../../schemas/createAgentSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateAgent } from "../../../hooks/Agents/useCreateAgent";
import { AgentHeader } from "../../../components/Agents/AgentHeader/AgentHeader";
import { AgentPersonalInfo } from "../../../components/Agents/AgentDetails/AgentPersonalInfo";
import { AgentActions } from "../../../components/Agents/AgentActions/AgentActions";
import { AgentContactInfo } from "../../../components/Agents/AgentDetails/AgentContactInfo";
import { AgentOfficeAddress } from "../../../components/Agents/AgentDetails/AgentOfficeAddress";
import { CurrentDate } from "../../../components/common/Date";

export function AddAgent() {
  const navigate = useNavigate();
  const { handleCreateAgent, loading } = useCreateAgent();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateAgentData>({
    resolver: zodResolver(createAgentSchema),
  });

  const onSubmit = async (data: CreateAgentData) => {
    try {
      const result = await handleCreateAgent(data);

      if (result && result.success) {
        navigate("/admin/agents");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to create agent";
      console.log(message);
    }
  };

  return (
    <div className="mt-6">
      {/* Form Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <AgentHeader />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ===== PERSONAL INFORMATION ===== */}
          <AgentPersonalInfo
            register={register}
            errors={errors}
            loading={loading}
            isSubmitting={isSubmitting}
          />

          {/* ===== CONTACT INFORMATION ===== */}
          <AgentContactInfo
            register={register}
            errors={errors}
            loading={loading}
            isSubmitting={isSubmitting}
          />

          {/* ===== OFFICE INFORMATION ===== */}
          <AgentOfficeAddress
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            loading={loading}
          />

          {/* ===== BUTTONS ===== */}
          <AgentActions
            onBack={() => {
              navigate("/admin");
            }}
            isSubmitting={isSubmitting}
            loading={loading}
          />
        </form>
      </div>
      <CurrentDate />
    </div>
  );
}
