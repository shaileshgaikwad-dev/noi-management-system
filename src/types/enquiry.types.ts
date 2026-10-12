export interface IEnquiries {
  _id: string;
  fullName: string;
  email: string;
  mobile: string | number;
  message: string;
  status: "New" | "Contacted" | "Resolved";
  createdAt: string;
  updatedAt: string;
}

//enquiry pagination
export interface IEnquiryPagination {
  currentPage: number;
  limit: number;
  totalEnquiries: number;
  totalPages: number;
}

//enquiry response

export interface IEnquiryResponse {
  success: boolean;
  message: string;
  data: {
    enquiries: IEnquiries[];
    pagination: IEnquiryPagination;
  };
}

//status updates
export interface IEnquiryStatusUpdates {
  success: boolean;
  message: string;
  data: IEnquiries;
}
