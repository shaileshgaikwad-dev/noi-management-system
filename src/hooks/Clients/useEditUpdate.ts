import toast from "react-hot-toast";
import { getNoiByClientId, updateNoiService } from "../../services/noiService";
import { getClientById, updateClient } from "../../services/clientService";
import {
  editClientSchema,
  type EditClientData,
} from "../../schemas/editClientSchema";
import { editNoiSchema, type EditNoiData } from "../../schemas/editNoiSchema";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useEditUpdateClient(id: string) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // CLIENT FORM

  const {
    register: registerClient,
    reset: resetClient,
    trigger: triggerCLient,
    handleSubmit: handleClientSubmit,
    getValues: getClientValues,
    formState: { errors: clientError },
  } = useForm<EditClientData>({
    resolver: zodResolver(editClientSchema),
    mode: "onChange",
  });

  // NOI FORM

  const {
    register: registerNoi,
    reset: resetNoi,
    trigger: triggerNoi,
    handleSubmit: handleNoiSubmit,
    getValues: getNoiValues,
    formState: { errors: noiErrors },
  } = useForm<EditNoiData>({
    resolver: zodResolver(editNoiSchema),
    mode: "onChange",
  });

  // FETCH EXISTING DATA

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (!id) {
          return;
        }

        const response = await getClientById(id);

        if (!response?.success) {
          toast.error(response?.message || "Failed to fetch client");
          return;
        }

        const client = response.data;

        console.log("Client edit data:", client);

        // PUT CLIENT DATA INTO FORM

        resetClient({
          prefix: client.prefix || "",
          firstName: client.firstName || "",
          middleName: client.middleName || "",
          lastName: client.lastName || "",
          email: client.email || "",
          gender: client.gender || "",
          mobileNumber: client.mobileNumber || "",
          dateOfMortgage: client.dateOfMortgage
            ? client.dateOfMortgage.substring(0, 10)
            : "",
          propertyAddress: client.propertyAddress || "",
        });

        // PUT NOI DATA INTO FORM

        const noiResponse = await getNoiByClientId(id);

        if (noiResponse?.success && noiResponse?.data) {
          const noi = noiResponse.data;

          resetNoi({
            loanAmount: noi.loanAmount,
            intimationCharges: noi.intimationCharges,
            status: noi.status,
            agent: typeof noi.agent === "object" ? noi.agent?._id : noi.agent,
          });
        }
      } catch (error: any) {
        console.error("Fetch client edit data error:", error);

        const message =
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch client data";

        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, resetClient, resetNoi]);

  const validateForms = async () => {
    const isClientValid = await triggerCLient();
    const isNoiValid = await triggerNoi();
    return isClientValid && isNoiValid;
  };

  // UPDATE CLIENT + NOI

  const onSubmit = async (
    clientData: EditClientData,
    noiData: EditNoiData,
    noiId: string | undefined,
  ) => {
    if (!noiId) {
      toast.error("Noi record not found");
      return false;
    }
    try {
      setSaving(true);

      // Update Client
      const clientResponse = await updateClient(id, {
        ...clientData,
        agent: noiData.agent,
      });

      if (!clientResponse?.success) {
        toast.error(clientResponse?.message || "Failed to update client");
        return false;
      }

      // Update NOI
      const noiResponse = await updateNoiService(noiId, noiData);

      if (!noiResponse?.success) {
        toast.error(noiResponse?.message || "Failed to update NOI");
        return false;
      }

      toast.success("Client and Noi updated successfully");
      return true;
    } catch (error: any) {
      console.error("Update client and NOI error:", error);

      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to update client";

      toast.error(message);
    } finally {
      setSaving(false);
    }
  };

  return {
    registerClient,
    handleClientSubmit,
    clientError,
    getClientValues,
    registerNoi,
    handleNoiSubmit,
    noiErrors,
    getNoiValues,
    validateForms,
    onSubmit,
    loading,
    saving,
  };
}
