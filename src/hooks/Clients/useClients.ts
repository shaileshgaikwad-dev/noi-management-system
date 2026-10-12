import { useEffect, useRef, useState } from "react";
import { getAllClients } from "../../services/clientService";
import type { IClient, IClientPagination } from "../../types/client.types";

export function useClients(year: string) {
  const [clients, setClients] = useState<IClient[]>([]);
  const [pagination, setPagination] = useState<IClientPagination | null>(null);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setSearch(searchInput), 400);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const fetchClients = async (page = 1, append = false) => {
    const currentRequestId = ++requestIdRef.current;

    try {
      setLoading(true);

      const response = await getAllClients({
        page,
        limit: 15,
        search,
        year,
      });

      //Ignore this response if a newer request has since been made
      if (currentRequestId !== requestIdRef.current) return;

      const newClients = response.data?.clients || [];

      if (append) {
        setClients((prev) => [...prev, ...newClients]);
      } else {
        setClients(newClients);
      }

      setPagination(response.data?.pagination || null);
    } catch (error) {
      if (currentRequestId !== requestIdRef.current) return;
      console.log("Error fetching clients:", error);
      setClients([]);
      setPagination(null);
    } finally {
      if (currentRequestId === requestIdRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients(1, false);
  }, [search, year]);

  const loadMore = () => {
    if (pagination?.hasNextPage && !loading) {
      fetchClients(pagination.currentPage + 1, true);
    }
  };
  return {
    clients,
    pagination,
    search: searchInput,
    setSearch: setSearchInput,
    loading,
    loadMore,
    fetchClients,
  };
}
