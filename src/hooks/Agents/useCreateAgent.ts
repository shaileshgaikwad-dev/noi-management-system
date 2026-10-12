import toast from "react-hot-toast";
import type { IAgentCreate } from "../../types/agent.types";
import { createNewAgent } from "../../services/agentService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//create new agent
export function useCreateAgent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreateAgent = async (data: IAgentCreate) => {
    try {
      setLoading(true);
      setError("");

      const response = await createNewAgent(data);

      if (response && response.success === true) {
        toast.success(response.message || "New agent created successfully!");
        navigate("/admin/agents");
        return {
          success: true,
          message: response.message,
          data: response.data,
        };
      }

      if (response && response.success === false) {
        toast.error(response.message || "Failed to create agent");
        setError(response.message);
        return { success: false, message: response.message };
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create agent";
      toast.error(errorMessage);
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateAgent, loading, error };
}
