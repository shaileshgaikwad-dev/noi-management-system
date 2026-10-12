import { CurrentDate } from "../../components/common/Date";
import { AgentClientsThisMonth } from "../../components/DashboardComponents/AgentClientsThisMonth";
import { DashboardStatus } from "../../components/DashboardComponents/DashboardStatus";
import { LastLogin } from "../../components/DashboardComponents/LastLoginStatus";
import { MonthlyIncomeTrendChart } from "../../components/DashboardComponents/MonthlyIncomeTrendChart";
import { NoiStatusChart } from "../../components/DashboardComponents/NoiStatusChart";
import { PendingInprogress } from "../../components/DashboardComponents/PendingInProgress";
import { QuickActions } from "../../components/DashboardComponents/QuickActions";
import { RecentActivity } from "../../components/DashboardComponents/RecentActivity";
import { RecentlyCompleted } from "../../components/DashboardComponents/RecentlyCompleted";
import { useDashboard } from "../../hooks/Dashboard/useDashboard";

export function Dashboard() {
  const { statusDashboard } = useDashboard();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Overview of clients,{" "}
              <span className="text-indigo-600 font-semibold">
                Notice of Intimation
              </span>{" "}
              status and income
            </p>
          </div>
          <LastLogin />
        </div>
        {/* Sections */}
        <div className="space-y-6">
          <DashboardStatus />
          <QuickActions />
          <PendingInprogress />
          <RecentActivity />
          <MonthlyIncomeTrendChart />
          <AgentClientsThisMonth />
          <NoiStatusChart
            completedNois={statusDashboard.completedNois}
            pendingNois={statusDashboard.pendingNois}
            totalNois={statusDashboard.totalNois}
          />
          <RecentlyCompleted />
          <CurrentDate />
        </div>
      </div>
    </div>
  );
}
