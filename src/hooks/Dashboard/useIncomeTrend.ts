import { useEffect, useRef, useState } from "react";
import { getMonthlyIncomeTrend } from "../../services/incomeService";
import toast from "react-hot-toast";
import { Months } from "../../constants/month";

export interface MonthlyIncomeTrend {
  month: number;
  totalNois: number;
  totalIntimationIncome: number;
}

const Months_Labels = Months;

export function useIncomeTrend(year: number) {
  const [trend, setTrend] = useState<MonthlyIncomeTrend[]>([]);
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const fetchTrend = async () => {
      try {
        setLoading(true);
        const response = await getMonthlyIncomeTrend(year);

        if (!isMountedRef.current) return;
        if (response?.success) {
          setTrend(response.data);
        } else {
          toast.error(response?.message || "Failed to fetch income trend");
        }
      } catch (error: any) {
        if (!isMountedRef.current) return;
        const message =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch income trend";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrend();

    return () => {
      isMountedRef.current = false;
    };
  }, [year]);

  const chartData = trend.map((point) => ({
    name: Months_Labels[point.month - 1].label,
    Income: point.totalIntimationIncome,
  }));

  return { chartData, loading };
}
