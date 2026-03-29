import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ email, password }) => {
      const res = await api.post("/auth/login", { email, password });
      return res.data;
    },
    onSuccess: (data) => {
      setAuth(data.data.user, data.token);
      navigate("/dashboard");
    },
  });
};

export const useLogout = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  return async () => {
    try {
      await api.post("/auth/logout");
    } catch (_) {}
    logout();
    navigate("/login");
  };
};