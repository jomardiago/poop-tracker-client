import { useMutation } from "@tanstack/react-query";
import api from "./api";

type RegisterRequest = {
  username: string;
  email: string;
  password: string;
};

const register = (data: RegisterRequest) => {
  return api
    .post("/auth/regsiter", data)
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
