import { useQuery } from "@tanstack/react-query";
import { fetchAbouts } from "@/api/about";
import  type { IAbout } from "@/types/about";

export const useAbout = () => {
  return useQuery<IAbout[]>({
    queryKey: ["about"],
    queryFn: fetchAbouts,
  });
};
