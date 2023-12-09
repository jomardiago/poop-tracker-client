import { useMutation, useQuery } from "@tanstack/react-query";

import api, { getRequestHeader } from "./api";

type CreateNewEntryRequest = {
  entryDate: string;
};

type MessageResponse = {
  message: string;
};

type Poop = {
  id: string;
  entryDate: Date;
};

const poopQueryKeys = {
  root: ["poops"],
  byUserId: (userId: string | undefined) => {
    return [...poopQueryKeys.root, userId];
  },
};

const createNewEntry = (
  data: CreateNewEntryRequest,
): Promise<MessageResponse> => {
  return api
    .post("/poops", data, getRequestHeader())
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

const getPoopEntries = (): Promise<Poop[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "0",
          entryDate: new Date(),
        },
      ]);
    }, 3000);
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

export const usePoopEntriesQuery = (userId: string | undefined) => {
  return useQuery({
    queryKey: poopQueryKeys.byUserId(userId),
    queryFn: getPoopEntries,
  });
};
