import { useMutation } from "@tanstack/react-query";

import api, { getRequestHeader } from "./api";

type CreateNewEntryRequest = {
  entryDate: string;
};

type MessageResponse = {
  message: string;
};

const createNewEntry = (
  data: CreateNewEntryRequest,
): Promise<MessageResponse> => {
  return api
    .post("/poop", data, getRequestHeader())
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useCreateNewEntryMutation = () => {
  return useMutation({
    mutationFn: createNewEntry,
    onError: (error: MessageResponse) => {
      return error.message;
    },
  });
};
