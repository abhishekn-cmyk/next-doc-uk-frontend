import { useQuery } from "@tanstack/react-query";
import { fetchTools, getMatches } from "@/api/tools";
import type { ITool } from "@/types/tool";

export const useTools = () => {
  return useQuery<ITool[]>({
    queryKey: ["tools"],
    queryFn: fetchTools,
  });
};

export const useMatches = () => {
  return useQuery({
    queryKey: ["sponsor-match"],
    queryFn: getMatches,
  });
};
