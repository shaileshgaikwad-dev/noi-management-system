import { useCallback, useEffect, useState } from "react";
import { getAllEnquiriesService } from "../../services/enquiryFormService";
import {
  type IEnquiries,
  type IEnquiryPagination,
} from "../../types/enquiry.types";
import toast from "react-hot-toast";

export function useAllEnquiries() {
  const [loading, setLoading] = useState(false);
  const [enquiries, setEnquiries] = useState<IEnquiries[]>([]);
  const [pagination, setPagination] = useState<IEnquiryPagination | null>(null);

  const handleAllEnquiries = useCallback(async (page = 1, status = "All") => {
    try {
      setLoading(true);

      const response = await getAllEnquiriesService({
        page,
        limit: 20,
        status,
      });

      const newEnquiries = response.data?.enquiries || [];

      setEnquiries(newEnquiries);

      setPagination(response.data?.pagination || null);
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch enquiries";
      toast.error(message);
      setEnquiries([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleAllEnquiries(1, "All");
  }, [handleAllEnquiries]);

  return { enquiries, handleAllEnquiries, loading, pagination };
}
