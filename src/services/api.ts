import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//auto log out on any (expired/invalid token);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isLoginRequest = error.config?.url?.includes("/admin");
    const isOnProtectedPage =
      window.location.pathname.startsWith("/admin") &&
      window.location.pathname !== "/admin/login";

    if (
      error.response?.status === 401 &&
      !isLoginRequest &&
      isOnProtectedPage
    ) {
      localStorage.removeItem("accessToken");
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  },
);
