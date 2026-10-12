import { useEffect, useRef, useState } from "react";
import type { IAgentClientsThisMonth } from "../../types/dashboard.types";
import { getClientByAgentsThisMonth } from "../../services/clientService";
import toast from "react-hot-toast";

export function useClientsByAgentThisMonth(year: number, month: number) {
  const [data, setData] = useState<IAgentClientsThisMonth[]>([]);
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const fetchCurrentMonthData = async () => {
      try {
        setLoading(true);

        const response = await getClientByAgentsThisMonth(year, month);

        if (!isMountedRef.current) return;
        if (response?.success) {
          setData(response.data.agents);
        } else {
          toast.error(
            response?.message || "Failed to fetch agent client counts",
          );
        }
      } catch (error: any) {
        if (!isMountedRef.current) return;
        const message =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch agent client counts";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentMonthData();

    return () => {
      isMountedRef.current = false;
    };
  }, [year, month]);

  return { data, loading };
}
