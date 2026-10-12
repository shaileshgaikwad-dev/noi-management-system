import { useState } from "react";
import type { IEnquiries } from "../../types/enquiry.types";
import { updateEnquiryStatus } from "../../services/enquiryFormService";
import toast from "react-hot-toast";

export function useUpdateEnquiryStatus() {
  const [updateEnquiry, setUpdatedEnquiry] = useState<
    IEnquiries["status"] | "New"
  >("New");

  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = async (
    id: string,
    status: IEnquiries["status"],
  ) => {
    
    if (!id) return null;

    try {
      setLoading(true);
      const response = await updateEnquiryStatus(id, status);

      if (!response?.success) {
        throw new Error(response?.message || "Failed to update status");
      }

      setUpdatedEnquiry(response.data);

      toast.success(response.message || "Status updated");
      return response.data;
    } catch (error: any) {
      console.error("Update enquiry status error:", error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update status",
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdateStatus, updateEnquiry, loading };
}
