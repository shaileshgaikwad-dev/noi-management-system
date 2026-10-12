import { useEffect, useState } from "react";
import {
  dashboardServices,
  pendingInProgressService,
  recentActivitiesService,
} from "../../services/dashboardServices";

type DashboardStatus = {
  totalAgents: number;
  totalClients: number;
  totalNois: number;
  pendingNois: number;
  completedNois: number;
  monthlyIncome: number;
  yearlyIncome: number;
};

export function useDashboard() {
  const [statusDashboard, setStatusDashboard] = useState<DashboardStatus>({
    totalAgents: 0,
    totalClients: 0,
    totalNois: 0,
    pendingNois: 0,
    completedNois: 0,
    monthlyIncome: 0,
    yearlyIncome: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStatus = async () => {
      try {
        setLoading(true);

        const response = await dashboardServices();

        if (response.success) {
          setStatusDashboard(response.data);
        }
      } catch (error) {
        console.error("Error to fetch dashboard status", error);
        
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardStatus();
  }, []);

  return { statusDashboard, loading };
}

//recent activities

type RecentActivity = {
  _id: string;
  agent: { firstName: string; lastName: string };
  client: { firstName: string; middleName?: string; lastName: string };
  status: "Pending" | "In Progress" | "Completed";
  createdAt: string;
  updatedAt: string;
};

export function useRecentActivities() {
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>(
    [],
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        setLoading(true);
        const response = await recentActivitiesService();

        setRecentActivities(response.data);
      } catch (error) {
        console.log("Failed to fetch recent activities : ", error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentActivities();
  }, []);
  return { recentActivities, loading };
}

//Pending in progress activity

type PendingInprogress = {
  _id: string;
  agent: { firstName: string; lastName: string };
  client: { firstName: string; middleName: string; lastName: string };
  status: "Pending" | "In Progress";
  createdAt: string;
  updatedAt: string;
};

export function usePendingInProgressActivity() {
  const [pendingInProgressClients, setPendingInProgressClients] = useState<
    PendingInprogress[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingInProgress = async () => {
      setLoading(true);
      try {
        const response = await pendingInProgressService();
        setPendingInProgressClients(response.data);
      } catch (error) {
        console.log(
          "Failed to fetch pending or in progress activities : ",
          error,
        );
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPendingInProgress();
  }, []);

  return { loading, pendingInProgressClients };
}
