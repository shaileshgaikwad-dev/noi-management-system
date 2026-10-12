import * as XLSX from "xlsx";
import type { IAgentWiseIncomeReport } from "../types/income.types";

//exporting all income report by agent

export function exportAgentIncomeToExcel(report: IAgentWiseIncomeReport) {
  //data summary

  const summaryData = [
    ["Agent Wise Income Report"],
    [],
    [
      "Agent",
      report.agentId === "all"
        ? "All Agents"
        : report.records.length > 0
          ? `${report.records[0].agent.firstName} ${report.records[0].agent.lastName}`
          : "No agent found",
    ],
    ["Year", report.year === "all" ? "All Years" : report.year],
    ["Month", report.month === "all" ? "All Months" : report.month],
    [],
    ["Total Clients", report.summary.totalClients],
    ["Total Notice of Intimation", report.summary.totalNois],
    ["Completed Notice of Intimation", report.summary.completedNois],
    ["Pending Notice of Intimation", report.summary.pendingNois],
    ["In Progress Notice of Intimation", report.summary.inProgressNois],
    [],
    [
      "Total Loan Amount",
      report.summary.totalLoanAmount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
    ],
    [
      "Total 0.3% Challan Generated",
      report.summary.total03Challan.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
    ],
    [
      "Total 0.5% Challan Generated",
      report.summary.total05Challan.toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      }),
    ],
    [
      "Total DHC Challan Generated",
      report.summary.totalDhc.toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      }),
    ],
    [
      "Total Government Charges",
      report.summary.totalGovernmentCharges.toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      }),
    ],
    // [
    //   "Total Intimation Income",
    //   report.summary.totalIntimationIncome.toLocaleString("en-In", {
    //     style: "currency",
    //     currency: "INR",
    //   }),
    // ],
    [
      "Total Amount Collected",
      report.summary.totalAmountCollected.toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      }),
    ],
    [],
    ["All clients record"],
    [],
  ];

  //detailed records clients

  const recordData = report.records.map((record) => ({
    Prefix: record.client.prefix,

    "Client Name": `${record.client.firstName} ${record.client.middleName ? record.client.middleName + "" : ""} ${record.client.lastName}`,

    "Agent Name": `${record.agent.firstName} ${record.agent.lastName}`,

    "Client Mobile Number": record.client.mobileNumber,

    "Client Email": record.client.email,

    "Client Property Address": record.client.propertyAddress,

    "Date of Mortgage": new Date(record.client.dateOfMortgage).toLocaleString(
      "en-In",
      { day: "2-digit", month: "long", year: "numeric" },
    ),

    "Loan Amount": record.loanAmount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    "0.3% Challan": record.challan03.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    "0.5% Challan": record.challan05.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    DHC: record.dhc.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    "Government Charges": record.governmentCharges.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    "Intimation Charges": record.intimationCharges.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    "Total Amount": record.totalAmount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),

    Status: record.status,
  }));

  //create workbook
  const workbook = XLSX.utils.book_new();

  //summary sheet

  const summaryWorkSheet = XLSX.utils.aoa_to_sheet(summaryData);

  XLSX.utils.sheet_add_json(summaryWorkSheet, recordData, {
    origin: `A:${summaryData.length + 1}`,
    skipHeader: false,
  });

  summaryWorkSheet["!cols"] = [{ wch: 35 }, { wch: 30 }];
  XLSX.utils.book_append_sheet(workbook, summaryWorkSheet, "Summary");

  //records sheet

  const recordsWorkSheet = XLSX.utils.json_to_sheet(recordData);
  recordsWorkSheet["!cols"] = [
    { wch: 4 }, // Prefix
    { wch: 28 }, // Client Name
    { wch: 22 }, // Agent Name
    { wch: 20 }, // Client Mobile Number
    { wch: 32 }, // Client Email
    { wch: 45 }, // Client Property Address
    { wch: 18 }, // Date of Mortgage
    { wch: 18 }, // Loan Amount
    { wch: 18 }, // 0.3% Challan
    { wch: 18 }, // 0.5% Challan
    { wch: 12 }, // DHC
    { wch: 22 }, // Government Charges
    { wch: 20 }, // Intimation Charges
    { wch: 20 }, // Total Amount
    { wch: 16 }, // Status
  ];

  XLSX.utils.book_append_sheet(
    workbook,
    recordsWorkSheet,
    "Agent Income Records",
  );

  //download excel file

  XLSX.writeFile(workbook, `agent-wise-income-report.xlsx`);
}
