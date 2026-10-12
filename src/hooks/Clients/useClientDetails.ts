import { useEffect, useState } from "react";
import type { IClient } from "../../types/client.types";
import { getClientById } from "../../services/clientService";
import toast from "react-hot-toast";
import type { INoi } from "../../types/noi.types";
import { getNoiByClientId } from "../../services/noiService";

export function useClientDetails(id: string) {
  const [client, setClient] = useState<IClient>();
  const [noi, setNoi] = useState<INoi>();
  const [loading, setLoading] = useState(true);

  const fetchClient = async () => {
    try {
      setLoading(true);
      if (!id) {
        setLoading(false);
        return;
      }

      const clientResponse = await getClientById(id);
      console.log("Response received in hook:", clientResponse);

      if (!clientResponse?.success) {
        const message = clientResponse?.message || "Failed to load client";
        toast.error(message);
        return;
      } else {
        setClient(clientResponse.data);
      }

      const noiResponse = await getNoiByClientId(id);
      if (noiResponse?.success) {
        setNoi(noiResponse.data);
      }

      if (noiResponse?.success) {
        setNoi(noiResponse.data);
      } else {
        console.log("No NOI found for this client");
      }
    } catch (error: any) {
      console.log("Fetch Client error : ", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to load client details";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchClient();
  }, [id]);
  return { client, noi, loading, fetchClient };
}
