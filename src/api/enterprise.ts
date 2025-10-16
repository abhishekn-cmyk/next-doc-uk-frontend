import axiosInstance from "@/lib/axiosInstance";
import type { IEnterpriseSolution } from "@/types/enterpriseSolution";

export const fetchEnterprise = async (): Promise<IEnterpriseSolution[]> => {
  const res = await axiosInstance.get("/trust");
  return res.data?.data ?? [];
};
