import { useEffect, useState } from "react";
import type { IMonthlyIncomeReport } from "../../types/income.types";
import { getMonthlyIncomeReport } from "../../services/incomeService";
import toast from "react-hot-toast";

export function useMonthlyIncome(year: number | null, month: number | null) {
  const [monthlyIncome, setMonthlyIncome] =
    useState<IMonthlyIncomeReport | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!year || !month) {
      setMonthlyIncome(null);
      setLoading(false);
      return;
    }

    const fetchMonthlyIncome = async () => {
      try {
        setLoading(true);

        const response = await getMonthlyIncomeReport(year, month);

        if (response.success) {
          setMonthlyIncome(response.data);
        } else {
          setMonthlyIncome(null);
          toast.error(response?.message || "Failed to fetch monthly income");
        }
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchMonthlyIncome();
  }, [year, month]);

  return { monthlyIncome, loading };
}
