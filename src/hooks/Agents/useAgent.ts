import { useEffect, useState } from "react";
import type { IAgentData } from "../../types/agent.types";
import { getAllAgents } from "../../services/agentService";
import toast from "react-hot-toast";

export function useAgents() {
  const [agents, setAgents] = useState<IAgentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllAgents = async () => {
      try {
        setLoading(true);

        const response = await getAllAgents();

        if (response && response.data) {
          setAgents(response.data);
        }
        
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch agents";

        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchAllAgents();
  }, []);
  return { agents, loading, error, setAgents };
}
