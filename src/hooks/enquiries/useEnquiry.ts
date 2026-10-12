import { useState } from "react";
import type { IEnquiries } from "../../types/enquiry.types";
import { createEnquiryService } from "../../services/enquiryFormService";
import toast from "react-hot-toast";

export function useEnquiry() {
  const [loading, setLoading] = useState(false);

  const handleEnquiry = async (data: IEnquiries) => {
    try {
      setLoading(true);

      const response = await createEnquiryService(data);

      if (!response?.success) {
        throw new Error(response?.message || "Failed to submit enquiry");
      }

      toast.success(
        response.message ||
          "Thank you for your enquiry. Our team will get back to you shortly.",
        {
          style: {
            borderRadius: "10px",
            background: "#1E293B",
            color: "#F1F5F9",
            border: "1px solid #334155",
            fontSize: "14px",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "#10B981",
            secondary: "#1E293B",
          },
          position: "top-right",
          duration: 4000,
        },
      );

      return { success: true, data: response.data };
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to submit enquiry";

      toast.error(message, { position: "top-right" });
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { handleEnquiry, loading };
}
