import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api, { getRequestHeader } from "./api";

type CreateNewEntryRequest = {
  entryDate: string;
};

type MessageResponse = {
  message: string;
};

type Poop = {
  id: string;
  entryDate: string;
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
  return api
    .get("poops", getRequestHeader())
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

const deletePoop = (id: string): Promise<MessageResponse> => {
  return api
    .delete(`/poops/${id}`, getRequestHeader())
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};

export const useCreateNewEntryMutation = (userId: string | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNewEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: poopQueryKeys.byUserId(userId),
      });
    },
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

export const useDeletePoopMutation = (userId: string | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePoop,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: poopQueryKeys.byUserId(userId),
      });
    },
    onError: (error: MessageResponse) => {
      return error.message;
    },
  });
};
