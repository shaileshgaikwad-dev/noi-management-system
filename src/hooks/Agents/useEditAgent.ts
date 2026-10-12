import toast from "react-hot-toast";
import { getAgentById, updateAgent } from "../../services/agentService";
import {
  editAgentSchema,
  type EditAgentData,
} from "../../schemas/editAgentSchema";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function useEditAgent(id: string) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditAgentData>({
    resolver: zodResolver(editAgentSchema),
  });

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        const response = await getAgentById(id);
        const agent = response.data;

        reset({
          firstName: agent.firstName,
          lastName: agent.lastName,
          email: agent.email,
          mobileNumber: agent.mobileNumber,
          officeAddress: agent.officeAddress,
        });
      } catch (error: any) {
        console.error("Error fetching agent:", error);
        if (error.response?.status === 404 || error.response?.status === 400) {
          setNotFound(true);
          return;
        } else {
          const message =
            error.response?.data?.message ||
            error.message ||
            "Failed to load agent";
          toast.error(message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [id, reset]);

  const onSubmit = async (data: EditAgentData) => {
    try {
      setSaving(true);

      const response = await updateAgent(id, data);

      if (response) {
        navigate("/admin/agents");
        toast.success(response.message);
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    saving,
    notFound,
  };
}
