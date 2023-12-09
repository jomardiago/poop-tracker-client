import { useMutation } from "@tanstack/react-query";

import api from "./api";
import { Session } from "@/stores/session-store";

type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

type LoginRequest = Omit<RegisterRequest, "email">;

const register = (data: RegisterRequest): Promise<Session> => {
  return api
    .post("/auth/register", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

const login = (data: LoginRequest): Promise<Session> => {
  return api
    .post("/auth/login", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onError: (error: { message: string }) => {
      return error;
    },
  });
};
