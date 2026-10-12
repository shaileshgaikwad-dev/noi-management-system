import { api } from "./api";

export const loginAdmin = async (email: string, hashPassword: string) => {
  const response = await api.post(`/admin`, {
    email,
    hashPassword,
  });

  return response.data;
};
