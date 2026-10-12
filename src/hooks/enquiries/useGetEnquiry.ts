import { useEffect, useRef, useState } from "react";
import { getEnquiryByIdService } from "../../services/enquiryFormService";
import toast from "react-hot-toast";
import type { IEnquiries } from "../../types/enquiry.types";

export function useGetEnquiry(id: string) {
  const [enquiry, setEnquiry] = useState<IEnquiries | null>(null);
  const [loading, setLoading] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    if (!id) {
      setEnquiry(null);
      setLoading(false);
      return;
    }

    const fetchEnquiry = async () => {
      try {
        setLoading(true);
        setEnquiry(null);
        const response = await getEnquiryByIdService(id);

        if (!isMountedRef.current) return;

        if (response?.success) {
          setEnquiry(response.data);
        } else {
          setEnquiry(null);
          toast.error(response?.message || "Failed to load enquiry details");
        }
      } catch (error: any) {
        if (!isMountedRef.current) return;

        setEnquiry(null);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to load enquiry details",
        );
      } finally {
        if (isMountedRef.current) setLoading(false);
      }
    };
    fetchEnquiry();

    return () => {
      isMountedRef.current = false;
    };
  }, [id]);

  return { loading, enquiry };
}
