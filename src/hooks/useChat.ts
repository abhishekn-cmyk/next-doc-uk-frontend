import { getChat, sendChat } from "@/api/chat";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type ChatPayload = {
  userId: string;
  text: string;
  tab?: "General" | "Cardiology" | "Emergency" | "Surgery" | "Internal Medicine";
};

export const useSendChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // ✅ Accept object instead of string
    mutationFn: (payload: ChatPayload) => sendChat(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
    },

    onError: (error: any) => {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while sending the request"
      );
    },
  });
};

export const useChats = () => {
  return useQuery({
    queryFn: () => getChat(),
    queryKey: ["chat"],
  });
};
