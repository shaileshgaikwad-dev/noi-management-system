import { useEffect, useState } from "react";
import type { IAgentWiseIncomeReport } from "../../types/income.types";
import toast from "react-hot-toast";
import { getAgentWiseIncomeReportService } from "../../services/incomeService";

export function useAgentWiseIncomeReport(
  agentId: string | number,
  year: number | string,
  month: number | string,
) {
  const [agentWiseIncome, setAgentWiseIncome] =
    useState<IAgentWiseIncomeReport>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!agentId || !year || !month) {
      setLoading(false);
      return;
    }

    const fetchAgentWiseIncome = async () => {
      try {
        setLoading(true);
        const response = await getAgentWiseIncomeReportService(
          agentId,
          year,
          month,
        );

        setAgentWiseIncome(response.data);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch agent income";

        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchAgentWiseIncome();
  }, [agentId, year, month]);

  return { agentWiseIncome, loading };
}
