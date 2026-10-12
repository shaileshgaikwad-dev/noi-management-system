import jsPDF from "jspdf";
import type { IAgentWiseIncomeReport } from "../types/income.types";
import autoTable from "jspdf-autotable";

export function exportAgentIncomePdf(report: IAgentWiseIncomeReport) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  const agentName =
    report.agentId === "all"
      ? "All Agents"
      : report.records.length > 0
        ? `${report.records[0].agent.firstName} 
    ${report.records[0].agent.lastName}`
        : "No records";

  const year = report.year === "all" ? "All Years" : String(report.year);

  const month = report.month === "all" ? "All Months" : String(report.month);

  const formatCurrency = (amount: number) => {
    return `${Number(amount || 0).toLocaleString("en-In", { minimumFractionDigits: 2 })}`;
  };

  // header

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Agent wise income report", 148, 15, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  doc.text(`Agent : ${agentName}`, 14, 25);
  doc.text(`Year : ${year}`, 120, 25);
  doc.text(`Month : ${month}`, 190, 25);
  //summary

  autoTable(doc, {
    startY: 43,
    head: [["Summary", "Value"]],

    body: [
      ["Total Clients", report.summary.totalClients],
      ["Total Notice of Intimation", report.summary.totalNois],
      ["Completed Notice of Intimation", report.summary.completedNois],
      ["Pending Notice of Intimation", report.summary.pendingNois],
      ["In progress Notice of Intimation", report.summary.inProgressNois],
      ["Total Loan Amount", formatCurrency(report.summary.totalLoanAmount)],
      ["Total 0.3% Challan", formatCurrency(report.summary.total03Challan)],
      ["Total 0.5% Challan", formatCurrency(report.summary.total05Challan)],
      ["Total DHC Challan", formatCurrency(report.summary.totalDhc)],
      [
        "Total Government Charges",
        formatCurrency(report.summary.totalGovernmentCharges),
      ],
      // [
      //   "Total Intimation Income",
      //   formatCurrency(report.summary.totalIntimationIncome),
      // ],
      [
        "Total Amount Collected",
        formatCurrency(report.summary.totalAmountCollected),
      ],
    ],

    theme: "grid",

    styles: {
      fontSize: 8,
      cellPadding: 2,
    },

    headStyles: {
      fontStyle: "bold",
    },

    columnStyles: {
      0: {
        cellWidth: 75,
        fontStyle: "bold",
      },
      1: {
        cellWidth: 55,
      },
    },

    margin: {
      left: 14,
      right: 14,
    },
  });

  //client details

  const records = report.records.map((record, index) => [
    index + 1,
    [record.client.prefix, record.client.firstName, record.client.lastName]
      .filter(Boolean)
      .join(" "),

    `${record.agent.firstName} ${record.agent.lastName}`,

    record.client.mobileNumber,

    record.client.email || "-",

    new Date(record.client.dateOfMortgage).toLocaleString("en-In", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),

    formatCurrency(record.loanAmount),
    formatCurrency(record.challan03),
    formatCurrency(record.challan05),
    formatCurrency(record.dhc),
    formatCurrency(record.governmentCharges),
    formatCurrency(record.intimationCharges),
    formatCurrency(record.totalAmount),
    record.status,
  ]);

  //position after summary table
  const summaryFinalY = (doc as any).lastAutoTable.finalY || 100;

  autoTable(doc, {
    startY: summaryFinalY + 10,
    head: [
      [
        "Sr.",
        "Client Name",
        "Agent",
        "Mobile",
        "Email",
        "Mortgage Date",
        "Loan Amount",
        "0.3%",
        "0.5%",
        "DHC ",
        "Govt. Charges",
        "Intimation",
        "Total",
        "Status",
      ],
    ],
    body: records,
    theme: "grid",

    styles: {
      fontSize: 6.5,
      cellPadding: 1.5,
      overflow: "linebreak",
      valign: "middle",
    },

    headStyles: {
      fontStyle: "bold",
      halign: "center",
    },

    columnStyles: {
      0: { cellWidth: 8 },
      1: { cellWidth: 32 },
      2: { cellWidth: 24 },
      3: { cellWidth: 20 },
      4: { cellWidth: 34 },
      5: { cellWidth: 22 },
      6: { cellWidth: 23 },
      7: { cellWidth: 18 },
      8: { cellWidth: 18 },
      9: { cellWidth: 14 },
      10: { cellWidth: 20 },
      11: { cellWidth: 18 },
      12: { cellWidth: 20 },
      13: { cellWidth: 16 },
    },
    margin: {
      left: 8,
      right: 8,
    },

    didDrawPage: (data) => {
      //page footer
      const pageNumber = doc.getNumberOfPages();

      (doc.setFontSize(8),
        doc.setFont("helvetica", "normal"),
        doc.text(`Agent Wise Income Report | Page ${pageNumber}`, 148, 205, {
          align: "center",
        }));
    },
  });

  doc.save("agent-wise-income-report.pdf");
}
