import { useQuery } from "@tanstack/react-query";
import type { IProgram } from "@/types/program";
import { getProgramsByCategory } from "@/api/program";

export const usePrograms = () => {
  return useQuery<IProgram[]>({
    queryKey: ["programs"],
    queryFn: () => getProgramsByCategory(),
  });
};
