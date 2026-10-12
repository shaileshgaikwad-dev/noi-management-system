import { useState } from "react";
import { deleteAgent } from "../../services/agentService";

export function useDeleteAgent() {
  const [loading, setLoading] = useState(false);

  const deleteAgentById = async (id: string) => {
    try {
      setLoading(true);

      const response = await deleteAgent(id);

      if (!response?.success) {
        throw new Error(response?.message || "Deleting agent error");
      }

      return response;
    } catch (error: any) {
      console.error("Deleting agent error : ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { deleteAgentById, loading };
}
