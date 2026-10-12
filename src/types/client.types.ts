export interface IClient {
  _id: string;
  prefix: "MR." | "MS." | "MRS." | "DR." | "PROF." | "REV.";
  firstName: string;
  middleName?: string;
  lastName: string;
  mobileNumber: string;
  gender: "Male" | "Female" | "Transgender";
  propertyAddress: string;
  email: string;
  agent:
    | string
    | {
        _id: string;
        firstName: string;
        lastName: string;
        email?: string;
        mobileNumber?: string;
      };
  dateOfMortgage: string;
  loanAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface IClientPagination {
  totalRecords: number;
  currentPage: number;
  totalPages: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface IClientListResponse {
  success: boolean;
  message: string;
  count: number;
  data: IClient[];
  pagination: IClientPagination;
}

export interface ICreateClientRequest {
  prefix: "MR." | "MRS." | "MS." | "DR." | "PROF." | "REV.";
  firstName: string;
  middleName?: string;
  lastName: string;
  mobileNumber: string;
  gender: "MALE" | "FEMALE" | "TRANSGENDER";
  propertyAddress: string;
  email: string;
  agent: string;
  dateOfMortgage: string;
  loanAmount: number;
  intimationCharges: number;
  status?: "Pending" | "In Progress" | "Completed";
}
