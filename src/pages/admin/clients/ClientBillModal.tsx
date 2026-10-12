import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export interface ClientBillModalProps {
  bill: any;
  onClose?: () => void;
}

export function ClientBillModal({ bill, onClose }: ClientBillModalProps) {
  const navigate = useNavigate();

  // ✅ Guard clause - if no bill data
  if (!bill || !bill.client) {
    return null;
  }

  // ✅ Handle close - navigates to clients page
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/admin/clients");
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Handle copy
  const handleCopy = () => {
    const clientName =
      `${bill.client?.firstName || ""} ${bill.client?.lastName || ""}`.trim();

    const agentName =
      `${bill.agent?.firstName || ""} ${bill.agent?.lastName || ""}`.trim();

    const totalAmount =
      bill.totalAmount || bill.loanAmount + bill.intimationCharges;

    const text = `
        NOTICE OF INTIMATION BILL
-------------------------------------------------------

Client            : ${clientName}
Agent             : ${agentName}
Date              : ${formatDate(bill.createdAt)}

Loan Amount       : ${formatCurrency(bill.loanAmount)}

CHALLAN DETAILS
--------------------------------------

0.3% Challan      : ${formatCurrency(bill.challan03 || 0)}
0.5% Challan      : ${formatCurrency(bill.challan05 || 0)}
DHC Challan       : ${formatCurrency(bill.dhc || 0)}

Intimation Charges: ${formatCurrency(bill.intimationCharges || 0)}

-------------------------------------------------------
TOTAL AMOUNT      : ${formatCurrency(totalAmount)}
-------------------------------------------------------

Status            : ${bill.status || "Pending"}

-------------------------------------------------------
NOTICE OF INTIMATION MANAGEMENT
-------------------------------------------------------
`;

    navigator.clipboard.writeText(text);

    toast.success("Bill copied to clipboard!", {
      position: "bottom-right",
      duration: 3000,
      style: {
        background: "#0f172a",
        color: "#ffffff",
        padding: "16px 24px",
        borderRadius: "12px",
        border: "1px solid #1e293b",
      },
      icon: "📋",
    });
  };
  // Handle print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute cursor-pointer right-4 top-4 z-10 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Bill Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6 border-b border-slate-200 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Notice of Intimation Bill
                </h2>
                <p className="text-sm text-slate-500">
                  Generated on {formatDate(new Date().toISOString())}
                </p>
              </div>
              <div className="rounded-lg bg-indigo-50 px-3 py-1">
                <span className="text-xs font-medium text-indigo-600">
                  #NOI-{bill._id || "000000"}
                </span>
              </div>
            </div>
          </div>

          {/* Client & Agent Info */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Client
              </h3>
              <p className="mt-1 font-semibold text-slate-800">
                {bill.client?.firstName} {bill.client?.lastName}
              </p>
              <p className="text-sm text-slate-600">{bill.client?.email}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Agent
              </h3>
              <p className="mt-1 font-semibold text-slate-800">
                {bill.agent?.firstName} {bill.agent?.lastName}
              </p>
              <p className="text-sm text-slate-600">{bill.agent?.email}</p>
            </div>
          </div>

          {/* Bill Details */}
          <div className="mb-6 rounded-xl bg-slate-50 p-6">
            <div className="space-y-3">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Loan Amount</span>
                <span className="font-semibold text-slate-800">
                  {formatCurrency(bill.loanAmount)}
                </span>
              </div>

              {/* Challan Details */}
              <div className="border-b border-slate-200 pb-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">0.3% Challan</span>
                  <span className="font-medium text-slate-700">
                    {formatCurrency(bill.challan03 || 0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">0.5% Challan</span>
                  <span className="font-medium text-slate-700">
                    {formatCurrency(bill.challan05 || 0)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">DHC Challan</span>
                  <span className="font-medium text-slate-700">
                    {formatCurrency(bill.dhc || 0)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Intimation Charges</span>
                <span className="font-semibold text-slate-800">
                  {formatCurrency(bill.intimationCharges)}
                </span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-lg font-bold text-slate-700">
                  Total Amount
                </span>
                <span className="text-2xl font-bold text-indigo-600">
                  {formatCurrency(
                    bill.totalAmount ||
                      bill.loanAmount + bill.intimationCharges,
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Status:</span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                bill.status === "Completed"
                  ? "bg-emerald-100 text-emerald-700"
                  : bill.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : bill.status === "Cancelled"
                      ? "bg-rose-100 text-rose-700"
                      : "bg-amber-100 text-amber-700"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
              {bill.status || "Pending"}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6">
            <button
              onClick={handleCopy}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-400"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              Copy Bill
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-400"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Bill
            </button>
            <button
              onClick={handleClose}
              className="ml-auto cursor-pointer inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-indigo-300"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
