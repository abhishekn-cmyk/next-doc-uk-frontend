import { useQuery } from "@tanstack/react-query";
import * as api from "@/api/enterprise";
import  type { IEnterpriseSolution } from "@/types/enterpriseSolution";

export const useProposals = () =>
  useQuery<IEnterpriseSolution[], Error>({
    queryKey: ["proposals"],
    queryFn: api.fetchEnterprise,
  });
