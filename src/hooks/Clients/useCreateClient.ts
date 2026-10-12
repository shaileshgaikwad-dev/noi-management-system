import toast from "react-hot-toast";
import { createNoiService } from "../../services/noiService";
import { createClient } from "../../services/clientService";
import {
  createClientSchema,
  type CreateClientFormData,
} from "../../schemas/createClientSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function useCreateClient() {
  const [loading, setLoading] = useState(false);
  const [bill, setBill] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientFormData>({
    resolver: zodResolver(createClientSchema),
  });

  const onSubmit = async (data: CreateClientFormData) => {
    try {
      setLoading(true);

      const response = await createClient(data);

      if (!response?.success) {
        toast.error(response?.data?.message);
        return;
      }

      const createdClient = response.data;

      //Creating noi
      const noiResponse = await createNoiService({
        client: createdClient._id,
        agent: data.agent,
        loanAmount: data.loanAmount,
        intimationCharges: data.intimationCharges,
        status: data.status,
      });

      if (!noiResponse) {
        toast.error(noiResponse?.data?.message || "Failed to create Noi");
        return;
      }

      setBill(noiResponse.data);
      toast.success("New client created successfully");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Failed to create client";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, loading, bill, setBill };
}
