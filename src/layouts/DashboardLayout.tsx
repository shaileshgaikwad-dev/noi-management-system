import { useState } from "react";
import {
  Outlet,
  useNavigate,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";
import { logoutAdmin } from "../utils/authUtils";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { usePageTitle } from "../hooks/PageTitle/usePageTitle";

export function DashboardLayout() {
  usePageTitle();

  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientOpen, setClientOpen] = useState(false);
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const [enquiriesOpen, setEnquiriesOpen] = useState(false);

  const token = localStorage.getItem("accessToken");

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutAdmin();
        toast.success("Log out successfully");
        navigate("/admin/login", { replace: true });
      }
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavigation = () => {
    setSidebarOpen(false);
  };

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Navigation items with icons
  const navItems = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      path: "/admin/agents",
      label: "Agents",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      path: "/admin/clients",
      label: "Clients",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      path: "/admin/income-report",
      label: "Income Report",
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo/Brand */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-700/50 px-6 py-6">
          {/* Left — logo + brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">NOI Management</h1>
              <p className="text-xs text-slate-400">Financial System</p>
            </div>
          </div>

          {/* Right — Close button, mobile only */}
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            className="group flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-300 hover:bg-slate-700/50 hover:text-white active:scale-95 lg:hidden"
          >
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="min-h-0 flex-1 overflow-y-scroll px-4 py-6 [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
          <p className="px-4 mb-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Main Menu
          </p>
          <ul className="space-y-1.5">
            {/* Dashboard */}
            <li>
              <Link
                to="/admin"
                onClick={handleNavigation}
                className={`group flex items-center gap-3 rounded-lg
                px-4 py-3 text-sm
                ${
                  isActive("/admin")
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
                `}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />{" "}
                </svg>{" "}
                Dashboard
              </Link>
            </li>

            {/* Agents */}
            <li>
              <button
                type="button"
                onClick={() => {
                  setAgentsOpen(!agentsOpen);
                }}
                className="group flex w-full items-center gap-3 rounded-lg
            px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 cursor-pointer hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />{" "}
                </svg>

                <span className="flex-1 text-left ">Agents</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${agentsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />{" "}
                </svg>
              </button>

              {agentsOpen && (
                <ul className="mt-1 space-y-1 pl-4">
                  <li>
                    <Link
                      to="/admin/agents"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
            transition-colors hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      All Agents
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/admin/agents/add"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
              transition-colors hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <line x1="20" y1="8" x2="20" y2="14" />
                        <line x1="23" y1="11" x2="17" y2="11" />
                      </svg>
                      Add New Agent
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* clients  */}

            <li>
              <button
                type="button"
                onClick={() => {
                  setClientOpen(!clientOpen);
                }}
                className="group flex w-full items-center gap-3 rounded-lg
            px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 cursor-pointer hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />{" "}
                </svg>
                <span className="flex-1 text-left">Clients</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${clientOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />{" "}
                </svg>
              </button>

              {clientOpen && (
                <ul className="mt-1 space-y-1 pl-4">
                  <li>
                    <Link
                      to="/admin/clients"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
                  transition-colors hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      All Clients
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/admin/clients/add-client"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
              transition-colors hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="20" y1="8" x2="20" y2="14" />
                        <line x1="23" y1="11" x2="17" y2="11" />
                      </svg>
                      Add New Client
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Income report */}

            <li>
              <button
                onClick={() => {
                  setIncomeOpen(!incomeOpen);
                }}
                className="group flex w-full items-center gap-3 rounded-lg
            px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 cursor-pointer hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />{" "}
                </svg>
                <span className="flex-1 text-left">Income Report</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${incomeOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />{" "}
                </svg>
              </button>

              {incomeOpen && (
                <ul className="mt-1 space-y-1 pl-4">
                  <li>
                    <Link
                      to="/admin/income-report"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
                    transition-colors hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      Yearly Income
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/admin/income-report/monthly"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
            transition-colors hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="8" y1="14" x2="8" y2="18" />
                        <line x1="12" y1="14" x2="12" y2="18" />
                        <line x1="16" y1="14" x2="16" y2="18" />
                      </svg>
                      Monthly Income
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/admin/income-report/agent"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white transition-colors hover:bg-blue-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Agent Wise
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Enquiries */}
            <li>
              <button
                onClick={() => {
                  setEnquiriesOpen(!enquiriesOpen);
                }}
                className="group flex w-full items-center gap-3 rounded-lg
      px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200
      cursor-pointer hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="flex-1 text-left">Enquiries</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${
                    enquiriesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {enquiriesOpen && (
                <ul className="mt-1 space-y-1 pl-4">
                  {/* New */}
                  <li>
                    <Link
                      to="/admin/enquiries/new-enquiry"
                      onClick={handleNavigation}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white
            transition-colors hover:bg-blue-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      All Enquiries
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* User Info + Logout */}
        <div className="border-t border-slate-700/50 p-4">
          <button
            onClick={handleLogout}
            className=" flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-red-500/10 hover:text-red-500"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="min-h-screen lg:ml-64">
        {/* Mobile Header */}
        <div className="sticky top-0 z-20 flex items-center border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Sidebar"
            className="group flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Menu
          </button>
        </div>
        {/* Page Content */}
        <main className="px-4 py-5 sm:px-6 sm:py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
