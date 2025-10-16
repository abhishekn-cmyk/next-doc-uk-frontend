// hooks/useConsent.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchConsent, saveConsent } from "@/api/consent";
import type { Consent, ConsentChoice, ConsentPolicy, ConsentLocation } from "@/types/consent";

export const useConsent = () => {
  const queryClient = useQueryClient();

  const { data: consent, isLoading } = useQuery<Consent | null>({
    queryKey: ["consent"],
    queryFn: fetchConsent,
  });

  const mutation = useMutation({
    mutationFn: ({ choice, policy, location }: { choice: ConsentChoice; policy: ConsentPolicy; location?: ConsentLocation }) =>
      saveConsent({ choice, policy, location }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consent"] });
    },
  });

  return {
    consent,
    isLoading,
   save: (choice: ConsentChoice, policy: ConsentPolicy, location?: ConsentLocation) =>
  mutation.mutate({ choice, policy, location }),

  };
};
