import type { IIncomeReportExport } from "../types/income.types";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const formatCurrency = (amount: number) => {
  return `${Number(amount || 0).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
};

//Excel
export function exportIncomeToExcel(income: IIncomeReportExport, year: string) {
  const data = [
    ["Yearly Income Report", `FY - ${year}`],
    [],
    ["Particular", "Amount"],
    ["Completed Notice of Intimation", income.totalNois],
    ["Total Loan Amount", income.totalLoanAmount],
    ["0.3% Challan", income.total03Challan],
    ["0.5% Challan", income.total05Challan],
    ["DHC Charges", income.totalDhc],
    ["Government Charges", income.totalGovernmentCharges],
    // ["Intimation Charges", income.totalIntimationIncome],
    ["Total Amount Collected", income.totalAmountCollected],
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Income Report");

  XLSX.writeFile(workbook, `yearly-income-report-${year}.xlsx`);
}

//CSV

export function exportIncomeToCSV(income: IIncomeReportExport, year: string) {
  const data = [
    ["Yearly Income Report", `FY${year}`],
    [],
    ["Particular", "Amount"],
    ["Completed Notice of Intimation", income.totalNois],
    ["Total Loan Amount", income.totalLoanAmount],
    ["0.3% Challan", income.total03Challan],
    ["0.5% Challan", income.total05Challan],
    ["DHC Charges", income.totalDhc],
    ["Government Charges", income.totalGovernmentCharges],
    // ["Intimation Charges", income.totalIntimationIncome],
    ["Total Amount Collected", income.totalAmountCollected],
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const csv = XLSX.utils.sheet_to_csv(worksheet);

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf:8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `yearly-income-report${year}.csv`;

  link.click();

  URL.revokeObjectURL(url);
}

//PDF

export function exportIncomeToPDF(income: IIncomeReportExport, year: string) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("YEARLY INCOME REPORT", 14, 20);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text(`Financial Year: FY ${year}`, 14, 29);

  autoTable(doc, {
    startY: 38,
    head: [["Particular", "Amount"]],
    body: [
      ["Completed Notice of Intimation", income.totalNois.toString()],
      ["Total Loan Amount", income.totalLoanAmount],
      ["0.3% Challan", income.total03Challan],
      ["0.5% Challan", income.total05Challan],
      ["DHC Charges", income.totalDhc],
      ["Government Charges", formatCurrency(income.totalGovernmentCharges)],
      // ["Intimation Income", formatCurrency(income.totalIntimationIncome)],
      ["Total Amount Collected", formatCurrency(income.totalAmountCollected)],
    ],
  });

  doc.save(`yearly-income-report-${year}.pdf`);
}
