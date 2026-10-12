export interface INoi {
  _id: string;
  client:
    | string
    | { _id: string; firstName: string; middleName?: string; lastName: string };
  agent: string | { _id: string; firstName: string; lastName: string };
  loanAmount: number;
  challan03: number;
  challan05: number;
  dhc: number;
  governmentCharges: number;
  intimationCharges: number;
  totalAmount: number;
  status: "Pending" | "In Progress" | "Completed";
  createdAt?: string;
  updatedAt?: string;
}
