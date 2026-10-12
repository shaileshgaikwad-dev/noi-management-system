export interface IIncomeReport {
  year: number | string;
  totalNois: number;
  totalLoanAmount: number;
  total03Challan: number;
  total05Challan: number;
  totalDhc: number;
  totalGovernmentCharges: number;
  totalIntimationIncome: number;
  totalAmountCollected: number;
}

//Monthly income interface
export interface IMonthlyIncomeReport {
  year: number | string;
  month: number | string;
  totalNois: number;
  totalLoanAmount: number;
  total03Challan: number;
  total05Challan: number;
  totalDhc: number;
  totalGovernmentCharges: number;
  totalIntimationIncome: number;
  totalAmountCollected: number;
}

//export income report

export interface IIncomeReportExport {
  totalNois: number;
  totalLoanAmount: number;
  total03Challan: number;
  total05Challan: number;
  totalDhc: number;
  totalGovernmentCharges: number;
  totalIntimationIncome: number;
  totalAmountCollected: number;
}

//export income agent wise

export interface IAgentWiseIncomeSummary {
  totalClients: number;
  totalNois: number;
  completedNois: number;
  pendingNois: number;
  inProgressNois: number;
  totalLoanAmount: number;
  total03Challan: number;
  total05Challan: number;
  totalDhc: number;
  totalGovernmentCharges: number;
  totalIntimationIncome: number;
  totalAmountCollected: number;
}

export interface IAgentWiseIncomeRecord {
  _id: string;
  status: string;
  loanAmount: number;
  challan03: number;
  challan05: number;
  dhc: number;
  governmentCharges: number;
  intimationCharges: number;
  totalAmount: number;

  agent: {
    _id: string;
    firstName: string;
    lastName: string;
  };

  client: {
    _id: string;
    prefix: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    email?: string;
    mobileNumber: string;
    propertyAddress: string;
    dateOfMortgage: string;
  };
}

export interface IAgentWiseIncomeReport {
  agentId: string;
  year: number | string;
  month: number | string;
  summary: IAgentWiseIncomeSummary;
  records: IAgentWiseIncomeRecord[];
}
