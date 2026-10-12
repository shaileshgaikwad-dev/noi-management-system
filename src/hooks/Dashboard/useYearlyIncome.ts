import { useEffect, useState } from "react";
import { getIncomeReport } from "../../services/incomeService";
import toast from "react-hot-toast";
import type { IIncomeReport } from "../../types/income.types";

export function useIncome(year: string) {
  const [income, setIncome] = useState<IIncomeReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        setLoading(true);

        const response = await getIncomeReport(year);

        if (response.success) {
          setIncome(response.data);
        } else {
          setIncome(null);
          toast.error(response?.message || "Failed to fetch income report");
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchIncome();
  }, [year]);

  return { income, loading };
}
