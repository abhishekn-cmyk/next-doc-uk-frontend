import { getChat, sendChat } from "@/api/chat";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSendChat = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => sendChat(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
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
